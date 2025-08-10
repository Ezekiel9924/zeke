import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { ExternalLink } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | SnapToPDF</title>
        <meta name="description" content="SnapToPDF's privacy policy explains how we handle your data and protect your privacy." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-4xl mx-auto">
          <p className="text-muted-foreground text-sm mb-6">Last updated: August 9, 2025</p>
          
          <h2>1. Introduction</h2>
          <p>
            Welcome to SnapToPDF ("we", "our", or "us"). We are committed to protecting your privacy and ensuring your personal information is handled responsibly.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, and protect any information that you share when you use our website and services. This policy is compliant with <a href="https://gdpr-info.eu/" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              General Data Protection Regulation (GDPR) <ExternalLink className="h-3 w-3" />
            </a> and <a href="https://oag.ca.gov/privacy/ccpa" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              California Consumer Privacy Act (CCPA) <ExternalLink className="h-3 w-3" />
            </a>.
          </p>
          
          <h2>2. Information We Don't Collect</h2>
          <p>
            Due to our privacy-first approach, SnapToPDF processes all document conversions directly in your browser. This means:
          </p>
          <ul>
            <li>We do not collect, store, or process the contents of your files</li>
            <li>Your files are never uploaded to our servers</li>
            <li>We do not maintain user accounts or registration information</li>
            <li>We do not track individual user activity beyond anonymous analytics</li>
          </ul>
          
          <h2>3. Limited Information We Do Collect</h2>
          <p>
            We collect a minimal amount of information to provide and improve our service:
          </p>
          <ul>
            <li>
              <strong>Anonymous usage statistics:</strong> Basic information about how our service is used, such as which features are most popular and general performance metrics.
            </li>
            <li>
              <strong>Technical information:</strong> Data necessary for our service to function, such as browser type and version, operating system, and screen resolution.
            </li>
            <li>
              <strong>Contact form submissions:</strong> If you voluntarily contact us through our contact form, we will receive the information you provide.
            </li>
          </ul>
          
          <h2>4. How We Use Information</h2>
          <p>We use the limited information we collect for the following purposes:</p>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To improve our website and user experience</li>
            <li>To respond to your inquiries and support requests</li>
            <li>To analyze usage patterns and optimize performance</li>
          </ul>
          
          <h2>5. Cookies and Tracking Technologies</h2>
          <p>
            Our website uses a minimal set of cookies that are necessary for the website to function properly. These are:
          </p>
          <ul>
            <li><strong>Essential cookies:</strong> Required for basic site functionality</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website (anonymized)</li>
          </ul>
          <p>
            You can control cookies through your browser settings. For more information about cookies, visit <a href="https://www.allaboutcookies.org/" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              All About Cookies <ExternalLink className="h-3 w-3" />
            </a>.
          </p>
          
          <h2>6. Third-Party Services</h2>
          <p>
            We use limited third-party services to help us operate our website:
          </p>
          <ul>
            <li>
              <strong>Analytics:</strong> We use anonymized analytics to understand how our service is used. This data cannot be traced back to individuals.
            </li>
            <li>
              <strong>Advertising:</strong> We display non-personalized advertisements that do not use personal data for targeting.
            </li>
          </ul>
          <p>
            These services are compliant with relevant privacy laws such as the GDPR and CCPA. You can learn more about your rights under these regulations at <a href="https://gdpr-info.eu/chapter-3/" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              GDPR Individual Rights <ExternalLink className="h-3 w-3" />
            </a>.
          </p>
          
          <h2>7. Data Security</h2>
          <p>
            We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of information. However, since we don't store your files or personal data, the primary security benefits come from our browser-based processing approach.
          </p>
          <p>
            For general information about online security practices, you can refer to the <a href="https://www.ftc.gov/business-guidance/privacy-security/data-security" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              FTC's Data Security resources <ExternalLink className="h-3 w-3" />
            </a>.
          </p>
          
          <h2>8. Children's Privacy</h2>
          <p>
            Our service is not directed to children under 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can take necessary actions.
          </p>
          <p>
            For more information about children's online privacy, visit the <a href="https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              FTC's Children's Privacy page <ExternalLink className="h-3 w-3" />
            </a>.
          </p>
          
          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this page.
          </p>
          
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through our <a href="/contact" className="underline">Contact Page</a>.
          </p>
          
          <div className="border-t border-gray-200 mt-8 pt-8">
            <p className="text-sm text-muted-foreground">
              This privacy policy was created in compliance with global privacy regulations including GDPR and CCPA.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}