import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { CloudArrowUpIcon, DocumentArrowDownIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { PDFDocument } from 'pdf-lib';

type FileWithPreview = {
  file: File;
  preview?: string;
  converting?: boolean;
};

export function FileUploader() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError(null);
    
    // Filter out files that are too large (>50MB)
    const validFiles = acceptedFiles.filter(file => file.size <= 50 * 1024 * 1024);
    const oversizedFiles = acceptedFiles.length - validFiles.length;
    
    if (oversizedFiles > 0) {
      setError(`${oversizedFiles} file(s) exceeded the 50MB limit and were removed.`);
    }

    setFiles(prevFiles => [
      ...prevFiles,
      ...validFiles.map(file => ({
        file,
        preview: getFilePreview(file),
        converting: false,
      }))
    ]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    multiple: true,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp'],
      'application/pdf': ['.pdf'],
      'text/plain': ['.txt'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      'application/vnd.ms-powerpoint': ['.ppt'],
    }
  });

  const getFilePreview = (file: File): string => {
    if (file.type.startsWith('image/')) {
      return URL.createObjectURL(file);
    } else if (file.type === 'application/pdf') {
      return '/pdf-icon.svg';
    } else if (file.name.endsWith('.docx') || file.name.endsWith('.doc')) {
      return '/word-icon.svg';
    } else if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
      return '/excel-icon.svg';
    } else if (file.name.endsWith('.pptx') || file.name.endsWith('.ppt')) {
      return '/powerpoint-icon.svg';
    }
    return '/document-icon.svg';
  };

  const removeFile = (index: number) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const convertToPDF = async () => {
    if (files.length === 0) {
      setError("Please add at least one file to convert.");
      return;
    }

    try {
      setIsConverting(true);
      setProgress(0);
      
      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();
      const totalFiles = files.length;
      
      // Process each file (in a real app, you'd use proper conversion here)
      for (let i = 0; i < totalFiles; i++) {
        // Mark the current file as converting
        setFiles(prev => 
          prev.map((file, idx) => 
            idx === i ? { ...file, converting: true } : file
          )
        );
        
        // Simulate conversion time
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // In a real application, you would actually convert the file to PDF here
        // For now, we're just adding a blank page with the filename as text
        const page = pdfDoc.addPage();
        const { width, height } = page.getSize();
        page.drawText(`Converted from: ${files[i].file.name}`, {
          x: 50,
          y: height - 50,
          size: 20,
        });
        
        // Mark the file as no longer converting
        setFiles(prev => 
          prev.map((file, idx) => 
            idx === i ? { ...file, converting: false } : file
          )
        );
        
        // Update progress
        setProgress(Math.round(((i + 1) / totalFiles) * 100));
      }
      
      // Save the PDF
      const pdfBytes = await pdfDoc.save();
      
      // Create a blob and download it
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'converted-document.pdf';
      link.click();
      
      setIsConverting(false);
      setProgress(100);
      
      // Reset after 2 seconds
      setTimeout(() => {
        setProgress(0);
      }, 2000);
      
    } catch (err) {
      console.error('Error converting to PDF:', err);
      setError("An error occurred during conversion. Please try again.");
      setIsConverting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className={`border-2 border-dashed rounded-lg ${isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/20'} transition-colors duration-200`}>
        <div 
          {...getRootProps()} 
          className="flex flex-col items-center justify-center p-8 text-center cursor-pointer"
        >
          <input {...getInputProps()} />
          <CloudArrowUpIcon className="w-12 h-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-1">Drop files here or click to browse</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Support for images, documents, spreadsheets, and presentations
          </p>
          <p className="text-xs text-muted-foreground">
            Maximum file size: 50MB
          </p>
        </div>
      </Card>

      {error && (
        <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md text-destructive text-sm">
          {error}
        </div>
      )}

      {files.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Files to Convert</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {files.map((fileObj, index) => (
              <div key={index} className="relative flex items-center p-3 border rounded-md bg-background">
                <div className="w-10 h-10 mr-3 flex-shrink-0">
                  {fileObj.preview?.startsWith('blob:') ? (
                    <img src={fileObj.preview} alt="Preview" className="w-full h-full object-cover rounded" />
                  ) : (
                    <div className="w-full h-full bg-muted rounded flex items-center justify-center">
                      <DocumentArrowDownIcon className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{fileObj.file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(fileObj.file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                {fileObj.converting ? (
                  <div className="w-5 h-5 ml-3 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                ) : (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }}
                    className="ml-3 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <XCircleIcon className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
          </div>
          
          {isConverting ? (
            <div className="mt-6">
              <div className="flex justify-between mb-2 text-sm">
                <span>Converting...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>
          ) : (
            <Button 
              onClick={convertToPDF} 
              className="mt-6 w-full"
              disabled={files.length === 0}
            >
              Convert to PDF
            </Button>
          )}
        </div>
      )}
    </div>
  );
}