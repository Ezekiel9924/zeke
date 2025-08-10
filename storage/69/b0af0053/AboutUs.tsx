import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';

export default function AboutUsPage() {
  return (
    <Layout>
      <Helmet>
        <title>About Us | SnapToPDF</title>
        <meta name="description" content="Learn about why we created SnapToPDF, a free PDF conversion service with a focus on privacy and accessibility." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Why We Created SnapToPDF</h1>
        
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h2>Our Mission: Breaking Barriers to Document Accessibility</h2>
          
          <p>
            In 2025, when digital document sharing is more crucial than ever, we created SnapToPDF with a simple yet powerful mission: to provide completely free, privacy-focused document conversion tools accessible to everyone, regardless of technical expertise or financial resources.
          </p>
          
          <p>
            The idea for SnapToPDF was born from our own frustrations with existing PDF conversion services. As professionals working across different industries—education, small business, non-profit, and tech—we repeatedly encountered the same barriers: expensive subscription models, privacy concerns, unwanted watermarks, and overly complex interfaces.
          </p>
          
          <h2>The Problem with Existing Solutions</h2>
          
          <p>
            We noticed that most PDF tools on the market fell into three problematic categories:
          </p>
          
          <ul>
            <li><strong>Expensive subscription services</strong> that created financial barriers for students, educators, small businesses, and non-profits</li>
            <li><strong>Freemium models</strong> that severely limited functionality or placed watermarks on documents unless users upgraded</li>
            <li><strong>Privacy-invading services</strong> that uploaded user documents to central servers, creating security risks and potentially exposing sensitive information</li>
          </ul>
          
          <p>
            The more we researched, the clearer it became: there was a significant gap in the market for a truly free, privacy-focused PDF conversion tool that didn't compromise on quality or user experience. Modern web technologies made this possible, yet few services were taking advantage of these capabilities to truly serve users.
          </p>
          
          <h2>The Breakthrough: Browser-Based Processing</h2>
          
          <p>
            Our technical breakthrough came with the realization that modern browsers are powerful enough to handle document conversion tasks locally. By leveraging advanced JavaScript libraries and WebAssembly technologies, we could build a tool that processes files directly in the user's browser—no server uploads required.
          </p>
          
          <p>
            This approach solved multiple problems simultaneously:
          </p>
          
          <ul>
            <li><strong>Enhanced privacy:</strong> Files never leave the user's device, eliminating data security concerns</li>
            <li><strong>Reduced infrastructure costs:</strong> No need for extensive server processing power, allowing us to offer the service for free</li>
            <li><strong>Improved speed:</strong> No upload/download waiting times for users, resulting in near-instant conversions</li>
            <li><strong>Accessibility:</strong> Works even in environments with limited internet connectivity once the page loads</li>
          </ul>
          
          <h2>Our Values: Why Free Matters</h2>
          
          <p>
            We believe that access to functional digital document tools should be a right, not a privilege. In a world where education, employment, healthcare, and government services increasingly depend on digital documentation, creating barriers to document conversion tools can exacerbate digital inequality.
          </p>
          
          <p>
            Consider these real-world scenarios that influenced our decision:
          </p>
          
          <ul>
            <li>A student needs to convert research materials for a project but cannot afford subscription software</li>
            <li>A small business owner needs to send professional documents to clients without watermarks</li>
            <li>A healthcare worker in a remote area needs to convert medical records with limited internet access</li>
            <li>A job seeker needs to convert their resume to various formats for different application systems</li>
            <li>A non-profit organization needs to process documents for grant applications without spending limited resources on software</li>
          </ul>
          
          <p>
            In each case, access to free, high-quality conversion tools can make a meaningful difference. This realization solidified our commitment to keeping SnapToPDF completely free and accessible.
          </p>
          
          <h2>Privacy by Design</h2>
          
          <p>
            Beyond accessibility concerns, we were deeply troubled by how many online tools handled user data. Many existing services require users to upload potentially sensitive documents to remote servers—medical records, financial statements, personal correspondence, legal documents, and confidential business information.
          </p>
          
          <p>
            We decided to take a radically different approach by designing our system with privacy as a core principle from day one:
          </p>
          
          <ul>
            <li>All document processing happens directly in the user's browser</li>
            <li>No data is ever sent to our servers or stored in any way</li>
            <li>No user accounts or registration required</li>
            <li>No tracking of individual user behavior</li>
            <li>Minimal analytics focused solely on improving the tool's functionality</li>
          </ul>
          
          <p>
            This approach not only protects user privacy but also helps us comply with global data protection regulations like GDPR, CCPA, and HIPAA requirements—making our tool suitable for use in regulated industries like healthcare, legal, and finance.
          </p>
          
          <h2>Sustainable Free: Our Business Model</h2>
          
          <p>
            One of the most common questions we receive is: "How can you offer this for free?" It's a fair question, as developing and maintaining high-quality software requires resources.
          </p>
          
          <p>
            Our approach combines several strategies that allow us to remain sustainable while keeping the service free:
          </p>
          
          <ul>
            <li><strong>Minimal infrastructure costs:</strong> Since processing happens on the client-side, our server needs are drastically reduced compared to traditional conversion services</li>
            <li><strong>Non-intrusive advertising:</strong> We display a limited number of relevant, non-invasive advertisements that don't interfere with the user experience</li>
            <li><strong>Optional donations:</strong> Users who find value in our tools can choose to support us through small donations</li>
            <li><strong>B2B partnerships:</strong> We license our technology to businesses that want to integrate document conversion capabilities into their own platforms</li>
          </ul>
          
          <p>
            This diversified approach ensures we can maintain and improve our service without compromising on our core values of accessibility and privacy.
          </p>
          
          <h2>Looking Forward: Our Vision for the Future</h2>
          
          <p>
            SnapToPDF is just the beginning of our journey. Our vision extends beyond just PDF conversion to creating a comprehensive suite of document tools that democratize access to digital document management for everyone.
          </p>
          
          <p>
            Future developments we're actively working on include:
          </p>
          
          <ul>
            <li>Advanced OCR capabilities for text recognition across multiple languages</li>
            <li>Accessibility features for users with disabilities</li>
            <li>Expanded format support for specialized industries</li>
            <li>Educational resources for digital document management</li>
            <li>Open API access for developers building tools for underserved communities</li>
          </ul>
          
          <p>
            Throughout all these developments, our commitment to privacy, accessibility, and quality will remain unchanged. We believe that free doesn't have to mean inferior, and that everyone deserves access to tools that make their digital lives easier.
          </p>
          
          <h2>Join Us in Our Mission</h2>
          
          <p>
            We invite you to join us in our mission to break down barriers to document accessibility. By using SnapToPDF, sharing it with others who might benefit, providing feedback, or contributing to our development if you have technical skills, you help us build a more equitable digital ecosystem.
          </p>
          
          <p>
            Thank you for being part of the SnapToPDF community. We're excited to continue this journey with you.
          </p>
        </div>
      </div>
    </Layout>
  );
}