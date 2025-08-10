import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4 py-16 text-center">
        <h1 className="text-7xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/">Go back to home</Link>
        </Button>
      </div>
    </Layout>
  );
}