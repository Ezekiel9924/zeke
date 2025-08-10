import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { ExternalLink } from 'lucide-react';

export default function CookiePage() {
  return (
    <Layout>
      <Helmet>
        <title>Cookie Policy | SnapToPDF</title>
        <meta name="description" content="Information about how SnapToPDF uses cookies and similar technologies." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Cookie Policy</h1>
        
        <div className="prose prose-lg max-w-4xl mx-auto">
          <p className="text-muted-foreground text-sm mb-6">Last updated: August 9, 2025</p>
          
          <h2>1. Introduction</h2>
          <p>
            This Cookie Policy explains how SnapToPDF ("we", "our", or "us") uses cookies and similar technologies when you visit our website. This policy is compliant with regulations including the <a href="https://ec.europa.eu/info/law/law-topic/data-protection/reform/rules-business-and-organisations/obligations/what-rules-apply-if-my-organisation-transfers-data-outside-eu_en" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              EU ePrivacy Directive <ExternalLink className="h-3 w-3" />
            </a> and <a href="https://gdpr-info.eu/" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              General Data Protection Regulation (GDPR) <ExternalLink className="h-3 w-3" />
            </a>.
          </p>
          
          <h2>2. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
          </p>
          <p>
            For more detailed information about cookies, visit <a href="https://www.allaboutcookies.org/" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              All About Cookies <ExternalLink className="h-3 w-3" />
            </a>.
          </p>
          
          <h2>3. How We Use Cookies</h2>
          <p>
            We use a minimal set of cookies for the following purposes:
          </p>
          <ul>
            <li>
              <strong>Essential cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
            </li>
            <li>
              <strong>Analytics cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and your user experience.
            </li>
          </ul>
          <p>
            We specifically do not use:
          </p>
          <ul>
            <li>
              <strong>Tracking cookies:</strong> We do not use cookies that track your browsing habits across different websites to serve targeted advertising.
            </li>
            <li>
              <strong>Third-party functional cookies:</strong> We do not allow third parties to place cookies on your device through our website for social media integration or other third-party functionality.
            </li>
          </ul>
          
          <h2>4. Cookie Types We Use</h2>
          <table className="w-full border-collapse border border-gray-300 my-6">
            <thead>
              <tr className="bg-muted">
                <th className="border border-gray-300 p-2">Category</th>
                <th className="border border-gray-300 p-2">Purpose</th>
                <th className="border border-gray-300 p-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Essential</td>
                <td className="border border-gray-300 p-2">Site functionality and security</td>
                <td className="border border-gray-300 p-2">Session / 30 days</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Analytics (anonymized)</td>
                <td className="border border-gray-300 p-2">Site usage statistics</td>
                <td className="border border-gray-300 p-2">90 days</td>
              </tr>
            </tbody>
          </table>
          
          <h2>5. Controlling Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings preferences. Here's how to manage cookies in popular browsers:
          </p>
          <ul>
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
                Google Chrome <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
                Mozilla Firefox <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
                Safari <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
                Microsoft Edge <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          </ul>
          <p>
            Please note that restricting cookies may impact the functionality of our website.
          </p>
          
          <h2>6. Do Not Track Signals</h2>
          <p>
            We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place. The practice of honoring Do Not Track signals is recommended by the <a href="https://www.w3.org/TR/tracking-dnt/" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              W3C Tracking Protection Working Group <ExternalLink className="h-3 w-3" />
            </a>.
          </p>
          
          <h2>7. Cookie Consent</h2>
          <p>
            When you first visit our website, we will inform you about our use of cookies and ask for your consent where required by applicable law. You have the right to withdraw your consent at any time.
          </p>
          <p>
            This approach is consistent with requirements in <a href="https://gdpr-info.eu/art-7-gdpr/" target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
              GDPR Article 7 <ExternalLink className="h-3 w-3" />
            </a> regarding conditions for consent.
          </p>
          
          <h2>8. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.
          </p>
          
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact us through our <a href="/contact" className="underline">Contact Page</a>.
          </p>
          
          <div className="border-t border-gray-200 mt-8 pt-8">
            <p className="text-sm text-muted-foreground">
              This cookie policy is provided in compliance with data protection regulations including GDPR and the ePrivacy Directive.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}