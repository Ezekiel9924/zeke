import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export function SEO({
  title = 'Anything to PDF Converter | Free Online Tool',
  description = 'Convert any file type to PDF instantly. Free, fast, and secure online converter with no sign-up required.',
  keywords = 'pdf converter, convert to pdf, online pdf converter, merge pdf, combine pdf, free pdf tool',
  ogImage = '/og-image.png',
  canonicalUrl = 'https://yourwebsite.com/pdf-converter',
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* JSON-LD Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          'name': title,
          'description': description,
          'operatingSystem': 'All',
          'applicationCategory': 'UtilityApplication',
          'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'USD'
          },
          'creator': {
            '@type': 'Organization',
            'name': 'Lyra PDF Tools'
          }
        })}
      </script>
    </Helmet>
  );
}