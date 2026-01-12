import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { 
  Phone, 
  Mail, 
  MapPin,
  Menu,
  X,
  TrendingUp,
  Building2,
  Home as HomeIcon,
  Handshake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { api } from "@shared/routes";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  serviceType: z.string().min(1, "Please select a service"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      serviceType: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const res = await apiRequest(api.inquiries.create.method, api.inquiries.create.path, data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your inquiry. We'll be in touch soon!",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const services = [
    {
      icon: Handshake,
      title: "Brokerage Services",
      description: "Full-service real estate brokerage for buying and selling properties. Our experienced agents guide you through every step of the transaction process.",
    },
    {
      icon: HomeIcon,
      title: "Residential Property Management",
      description: "Comprehensive management for residential properties. We handle tenant relations, maintenance, and maximize your property's value and returns.",
    },
    {
      icon: Building2,
      title: "Commercial Property Management",
      description: "Expert management services for commercial real estate. From office buildings to retail spaces, we ensure smooth operations and profitability.",
    },
    {
      icon: TrendingUp,
      title: "Investment Consulting",
      description: "Strategic guidance to identify and invest in profitable real estate opportunities. Maximize your ROI with our expert market analysis.",
    },
  ];

  const stats = [
    { number: "500+", label: "Properties Managed" },
    { number: "10+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "$50M+", label: "Assets Under Management" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex">
                <div className="w-6 h-5 bg-gradient-to-br from-[#C9A875] to-[#D4BD9E] rounded-tl-md"></div>
                <div className="w-6 h-5 bg-gradient-to-br from-[#8B6340] to-[#704F2E] rounded-tr-md"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tight text-[#1A1A1A]">IKON</span>
                <span className="text-[9px] font-normal tracking-[0.15em] text-[#1A1A1A] uppercase -mt-1">Property Group</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              <button 
                onClick={() => scrollToSection("services")}
                className="text-[#8B6340] font-medium px-4 py-2 hover:text-[#A0754D] transition-colors relative group"
                data-testid="nav-services"
              >
                Services
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#A0754D] scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-[#8B6340] font-medium px-4 py-2 hover:text-[#A0754D] transition-colors relative group"
                data-testid="nav-about"
              >
                About
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#A0754D] scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-[#8B6340] font-medium px-4 py-2 hover:text-[#A0754D] transition-colors relative group"
                data-testid="nav-contact"
              >
                Contact
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#A0754D] scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </button>
              <Button 
                onClick={() => scrollToSection("contact")} 
                className="ml-4 bg-[#A0754D] hover:bg-[#8B6340] text-white rounded-full px-8 shadow-md"
                data-testid="nav-cta"
              >
                Let's Connect
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-[#8B6340]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#D4BD9E]">
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-left text-[#8B6340] font-medium py-2 hover:text-[#A0754D]"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-left text-[#8B6340] font-medium py-2 hover:text-[#A0754D]"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-[#8B6340] font-medium py-2 hover:text-[#A0754D]"
                >
                  Contact
                </button>
                <Button 
                  onClick={() => scrollToSection("contact")} 
                  className="w-full mt-2 bg-[#A0754D] hover:bg-[#8B6340] text-white rounded-full"
                >
                  Let's Connect
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center justify-center bg-bronze-gradient">
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-wide leading-tight text-shadow-hero mb-4">
              IKON PROPERTY GROUP
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide leading-tight text-shadow-hero-sm mb-8">
              REAL ESTATE INNOVATED
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white font-bold mb-12 tracking-wide whitespace-nowrap">
              NextGen Brokerage | Investment Consulting | Property Management
            </p>
            <Button 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-[#A0754D] hover:bg-[#8B6340] text-white rounded-full px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              data-testid="hero-cta"
            >
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Our Services</h2>
            <p className="text-[#666666] text-lg max-w-2xl mx-auto">
              Comprehensive real estate solutions designed to help you build and protect your wealth
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white border border-[#D4BD9E]/30 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group relative overflow-visible">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A0754D] to-[#8B6340] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-md"></div>
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                      <service.icon className="h-16 w-16 text-[#8B6340] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 whitespace-nowrap">{service.title}</h3>
                    <p className="text-[#333333] leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#D4BD9E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-[#1A1A1A] tracking-tight">{stat.number}</div>
                <div className="text-lg text-[#333333] mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                Michigan's Trusted Real Estate Partner
              </h2>
              <p className="text-[#333333] text-lg leading-relaxed mb-6">
                Ikon Property Group (IPG) is a premier Michigan real estate brokerage specializing in investment consulting, property management, and brokerage services. Our team of experienced professionals is dedicated to helping you achieve your real estate goals.
              </p>
              <p className="text-[#333333] text-lg leading-relaxed mb-8">
                With over a decade of experience in the Michigan market, we understand the unique opportunities and challenges of real estate investment in our region. Our personalized approach ensures that every client receives tailored strategies for success.
              </p>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-[#A0754D] hover:bg-[#8B6340] text-white rounded-full px-8"
              >
                Learn More About Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-md overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Modern real estate property"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Get in Touch</h2>
            <p className="text-[#666666] text-lg max-w-2xl mx-auto">
              Ready to start your real estate journey? Reach out to us today for a free consultation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border border-[#D4BD9E]/30 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">Send Us a Message</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#333333]">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} data-testid="input-name" className="border-[#D4BD9E] focus:border-[#A0754D]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#333333]">Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" className="border-[#D4BD9E] focus:border-[#A0754D]" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#333333]">Phone (Optional)</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="(555) 123-4567" {...field} data-testid="input-phone" className="border-[#D4BD9E] focus:border-[#A0754D]" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#333333]">Service Interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-service" className="border-[#D4BD9E] focus:border-[#A0754D]">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="brokerage">Brokerage Services</SelectItem>
                                <SelectItem value="residential">Residential Property Management</SelectItem>
                                <SelectItem value="commercial">Commercial Property Management</SelectItem>
                                <SelectItem value="investment">Investment Consulting</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#333333]">Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your real estate goals..." 
                                className="min-h-[120px] border-[#D4BD9E] focus:border-[#A0754D]"
                                {...field} 
                                data-testid="input-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full bg-[#A0754D] hover:bg-[#8B6340] text-white rounded-full py-6 text-lg font-semibold" 
                        disabled={mutation.isPending}
                        data-testid="button-submit"
                      >
                        {mutation.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D4BD9E]/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-[#8B6340]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A1A1A]">Phone</div>
                      <div className="text-[#666666]">(313) 555-0123</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D4BD9E]/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-[#8B6340]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A1A1A]">Email</div>
                      <div className="text-[#666666]">info@ikonpropertygrp.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D4BD9E]/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-[#8B6340]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A1A1A]">Office</div>
                      <div className="text-[#666666]">Detroit, Michigan</div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-bronze-gradient text-white border-none shadow-lg">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold mb-3">Free Consultation</h4>
                  <p className="opacity-90 mb-6 leading-relaxed">
                    Schedule a no-obligation consultation to discuss your real estate investment goals and discover how we can help you succeed.
                  </p>
                  <Button 
                    variant="secondary"
                    className="bg-white text-[#8B6340] hover:bg-white/90 rounded-full font-semibold"
                    onClick={() => scrollToSection("contact")}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex">
                <div className="w-5 h-4 bg-gradient-to-br from-[#C9A875] to-[#D4BD9E] rounded-tl-sm"></div>
                <div className="w-5 h-4 bg-gradient-to-br from-[#8B6340] to-[#704F2E] rounded-tr-sm"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg tracking-tight">IKON</span>
                <span className="text-[8px] font-normal tracking-[0.15em] uppercase -mt-0.5 opacity-80">Property Group</span>
              </div>
            </div>
            <div className="text-sm opacity-70">
              &copy; {new Date().getFullYear()} Ikon Property Group. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
