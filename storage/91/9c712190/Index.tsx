import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { PDFConverter } from '@/components/pdf-converter/PDFConverter';
import { AdBanner } from '@/components/ads/AdBanner';
import { Features } from '@/components/features/Features';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';

export default function IndexPage() {
  return (
    <Layout>
      <SEO />
      
      <div className="py-6">
        <AdBanner position="top" className="max-w-5xl mx-auto mb-8" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <PDFConverter />
            </div>
            
            <div className="space-y-8">
              <Features />
              <AdBanner position="sidebar" />
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-3">PDF Conversion Tools</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Need to convert your PDFs to other formats? Try our new conversion tools!
                </p>
                <Button asChild variant="outline" size="sm" className="w-full gap-2">
                  <Link to="/pdf-to-formats">
                    <FileDown className="h-4 w-4" /> Convert PDF to Other Formats
                  </Link>
                </Button>
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2">Available Formats:</h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs">
                    <li className="text-gray-600">• Word (.docx)</li>
                    <li className="text-gray-600">• Excel (.xlsx)</li>
                    <li className="text-gray-600">• Images (.jpg, .png)</li>
                    <li className="text-gray-600">• HTML</li>
                    <li className="text-gray-600">• Text (.txt)</li>
                    <li className="text-gray-600">• And more...</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <AdBanner position="bottom" className="max-w-5xl mx-auto mt-8" />
      </div>
      
      <Helmet>
        <title>SnapToPDF | Free PDF Converter</title>
        <meta name="description" content="Free online PDF tools for converting files to PDF and converting PDFs to other formats. No registration, no uploads, and 100% private." />
      </Helmet>
    </Layout>
  );
}