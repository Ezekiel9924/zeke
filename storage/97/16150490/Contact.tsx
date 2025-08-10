import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { AlertCircle, CheckCircle, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ContactFormValues {
  name: string;
  email: string;
  type: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors }, setValue, watch } = useForm<ContactFormValues>();

  // Reset form and success state after submission
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        reset();
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, reset]);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // In a production environment, you would use a form submission service like Formspree, EmailJS, etc.
      // For demonstration purposes, we're simulating a successful submission
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Log form data that would be sent (in a real implementation)
      console.log(`Would send email to eazycruz29@gmail.com:`, {
        from: data.email,
        name: data.name,
        type: data.type,
        subject: data.subject,
        message: data.message
      });
      
      // Show success notification
      toast.success("Message sent successfully");
      setIsSubmitted(true);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us | SnapToPDF</title>
        <meta name="description" content="Contact the SnapToPDF team for support, partnerships, or general inquiries." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <Card className="border-green-200 bg-green-50">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <CardTitle className="text-center text-green-700">Message Sent Successfully!</CardTitle>
                <CardDescription className="text-center text-green-600">
                  Thank you for reaching out to us. We'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-green-600">
                  This window will reset in 10 seconds, or you can click the button below to send another message.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  variant="outline" 
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Send us a message and we'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        {...register("name", { required: "Name is required" })}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> {errors.name.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="you@example.com" 
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="type">Message Type</Label>
                    <Select 
                      onValueChange={(value) => setValue('type', value)} 
                      defaultValue="general"
                    >
                      <SelectTrigger id="type" className={errors.type ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select message type" {...register("type", { required: "Please select a message type" })} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.type && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.type.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="Brief subject of your message" 
                      {...register("subject", { required: "Subject is required" })}
                      className={errors.subject ? "border-red-500" : ""}
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.subject.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your inquiry..." 
                      className={`min-h-32 ${errors.message ? "border-red-500" : ""}`}
                      {...register("message", { 
                        required: "Message is required",
                        minLength: {
                          value: 20,
                          message: "Message must be at least 20 characters"
                        }
                      })}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.message.message}
                      </p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          )}
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Messages sent through this form will be delivered to our team at eazycruz29@gmail.com
            </p>
            <p className="mt-2">
              For urgent inquiries, please allow 24-48 hours for a response.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}