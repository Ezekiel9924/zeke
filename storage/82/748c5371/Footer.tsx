import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

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
              <span className="font-bold text-lg">SnapToPDF</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Fast, free and secure PDF converter. Convert any file to PDF online in seconds.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-indigo-600 transition-colors">
                <Link to="/">Convert to PDF</Link>
              </li>
              <li className="hover:text-indigo-600 transition-colors">
                <Link to="/pdf-to-formats">PDF to Other Formats</Link>
              </li>
              <li className="hover:text-indigo-600 transition-colors">
                <Link to="/how-to-use">How To Use</Link>
              </li>
              <li className="hover:text-indigo-600 transition-colors">
                <Link to="/">Merge PDFs</Link>
              </li>
              <li className="hover:text-indigo-600 transition-colors">
                <Link to="/">Compress PDF</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-indigo-600 transition-colors">
                <Link to="/about">About Us</Link>
              </li>
              <li className="hover:text-indigo-600 transition-colors">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-indigo-600 transition-colors">
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li className="hover:text-indigo-600 transition-colors">
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li className="hover:text-indigo-600 transition-colors">
                <Link to="/cookie">Cookie Policy</Link>
              </li>
              <li className="hover:text-indigo-600 transition-colors">
                <Link to="/gdpr">GDPR Compliance</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} SnapToPDF. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}