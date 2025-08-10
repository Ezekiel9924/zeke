import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export function Features() {
  return (
    <Card className="w-full border-2 border-primary/20 bg-primary/5">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold">Key Features</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {[
            'Convert files up to 50MB',
            'Supports multiple file formats',
            'Completely free to use',
            'No registration required',
            'Instant file processing',
            'Secure & private conversion',
          ].map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <div className="rounded-full bg-primary/20 p-1">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}