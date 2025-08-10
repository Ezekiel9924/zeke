import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { ExternalLink } from 'lucide-react';

export default function GDPRPage() {
  return (
    <Layout>
      <Helmet>
        <title>GDPR Compliance | SnapToPDF</title>
        <meta name="description" content="Information about SnapToPDF's compliance with the General Data Protection Regulation (GDPR)." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">GDPR Compliance</h1>
        
        <div className="prose prose-lg max-w-4xl mx-auto">
          <p className="text-muted-foreground text-sm mb-6">Last updated: August 9, 2025</p>
          
          <h2>1. Introduction</h2>
          <p>
            This document explains how SnapToPDF complies with the <a href="https://gdpr-info.eu/" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              General Data Protection Regulation (GDPR) <ExternalLink className="h-3 w-3" />
            </a>, which is the European Union's comprehensive data protection law.
          </p>
          <p>
            At SnapToPDF, we designed our service with privacy and data protection as core principles from the very beginning, which naturally aligns with GDPR requirements.
          </p>
          
          <h2>2. Our Data Protection Approach</h2>
          <p>
            SnapToPDF processes all document conversions directly in your browser. This approach means:
          </p>
          <ul>
            <li>Your files never leave your device</li>
            <li>We do not collect, store, or process the contents of your documents</li>
            <li>We do not require user accounts or registration</li>
            <li>We collect minimal data necessary to provide our service</li>
          </ul>
          <p>
            This approach aligns with the GDPR principles of data minimization (Article 5(1)(c)) and privacy by design (Article 25) as outlined in the <a href="https://gdpr-info.eu/art-5-gdpr/" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              GDPR legislative text <ExternalLink className="h-3 w-3" />
            </a>.
          </p>
          
          <h2>3. Legal Basis for Processing (Article 6)</h2>
          <p>
            For the minimal data we do collect, our legal basis for processing under GDPR Article 6 is:
          </p>
          <ul>
            <li><strong>Contract (Article 6(1)(b)):</strong> Processing necessary for the performance of our service to you</li>
            <li><strong>Legitimate Interests (Article 6(1)(f)):</strong> Processing necessary for our legitimate interests in improving our service and ensuring its security</li>
            <li><strong>Consent (Article 6(1)(a)):</strong> Where applicable, such as for optional analytics cookies</li>
          </ul>
          <p>
            You can learn more about the legal bases for processing in <a href="https://gdpr-info.eu/art-6-gdpr/" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              Article 6 of the GDPR <ExternalLink className="h-3 w-3" />
            </a>.
          </p>
          
          <h2>4. Your Data Rights</h2>
          <p>
            Under the GDPR, you have several rights regarding your personal data. Since we process minimal data and don't require accounts, many of these rights may not be applicable in practice. However, we respect and uphold all GDPR rights, including:
          </p>
          <ul>
            <li><strong>Right to access (Article 15):</strong> You can request information about what data we have about you</li>
            <li><strong>Right to rectification (Article 16):</strong> You can request we correct inaccurate data</li>
            <li><strong>Right to erasure (Article 17):</strong> You can request deletion of your data</li>
            <li><strong>Right to restrict processing (Article 18):</strong> You can request we limit how we use your data</li>
            <li><strong>Right to data portability (Article 20):</strong> You can request your data in a portable format</li>
            <li><strong>Right to object (Article 21):</strong> You can object to certain types of processing</li>
          </ul>
          <p>
            Full details of these rights are available in <a href="https://gdpr-info.eu/chapter-3/" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              Chapter 3 of the GDPR <ExternalLink className="h-3 w-3" />
            </a>.
          </p>
          
          <h2>5. Data Protection Measures</h2>
          <p>
            Our approach to data protection includes:
          </p>
          <ul>
            <li><strong>Browser-based processing:</strong> Files remain on your device, dramatically reducing data security risks</li>
            <li><strong>Transport Layer Security (TLS):</strong> All communication with our servers is encrypted</li>
            <li><strong>Regular security audits:</strong> We regularly review our systems for potential vulnerabilities</li>
            <li><strong>Data minimization:</strong> We only collect what's absolutely necessary</li>
          </ul>
          
          <h2>6. International Data Transfers</h2>
          <p>
            Since we don't transfer your document data to our servers, international data transfer concerns are minimized. The limited analytics data we collect may be processed within the EU or in countries with adequate data protection measures as determined by the European Commission.
          </p>
          <p>
            For information about international data transfers under GDPR, see <a href="https://gdpr-info.eu/issues/third-countries/" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              GDPR rules on third countries <ExternalLink className="h-3 w-3" />
            </a>.
          </p>
          
          <h2>7. Data Protection Officer</h2>
          <p>
            While not required for our operations under GDPR Article 37, we have designated a team member responsible for data protection compliance. You can contact them with any GDPR-related concerns through our <a href="/contact" className="underline">Contact Page</a>.
          </p>
          
          <h2>8. Data Breach Notification</h2>
          <p>
            In the unlikely event of a data breach affecting personal data, we will notify relevant supervisory authorities and affected individuals in accordance with GDPR Articles 33 and 34, as outlined in <a href="https://gdpr-info.eu/art-33-gdpr/" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              GDPR breach notification requirements <ExternalLink className="h-3 w-3" />
            </a>.
          </p>
          
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about our GDPR compliance or wish to exercise your rights under GDPR, please contact us through our <a href="/contact" className="underline">Contact Page</a>.
          </p>
          
          <div className="border-t border-gray-200 mt-8 pt-8">
            <p className="text-sm text-muted-foreground">
              This GDPR compliance statement is based on the provisions of Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}