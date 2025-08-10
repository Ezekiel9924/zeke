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
  title = 'Free PDF Converter | Convert Files to PDF Without Registration',
  description = 'Learn how to convert Word, Excel, images and more to PDF format without installing software. Our free online tool makes document conversion simple and secure with no registration.',
  keywords = 'how to convert files to pdf, pdf maker online free, convert documents to pdf without software, simple pdf conversion, easy pdf creator, document to pdf converter tutorial',
  ogImage = '/images/PDFConverter.jpg',
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
            'name': 'Free PDF Tools'
          }
        })}
      </script>
    </Helmet>
  );
}