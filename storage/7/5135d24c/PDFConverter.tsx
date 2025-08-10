import React from 'react';
import { FileUploader } from './FileUploader';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';

export function PDFConverter() {
  return (
    <div className="container max-w-5xl mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Convert Anything to PDF
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Fast, free, and secure online converter. No sign-up required. 
          Convert multiple files at once with our easy-to-use tool.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <Badge variant="outline">Images</Badge>
          <Badge variant="outline">Word Documents</Badge>
          <Badge variant="outline">Excel Spreadsheets</Badge>
          <Badge variant="outline">PowerPoint</Badge>
          <Badge variant="outline">Text Files</Badge>
          <Badge variant="outline">PDFs (Merge)</Badge>
        </div>
      </div>

      <FileUploader />

      <Separator className="my-12" />

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-3">How It Works</h2>
            <ol className="list-decimal ml-5 space-y-2 text-muted-foreground">
              <li>Upload one or more files by dragging & dropping or browsing</li>
              <li>Wait for the conversion to complete (usually under 10 seconds)</li>
              <li>Download your converted PDF file</li>
            </ol>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-3">Why Choose Our Tool</h2>
            <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
              <li>100% Free - No hidden fees or subscriptions</li>
              <li>Privacy First - Files are processed in your browser</li>
              <li>Fast & Efficient - Convert files in seconds</li>
              <li>No Registration - No account needed</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted/30 rounded-lg p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Is there a file size limit?</h3>
            <p className="text-muted-foreground text-sm mt-1">Yes, each file can be up to 50MB in size.</p>
          </div>
          <div>
            <h3 className="font-medium">Is my data secure?</h3>
            <p className="text-muted-foreground text-sm mt-1">Absolutely! All file processing happens directly in your browser. Your files never leave your computer.</p>
          </div>
          <div>
            <h3 className="font-medium">What file formats are supported?</h3>
            <p className="text-muted-foreground text-sm mt-1">We support images (PNG, JPG, WEBP), Office documents (DOC, DOCX, XLS, XLSX, PPT, PPTX), text files, and existing PDFs for merging.</p>
          </div>
          <div>
            <h3 className="font-medium">Can I merge multiple PDFs?</h3>
            <p className="text-muted-foreground text-sm mt-1">Yes, you can upload multiple PDF files and they will be merged into a single PDF document.</p>
          </div>
        </div>
      </div>
    </div>
  );
}