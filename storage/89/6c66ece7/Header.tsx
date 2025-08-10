import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';

export function Header() {
  const location = useLocation();
  
  // Check if current page is related to PDF conversion functionality
  const isPdfPage = ['/', '/pdf-to-formats', '/how-to-use'].includes(location.pathname);
  
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2" aria-label="Home">
            {/* Show Home icon if not on a PDF-related page */}
            {!isPdfPage ? (
              <Home className="h-6 w-6 text-indigo-600" />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-indigo-600">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="9" y1="15" x2="15" y2="15"></line>
              </svg>
            )}
            
            {/* Only show "Anything to PDF" text on PDF-related pages */}
            {isPdfPage && (
              <>
                <span className="font-bold text-xl hidden md:inline-block">Anything to PDF</span>
                <span className="font-bold text-xl md:hidden">PDF Tool</span>
              </>
            )}
            
            {/* Show "SnapToPDF" on non-PDF pages */}
            {!isPdfPage && (
              <span className="font-bold text-xl">SnapToPDF</span>
            )}
          </Link>
        </div>
        
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
            <Link to="/how-to-use">How It Works</Link>
          </Button>
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
            <Link to="/quiz-game">Quiz Game</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}