import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { PDFConverter } from '@/components/pdf-converter/PDFConverter';
import { AdBanner } from '@/components/ads/AdBanner';
import { Features } from '@/components/features/Features';
import { SEO } from '@/components/SEO';

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
              
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">More Tools</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">PDF to Word Converter</li>
                  <li className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">PDF Compressor</li>
                  <li className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">PDF to Image Converter</li>
                  <li className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">PDF Editor</li>
                  <li className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">PDF to Excel Converter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <AdBanner position="bottom" className="max-w-5xl mx-auto mt-8" />
      </div>
    </Layout>
  );
}