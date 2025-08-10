import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { ExternalLink } from 'lucide-react';

export default function TermsPage() {
  return (
    <Layout>
      <Helmet>
        <title>Terms of Service | SnapToPDF</title>
        <meta name="description" content="Terms and conditions for using the SnapToPDF service." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-4xl mx-auto">
          <p className="text-muted-foreground text-sm mb-6">Last updated: August 9, 2025</p>
          
          <h2>1. Introduction</h2>
          <p>
            Welcome to SnapToPDF. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using SnapToPDF, you agree to be bound by these Terms.
          </p>
          <p>
            These Terms incorporate standard legal principles found in <a href="https://www.uniformlaws.org/acts/ucc" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              Uniform Commercial Code <ExternalLink className="h-3 w-3" />
            </a> and follow guidelines from <a href="https://www.ftc.gov/business-guidance/advertising-marketing" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              Federal Trade Commission <ExternalLink className="h-3 w-3" />
            </a> regarding fair business practices.
          </p>
          
          <h2>2. Service Description</h2>
          <p>
            SnapToPDF provides free online document conversion services. All processing is performed locally in your browser, and no files are uploaded to our servers. The service is provided on an "as is" and "as available" basis without warranties of any kind.
          </p>
          
          <h2>3. User Obligations</h2>
          <p>
            By using our service, you agree to:
          </p>
          <ul>
            <li>Use the service only for lawful purposes and in accordance with these Terms</li>
            <li>Not use the service to violate any applicable local, state, national, or international law</li>
            <li>Not attempt to interfere with, compromise, or disrupt the service</li>
            <li>Not attempt to reverse engineer or access the underlying code of the service</li>
          </ul>
          <p>
            These obligations align with standard contract principles as outlined in <a href="https://www.law.cornell.edu/wex/contract" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              Cornell Law School's Legal Information Institute <ExternalLink className="h-3 w-3" />
            </a>.
          </p>
          
          <h2>4. Intellectual Property</h2>
          <p>
            The content, features, and functionality of SnapToPDF, including but not limited to text, graphics, logos, and software, are owned by SnapToPDF and are protected by United States and international copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our materials without our prior written consent.
          </p>
          <p>
            For more information about copyright law, refer to the <a href="https://www.copyright.gov/title17/" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              U.S. Copyright Office <ExternalLink className="h-3 w-3" />
            </a>.
          </p>
          
          <h2>5. User Content</h2>
          <p>
            You retain all rights to your content. Since our service processes all files locally in your browser, we never have access to, store, or claim any ownership over your documents or data.
          </p>
          
          <h2>6. Third-Party Services</h2>
          <p>
            Our service may contain links to third-party websites or services. We are not responsible for the content or practices of any linked third-party sites. We encourage you to read the terms and privacy policies of any third-party sites you visit.
          </p>
          
          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, SnapToPDF and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, arising out of or in connection with your access to or use of the service.
          </p>
          <p>
            This limitation is consistent with principles outlined in the <a href="https://www.law.cornell.edu/wex/restatement_of_the_law" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              Restatements of the Law <ExternalLink className="h-3 w-3" />
            </a> regarding contract limitations.
          </p>
          
          <h2>8. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless SnapToPDF and its affiliates from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable attorney's fees, arising out of or in any way connected with your access to or use of the service, your violation of these Terms, or your violation of any rights of another.
          </p>
          
          <h2>9. Modifications to the Service and Terms</h2>
          <p>
            We reserve the right to modify or discontinue, temporarily or permanently, the service or any features or portions thereof without prior notice. We also reserve the right to update these Terms at any time. Continued use of the service following the posting of revised Terms means that you accept and agree to the changes.
          </p>
          
          <h2>10. Termination</h2>
          <p>
            We may terminate or suspend your access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
          </p>
          
          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of the State of California without regard to its conflict of law provisions. This approach follows standard practice as described in <a href="https://www.law.cornell.edu/wex/choice_of_law" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              Choice of Law doctrine <ExternalLink className="h-3 w-3" />
            </a>.
          </p>
          
          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us through our <a href="/contact" className="underline">Contact Page</a>.
          </p>
          
          <div className="border-t border-gray-200 mt-8 pt-8">
            <p className="text-sm text-muted-foreground">
              These terms of service are provided in compliance with consumer protection regulations and general contract law principles.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}