"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredTime: string;
  preferredMethod: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  preferredTime?: string;
  preferredMethod?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredTime: "",
    preferredMethod: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\(\)\+]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = "Preferred contact time is required";
    }

    if (!formData.preferredMethod) {
      newErrors.preferredMethod = "Preferred contact method is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Thank you for your message! Dr. Blake will be in touch with you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferredTime: "",
        preferredMethod: "",
      });
      setErrors({});
    } catch (error) {
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section className="px-8 py-24 bg-[#f4f1ed]">
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#f0f0f5] rounded-lg border-2 border-[#3a3a3a] p-12">
          <h3 className="text-[36px] font-normal text-center mb-6 text-[#3a3a3a] freight-display">
            Get In Touch
          </h3>
          
          <p className="text-center text-[#4a4a4a] text-[16px] leading-[1.6] freight-sans mb-10">
            Simply fill out the brief fields below and Dr. Blake will be in
            touch with you soon, usually within one business day. This form is
            safe, private, and completely free.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#3a3a3a] text-[16px] font-medium mb-2 freight-sans">
                Name
              </label>
              <Input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`h-12 text-[16px] bg-white border-2 ${
                  errors.name ? "border-red-500" : "border-[#3a3a3a]"
                } rounded-md freight-sans`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-[#3a3a3a] text-[16px] font-medium mb-2 freight-sans">
                Email
              </label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`h-12 text-[16px] bg-white border-2 ${
                  errors.email ? "border-red-500" : "border-[#3a3a3a]"
                } rounded-md freight-sans`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-[#3a3a3a] text-[16px] font-medium mb-2 freight-sans">
                Phone
              </label>
              <Input
                type="tel"
                placeholder="(555) 234-5678"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={`h-12 text-[16px] bg-white border-2 ${
                  errors.phone ? "border-red-500" : "border-[#3a3a3a]"
                } rounded-md freight-sans`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-[#3a3a3a] text-[16px] font-medium mb-2 freight-sans">
                Message
              </label>
              <Textarea
                placeholder="How can I help you?"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className={`min-h-[120px] text-[16px] bg-white border-2 ${
                  errors.message ? "border-red-500" : "border-[#3a3a3a]"
                } rounded-md freight-sans resize-none`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div>
              <label className="block text-[#3a3a3a] text-[16px] font-medium mb-2 freight-sans">
                Preferred Contact Time
              </label>
              <Input
                type="text"
                placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                value={formData.preferredTime}
                onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                className={`h-12 text-[16px] bg-white border-2 ${
                  errors.preferredTime ? "border-red-500" : "border-[#3a3a3a]"
                } rounded-md freight-sans`}
              />
              <p className="text-[#5a5a5a] text-[14px] mt-1 freight-sans">
                Let us know when you're typically available for a call or consultation
              </p>
              {errors.preferredTime && (
                <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>
              )}
            </div>

            <div>
              <label className="block text-[#3a3a3a] text-[16px] font-medium mb-2 freight-sans">
                Preferred Contact Method
              </label>
              <Select value={formData.preferredMethod} onValueChange={(value) => handleInputChange("preferredMethod", value)}>
                <SelectTrigger className={`h-12 text-[16px] bg-white border-2 ${
                  errors.preferredMethod ? "border-red-500" : "border-[#3a3a3a]"
                } rounded-md freight-sans`}>
                  <SelectValue placeholder="Select preferred method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="phone">Phone Call</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="text">Text Message</SelectItem>
                </SelectContent>
              </Select>
              {errors.preferredMethod && (
                <p className="text-red-500 text-sm mt-1">{errors.preferredMethod}</p>
              )}
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-[#4a6741] hover:bg-[#3a5631] text-white text-[16px] font-medium freight-sans rounded-md"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>

            <div className="flex items-start gap-2 pt-2">
              <div className="w-4 h-4 rounded-full border border-[#5a5a5a] flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-1.5 h-1.5 bg-[#5a5a5a] rounded-full"></div>
              </div>
              <p className="text-[#5a5a5a] text-[14px] leading-[1.5] freight-sans">
                By clicking submit you consent to receive texts and emails from
                Dr. Serena Blake
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}