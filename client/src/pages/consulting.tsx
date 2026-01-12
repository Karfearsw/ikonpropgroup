import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Target, FileText, DollarSign, Search, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const steps = [
  {
    number: "1",
    title: "Your Goals Our Vision",
    description: "At Ikon Properties, our team will develop a customized action plan and wealth strategy that serves as the foundation for your property investment journey. We begin by understanding your investment appetite, budget, desired returns, and risk tolerance, whether your focus is on long-term growth, short-term gains, or fix-and-flip projects."
  },
  {
    number: "2",
    title: "Structure Your Deal The Right Way",
    description: "Our strategy helps you define clear long-term goals while setting key milestones to track progress. From deal consultation and structuring to financing, closing, and ongoing property management, we guide you through every phase of the process."
  },
  {
    number: "3",
    title: "Maximize ROI",
    description: "We connect you with the right lenders to secure the best funding options tailored to your needs and financial qualifications. Whether you're investing in multifamily or single-family properties, we ensure you receive the most competitive rates and terms."
  },
  {
    number: "4",
    title: "Find You The Deal",
    description: "Having established a solid foundation, we focus on securing the right deals tailored to your investment strategy. Our team identifies properties in key markets that align with your specific criteria—whether you're pursuing short-term holds, renovation opportunities, or turnkey investments."
  },
  {
    number: "5",
    title: "Quality First",
    description: "Effective tenant selection and leasing are essential for maximizing your ROI. We leverage our expertise to select the right tenants through comprehensive credit, employment, and eviction checks, minimizing risks associated with non-payment and turnover."
  },
  {
    number: "6",
    title: "Simplify Your Investment",
    description: "Our comprehensive management service covers everything from leasing and maintenance to tenant relations, delivering a true turnkey experience for investors. We collaborate with our in-house maintenance contractors to handle everything from minor repairs to extensive renovations."
  }
];

const services = [
  {
    icon: Target,
    title: "Property Investment Consulting",
    description: "Our consulting services are designed to align with your unique investment goals. We start with a thorough 1:1 consultation to understand your objectives—whether you're focused on maximizing cash flow or capitalizing on appreciation."
  },
  {
    icon: Search,
    title: "Market Identification",
    description: "After clarifying your investment goals, we research and pinpoint high-performing markets that match your criteria. Our insights allow you to make informed decisions about where to purchase properties."
  },
  {
    icon: DollarSign,
    title: "Investment Opportunities",
    description: "We identify promising investment opportunities that align with your strategy, focusing on areas that promise the best returns based on your specific investment criteria."
  },
  {
    icon: FileText,
    title: "Deal Structuring",
    description: "We provide expert guidance on structuring deals within LLC or C-Corp frameworks. This strategic approach helps protect your personal assets while optimizing your investment's financial performance."
  }
];

export default function Consulting() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="flex">
                  <div className="w-6 h-5 bg-gradient-to-br from-[#C9A875] to-[#D4BD9E] rounded-tl-md"></div>
                  <div className="w-6 h-5 bg-gradient-to-br from-[#8B6340] to-[#704F2E] rounded-tr-md"></div>
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-2xl tracking-tight text-[#1A1A1A]">IKON</span>
                  <span className="text-[9px] font-normal tracking-[0.15em] text-[#1A1A1A] uppercase -mt-1">Property Group</span>
                </div>
              </div>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-[#8B6340]" data-testid="back-home">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 bg-bronze-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-wide text-shadow-hero mb-6">
              360 Consulting
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We simplify the entire purchase process from A to B, providing deal consultations and ongoing management, all tailored to your goals and supported by market research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Our Process</h2>
            <p className="text-[#666666] text-lg max-w-2xl mx-auto">
              A comprehensive 6-step approach to maximize your real estate investment success
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border border-[#D4BD9E]/30 shadow-md hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-full bg-[#A0754D] text-white flex items-center justify-center font-bold text-xl mb-6">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{step.title}</h3>
                    <p className="text-[#333333] leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-24 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">360 Consulting</h2>
            <p className="text-[#666666] text-lg max-w-2xl mx-auto">
              Equipping you with the insights needed to make informed investment decisions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-[#D4BD9E]/30 shadow-md">
                  <CardContent className="p-8 flex gap-6">
                    <div className="w-16 h-16 rounded-full bg-[#D4BD9E]/30 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-8 w-8 text-[#8B6340]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">{service.title}</h4>
                      <p className="text-[#333333] leading-relaxed">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/">
              <Button className="bg-[#A0754D] hover:bg-[#8B6340] text-white rounded-full px-8" data-testid="cta-consultation">
                Schedule a Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="flex">
                  <div className="w-5 h-4 bg-gradient-to-br from-[#C9A875] to-[#D4BD9E] rounded-tl-sm"></div>
                  <div className="w-5 h-4 bg-gradient-to-br from-[#8B6340] to-[#704F2E] rounded-tr-sm"></div>
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-lg tracking-tight">IKON</span>
                  <span className="text-[8px] font-normal tracking-[0.15em] uppercase -mt-0.5 opacity-80">Property Group</span>
                </div>
              </div>
            </Link>
            <div className="text-sm opacity-70 text-center">
              <div>607 Shelby St, Ste 700-238</div>
              <div>Detroit, Michigan 48226</div>
              <div className="mt-2">admin@ikonpropertygrp.com</div>
            </div>
            <div className="text-sm opacity-70 text-right">
              &copy; {new Date().getFullYear()} Ikon Property Group. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
