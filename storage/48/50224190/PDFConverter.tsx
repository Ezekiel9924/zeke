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
          How To Convert Files To PDF
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Simple, free document converter with no registration. Learn how to convert 
          Word, Excel, images and more to PDF format without installing software.
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

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Step-by-Step PDF Conversion Tutorial</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-3">Step 1: Select Your Files</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Drag and drop your documents into the upload area above, or click to browse your computer for files. 
                You can select multiple files at once to save time.
              </p>
              <p className="text-muted-foreground text-sm">
                <strong>Tip:</strong> For best quality when converting images, use PNG or high-resolution JPG files.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-3">Step 2: Wait For Processing</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Our tool processes your files directly in your browser. No data is sent to our servers, 
                ensuring your documents remain private and secure.
              </p>
              <p className="text-muted-foreground text-sm">
                <strong>Tip:</strong> Larger files take longer to process. Most conversions complete in under 10 seconds.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-3">Step 3: Download Your PDF</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Once processing completes, click the "Download" button to save your converted PDF file. 
                Your document is now ready to share or archive.
              </p>
              <p className="text-muted-foreground text-sm">
                <strong>Tip:</strong> If you converted multiple files, they will be combined into a single PDF document.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4">Document Conversion Tips</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">How to convert Word documents to PDF</h3>
            <p className="text-muted-foreground text-sm mt-1">For best results with Word documents, ensure all fonts are embedded and images are high resolution. Our tool preserves formatting, images, and text styling.</p>
          </div>
          <div>
            <h3 className="font-medium">How to convert Excel spreadsheets to PDF</h3>
            <p className="text-muted-foreground text-sm mt-1">Excel sheets convert best when data is properly formatted. Consider adjusting column widths before conversion to ensure all data fits properly in the PDF.</p>
          </div>
          <div>
            <h3 className="font-medium">How to convert images to PDF</h3>
            <p className="text-muted-foreground text-sm mt-1">You can convert PNG, JPG, and other image formats to PDF. For multiple images, they'll be placed on separate pages in the resulting PDF document.</p>
          </div>
          <div>
            <h3 className="font-medium">How to combine multiple PDFs</h3>
            <p className="text-muted-foreground text-sm mt-1">Simply upload multiple PDF files at once. They will be combined in the order they were uploaded. Rearranging pages can be done by uploading files in your desired order.</p>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Why Our Free PDF Converter?</h2>
        <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
          <li>100% Free - No hidden fees, subscriptions, or watermarks</li>
          <li>Privacy First - All processing happens in your browser, no uploads to our servers</li>
          <li>No Registration - No account needed, no email required</li>
          <li>Easy to Use - Simple interface designed for everyone</li>
          <li>Cross-Platform - Works on Windows, Mac, Linux, iOS and Android</li>
        </ul>
      </div>
    </div>
  );
}