import React from 'react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 py-6 md:py-10">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-indigo-600">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="9" y1="15" x2="15" y2="15"></line>
              </svg>
              <span className="font-bold text-lg">Anything to PDF</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Fast, free and secure PDF converter. Convert any file to PDF online in seconds.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>Convert to PDF</li>
              <li>Merge PDFs</li>
              <li>Compress PDF</li>
              <li>PDF to Word</li>
              <li>PDF to Images</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Careers</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>GDPR Compliance</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Anything to PDF. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <span className="text-muted-foreground text-sm cursor-pointer hover:text-foreground transition-colors">Twitter</span>
            <span className="text-muted-foreground text-sm cursor-pointer hover:text-foreground transition-colors">Facebook</span>
            <span className="text-muted-foreground text-sm cursor-pointer hover:text-foreground transition-colors">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}