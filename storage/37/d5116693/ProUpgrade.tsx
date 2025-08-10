import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export function ProUpgrade() {
  return (
    <Card className="w-full border-2 border-primary/20 bg-primary/5">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold">Upgrade to Pro</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {[
            'Convert files up to 500MB',
            'Batch convert multiple files',
            'Priority processing',
            'Advanced PDF editing tools',
            'No ads or waiting times',
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
      <CardFooter>
        <Button className="w-full" size="sm">
          Get Pro - $5/month
        </Button>
      </CardFooter>
    </Card>
  );
}