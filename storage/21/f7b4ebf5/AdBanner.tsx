import React from 'react';
import { Card } from '@/components/ui/card';

interface AdBannerProps {
  position: 'top' | 'bottom' | 'sidebar';
  className?: string;
}

export function AdBanner({ position, className = '' }: AdBannerProps) {
  // In a real implementation, you would integrate with an ad network (Google AdSense, etc.)
  // This is just a placeholder to show where ads would appear
  
  const sizes = {
    top: 'h-[90px] w-full',
    bottom: 'h-[90px] w-full',
    sidebar: 'h-[250px] w-full',
  };

  return (
    <Card className={`${sizes[position]} overflow-hidden flex items-center justify-center border border-dashed border-muted-foreground/20 ${className}`}>
      <div className="text-center">
        <p className="text-sm text-muted-foreground">Advertisement</p>
        <p className="text-xs text-muted-foreground/70">
          {position === 'sidebar' ? '300x250 Ad Unit' : '728x90 Ad Unit'}
        </p>
      </div>
    </Card>
  );
}