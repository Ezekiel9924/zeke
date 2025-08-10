<?php
/**
 * Plugin Name: Anything to PDF Converter
 * Plugin URI: https://yourwebsite.com/pdf-converter
 * Description: A powerful tool that converts any file type to PDF. Simply drag and drop files to convert.
 * Version: 1.0.0
 * Author: Lyra PDF Tools
 * Author URI: https://yourwebsite.com
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: anything-to-pdf
 * Domain Path: /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

/**
 * Define plugin constants
 */
define('ANYTHING_TO_PDF_VERSION', '1.0.0');
define('ANYTHING_TO_PDF_PATH', plugin_dir_path(__FILE__));
define('ANYTHING_TO_PDF_URL', plugin_dir_url(__FILE__));

/**
 * Register shortcode for the PDF converter
 */
function anything_to_pdf_shortcode($atts) {
    // Enqueue required scripts and styles
    wp_enqueue_script('react');
    wp_enqueue_script('react-dom');
    wp_enqueue_script('pdf-lib', 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js', array(), ANYTHING_TO_PDF_VERSION, true);
    wp_enqueue_script('anything-to-pdf', ANYTHING_TO_PDF_URL . 'js/anything-to-pdf.min.js', array('react', 'react-dom', 'pdf-lib'), ANYTHING_TO_PDF_VERSION, true);
    wp_enqueue_style('anything-to-pdf', ANYTHING_TO_PDF_URL . 'css/anything-to-pdf.min.css', array(), ANYTHING_TO_PDF_VERSION, 'all');
    
    // Return the container for our React app
    return '<div id="anything-to-pdf-converter" class="anything-to-pdf-container"></div>';
}
add_shortcode('anything_to_pdf', 'anything_to_pdf_shortcode');

/**
 * Add settings page
 */
function anything_to_pdf_add_settings_page() {
    add_options_page(
        'Anything to PDF Settings',
        'Anything to PDF',
        'manage_options',
        'anything-to-pdf',
        'anything_to_pdf_render_settings_page'
    );
}
add_action('admin_menu', 'anything_to_pdf_add_settings_page');

/**
 * Render the settings page
 */
function anything_to_pdf_render_settings_page() {
    ?>
    <div class="wrap">
        <h1>Anything to PDF Settings</h1>
        
        <form method="post" action="options.php">
            <?php
            settings_fields('anything_to_pdf_options');
            do_settings_sections('anything-to-pdf');
            submit_button();
            ?>
        </form>
        
        <div class="card">
            <h2>How to use the shortcode</h2>
            <p>Add the PDF converter to any page or post using this shortcode:</p>
            <code>[anything_to_pdf]</code>
        </div>
    </div>
    <?php
}

/**
 * Register settings
 */
function anything_to_pdf_register_settings() {
    register_setting('anything_to_pdf_options', 'anything_to_pdf_max_file_size', array(
        'type' => 'number',
        'default' => 50,
        'sanitize_callback' => 'absint'
    ));
    
    register_setting('anything_to_pdf_options', 'anything_to_pdf_show_ads', array(
        'type' => 'boolean',
        'default' => true,
    ));
    
    add_settings_section(
        'anything_to_pdf_general_settings',
        'General Settings',
        'anything_to_pdf_general_settings_callback',
        'anything-to-pdf'
    );
    
    add_settings_field(
        'anything_to_pdf_max_file_size',
        'Max File Size (MB)',
        'anything_to_pdf_max_file_size_callback',
        'anything-to-pdf',
        'anything_to_pdf_general_settings'
    );
    
    add_settings_field(
        'anything_to_pdf_show_ads',
        'Show Ads',
        'anything_to_pdf_show_ads_callback',
        'anything-to-pdf',
        'anything_to_pdf_general_settings'
    );
}
add_action('admin_init', 'anything_to_pdf_register_settings');

/**
 * Settings section callback
 */
function anything_to_pdf_general_settings_callback() {
    echo '<p>Configure the PDF converter settings below:</p>';
}

/**
 * Max file size field callback
 */
function anything_to_pdf_max_file_size_callback() {
    $max_file_size = get_option('anything_to_pdf_max_file_size', 50);
    echo '<input type="number" name="anything_to_pdf_max_file_size" value="' . esc_attr($max_file_size) . '" min="1" max="100" /> MB';
}

/**
 * Show ads field callback
 */
function anything_to_pdf_show_ads_callback() {
    $show_ads = get_option('anything_to_pdf_show_ads', true);
    echo '<input type="checkbox" name="anything_to_pdf_show_ads" value="1" ' . checked(1, $show_ads, false) . ' />';
}