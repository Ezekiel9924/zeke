import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { ArrowLeft, Download, FileType, ImageIcon, FileText, File, FileSpreadsheet, FilePen } from 'lucide-react';

interface FileWithPreview extends File {
  preview?: string;
}

// Output formats by category
const outputFormats = {
  document: [
    { value: 'docx', label: 'Word Document (.docx)', icon: FileText },
    { value: 'rtf', label: 'Rich Text Format (.rtf)', icon: FilePen },
    { value: 'txt', label: 'Plain Text (.txt)', icon: FileText },
    { value: 'md', label: 'Markdown (.md)', icon: FileText },
  ],
  image: [
    { value: 'jpg', label: 'JPEG Image (.jpg)', icon: ImageIcon },
    { value: 'png', label: 'PNG Image (.png)', icon: ImageIcon },
    { value: 'webp', label: 'WebP Image (.webp)', icon: ImageIcon },
    { value: 'tiff', label: 'TIFF Image (.tiff)', icon: ImageIcon },
  ],
  spreadsheet: [
    { value: 'xlsx', label: 'Excel Spreadsheet (.xlsx)', icon: FileSpreadsheet },
    { value: 'csv', label: 'CSV File (.csv)', icon: FileSpreadsheet },
  ],
  other: [
    { value: 'html', label: 'HTML Document (.html)', icon: FileType },
    { value: 'epub', label: 'E-Book Format (.epub)', icon: File },
  ],
};

export default function PdfToOtherFormats() {
  const navigate = useNavigate();
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [convertedFile, setConvertedFile] = useState<string | null>(null);
  const [convertProgress, setConvertProgress] = useState(0);
  const [selectedTab, setSelectedTab] = useState<string>("document");
  const [selectedFormat, setSelectedFormat] = useState<string>("docx");
  
  // Settings
  const [preserveLayout, setPreserveLayout] = useState(true);
  const [includeImages, setIncludeImages] = useState(true);
  const [ocrEnabled, setOcrEnabled] = useState(false);
  const [imageQuality, setImageQuality] = useState(80);
  const [textRecognitionLang, setTextRecognitionLang] = useState("english");
  
  // Handle file drop/selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    
    if (!selectedFiles || selectedFiles.length === 0) return;
    
    // Check if files are PDFs
    const validFiles = Array.from(selectedFiles).filter(file => 
      file.type === 'application/pdf'
    );
    
    if (validFiles.length !== selectedFiles.length) {
      toast.error('Please select only PDF files');
      return;
    }
    
    // Add preview URLs for the PDFs
    const filesWithPreview = validFiles.map(file => {
      return Object.assign(file, {
        preview: URL.createObjectURL(file)
      });
    });
    
    setFiles(filesWithPreview);
  };
  
  // Simulated conversion process
  const convertFile = () => {
    if (files.length === 0) {
      toast.error('Please select a PDF file to convert');
      return;
    }
    
    setIsConverting(true);
    setConvertProgress(0);
    
    // Simulate progress
    const timer = setInterval(() => {
      setConvertProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsConverting(false);
            // In a real implementation, this would be a URL to the converted file
            setConvertedFile(`converted-file.${selectedFormat}`);
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };
  
  // Reset the conversion process
  const handleReset = () => {
    // Revoke object URLs to avoid memory leaks
    files.forEach(file => {
      if (file.preview) URL.revokeObjectURL(file.preview);
    });
    
    setFiles([]);
    setConvertedFile(null);
    setConvertProgress(0);
  };
  
  // Go back to main page
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <Helmet>
        <title>Convert PDF to Other Formats | SnapToPDF</title>
        <meta name="description" content="Convert your PDF files to Word, Excel, Images, and other formats with high-quality output. Free online conversion that preserves layout and formatting." />
      </Helmet>
      
      {/* Header */}
      <header className="max-w-5xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Button variant="ghost" size="sm" onClick={goToHome} className="mb-2">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Convert PDF to Other Formats
            </h1>
            <p className="text-gray-600 mt-2">
              Transform PDF files into various document, image, and data formats while preserving layout and quality
            </p>
          </div>
        </div>
      </header>
      
      <main className="max-w-5xl mx-auto">
        {!convertedFile ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* File Upload Card */}
            <Card className="col-span-1 md:col-span-1">
              <CardHeader>
                <CardTitle>Upload PDF File</CardTitle>
                <CardDescription>
                  Select a PDF file to convert
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div 
                  className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${files.length ? 'border-blue-300 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
                  onClick={() => document.getElementById('file-upload')?.click()}
                >
                  <input
                    id="file-upload"
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  
                  {files.length > 0 ? (
                    <div className="space-y-3">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded">
                          <div className="flex-shrink-0 h-10 w-10 rounded-md bg-blue-100 flex items-center justify-center">
                            <File className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {file.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {(file.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <File className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="text-sm">
                        <p className="text-gray-700">
                          Drag and drop your PDF here, or <span className="text-blue-600 font-medium">Browse</span>
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          PDF file only (Max 50MB)
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            {/* Format Selection Card */}
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Output Format</CardTitle>
                <CardDescription>
                  Select your desired output format
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs 
                  defaultValue="document" 
                  value={selectedTab} 
                  onValueChange={(value) => {
                    setSelectedTab(value);
                    // Set default format for the new tab
                    setSelectedFormat(outputFormats[value as keyof typeof outputFormats][0].value);
                  }}
                >
                  <TabsList className="grid grid-cols-4 mb-4">
                    <TabsTrigger value="document">Documents</TabsTrigger>
                    <TabsTrigger value="image">Images</TabsTrigger>
                    <TabsTrigger value="spreadsheet">Spreadsheets</TabsTrigger>
                    <TabsTrigger value="other">Other</TabsTrigger>
                  </TabsList>
                  
                  {Object.keys(outputFormats).map(category => (
                    <TabsContent key={category} value={category} className="m-0">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {outputFormats[category as keyof typeof outputFormats].map((format) => {
                          const Icon = format.icon;
                          return (
                            <div
                              key={format.value}
                              className={`flex items-center space-x-3 border rounded-lg p-3 cursor-pointer transition-colors ${
                                selectedFormat === format.value
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-blue-300'
                              }`}
                              onClick={() => setSelectedFormat(format.value)}
                            >
                              <div className="flex-shrink-0 h-10 w-10 rounded-md bg-blue-100 flex items-center justify-center">
                                <Icon className="h-5 w-5 text-blue-600" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">
                                  {format.label}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
                
                <Separator className="my-6" />
                
                {/* Conversion Settings */}
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Conversion Settings</h3>
                  
                  <div className="space-y-4">
                    {/* Common settings */}
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="preserve-layout" 
                        checked={preserveLayout}
                        onCheckedChange={(checked) => setPreserveLayout(checked as boolean)}
                      />
                      <Label htmlFor="preserve-layout">Preserve original layout and formatting</Label>
                    </div>
                    
                    {(selectedTab === "document" || selectedTab === "other") && (
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="include-images" 
                          checked={includeImages}
                          onCheckedChange={(checked) => setIncludeImages(checked as boolean)}
                        />
                        <Label htmlFor="include-images">Include images and graphics</Label>
                      </div>
                    )}
                    
                    {/* Image quality for image outputs */}
                    {selectedTab === "image" && (
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="image-quality">Image Quality: {imageQuality}%</Label>
                        </div>
                        <Slider 
                          id="image-quality"
                          value={[imageQuality]}
                          min={10}
                          max={100}
                          step={1}
                          onValueChange={(value) => setImageQuality(value[0])}
                        />
                      </div>
                    )}
                    
                    {/* OCR for document outputs */}
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="ocr-enabled" 
                        checked={ocrEnabled}
                        onCheckedChange={(checked) => setOcrEnabled(checked as boolean)}
                      />
                      <Label htmlFor="ocr-enabled">Enable OCR (scan text from images)</Label>
                    </div>
                    
                    {ocrEnabled && (
                      <div className="space-y-2 pl-6">
                        <Label htmlFor="ocr-language">OCR Language</Label>
                        <Select value={textRecognitionLang} onValueChange={setTextRecognitionLang}>
                          <SelectTrigger id="ocr-language">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Languages</SelectLabel>
                              <SelectItem value="english">English</SelectItem>
                              <SelectItem value="spanish">Spanish</SelectItem>
                              <SelectItem value="french">French</SelectItem>
                              <SelectItem value="german">German</SelectItem>
                              <SelectItem value="chinese">Chinese</SelectItem>
                              <SelectItem value="japanese">Japanese</SelectItem>
                              <SelectItem value="arabic">Arabic</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  disabled={files.length === 0 || isConverting}
                  onClick={convertFile}
                >
                  {isConverting ? (
                    <>Converting... {convertProgress}%</>
                  ) : (
                    <>Convert to {selectedFormat.toUpperCase()}</>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>
        ) : (
          /* Success Card */
          <Card className="w-full max-w-lg mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-green-600">
                Conversion Complete!
              </CardTitle>
              <CardDescription className="text-center">
                Your PDF has been successfully converted
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mb-2">
                <Download className="h-10 w-10 text-green-600" />
              </div>
              <p className="text-center">
                Your file is ready to download. The conversion preserves layout and formatting for the best quality output.
              </p>
              <div className="w-full">
                <Button className="w-full mb-4" onClick={() => {
                  // In a real app, this would download the actual converted file
                  toast.success('Download started');
                }}>
                  <Download className="mr-2 h-4 w-4" /> Download {convertedFile}
                </Button>
                <Button variant="outline" className="w-full" onClick={handleReset}>
                  Convert Another File
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        {isConverting && (
          <div className="mt-6">
            <Progress value={convertProgress} className="h-2" />
          </div>
        )}
        
        {/* Privacy Note */}
        <div className="mt-8 text-center text-sm text-gray-500 max-w-2xl mx-auto">
          <p className="mb-2">
            <strong>Privacy First:</strong> All file conversion happens directly in your browser. 
            Your files are never uploaded to any server or stored anywhere.
          </p>
          <p>
            SnapToPDF prioritizes privacy and security, ensuring your sensitive documents remain confidential.
          </p>
        </div>
      </main>
    </div>
  );
}