import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Search, Users, DollarSign, Wrench, ClipboardCheck, RefreshCw } from "lucide-react";
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

const services = [
  {
    icon: Search,
    title: "Marketing & Analysis",
    description: "We provide professional comparative market evaluations, assessing both the current value and rental potential of your property. We develop a customized strategy to effectively market your property, ensuring it aligns with your objectives and maximizes your ROI."
  },
  {
    icon: Users,
    title: "Tenant Placement",
    description: "A personalized approach to tenant placement, ensuring that the tenants we select are the best fit for your specific property and investment strategy. We prioritize tenants with strong credit, stable employment, and a positive rental history."
  },
  {
    icon: DollarSign,
    title: "Rent Collection",
    description: "Hassle-free monthly rent collection is made simple with our dedicated tenant management software. We manage payments directly from tenants, ensuring timely deposits while reducing administrative tasks."
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Our in-house maintenance team offers the most cost-effective solutions for all property issues. From small repairs to major renovations, we ensure quick, reliable service that minimizes expenses while maintaining quality."
  },
  {
    icon: ClipboardCheck,
    title: "Inspection Reports",
    description: "Our comprehensive move-in and move-out inspections thoroughly document every detail of your property, ensuring a clear record of its condition, minimizing disputes, and protecting both landlords and tenants."
  },
  {
    icon: RefreshCw,
    title: "Turn Key",
    description: "Quick and efficient turnovers minimize vacancies by reducing the time between tenants. We swiftly prepare the property—handling cleaning, repairs, and any necessary updates—so it can be promptly listed and rented again."
  }
];

const pricingPlans = [
  {
    rate: "8.5%",
    subtitle: "Of rents collected",
    title: "1-10 Units Under Management",
    features: [
      "Leasing fee ½ 1st Month Rent",
      "$200.00 setup fee",
      "No maintenance up-charges",
      "No marketing fees",
      "No CMA fee"
    ]
  },
  {
    rate: "7.5%",
    subtitle: "Of rents collected",
    title: "10+ Units Under Management",
    features: [
      "Leasing fee ½ 1st Month Rent",
      "No setup fee",
      "No maintenance up-charges",
      "No marketing fees",
      "No CMA fee"
    ],
    featured: true
  }
];

export default function PropertyManagement() {
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
              Property Management
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Commercial | Residential | Industrial — Professional Property Management
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Our Services</h2>
            <p className="text-[#666666] text-lg max-w-2xl mx-auto">
              Comprehensive property management solutions for your investment portfolio
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border border-[#D4BD9E]/30 shadow-md hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full bg-[#D4BD9E]/30 flex items-center justify-center mb-6">
                      <service.icon className="h-7 w-7 text-[#8B6340]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{service.title}</h3>
                    <p className="text-[#333333] leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Clear & Competitive Pricing</h2>
            <p className="text-[#666666] text-lg max-w-2xl mx-auto">
              No hidden fees, just reliable and exceptional service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full border shadow-lg ${plan.featured ? 'border-[#A0754D] ring-2 ring-[#A0754D]/20' : 'border-[#D4BD9E]/30'}`}>
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl font-black text-[#A0754D] mb-2">{plan.rate}</div>
                    <div className="text-[#666666] mb-4">{plan.subtitle}</div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">{plan.title}</h3>
                    <ul className="space-y-3 text-left">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#333333]">
                          <span className="text-[#A0754D] font-bold">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
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
            <Link href="/#contact">
              <Button className="bg-[#A0754D] hover:bg-[#8B6340] text-white rounded-full px-8" data-testid="cta-get-started">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-16 bg-[#D4BD9E]/20 rounded-lg flex items-center justify-center mb-2">
                <span className="font-bold text-[#8B6340] text-lg">NARPM</span>
              </div>
              <span className="text-xs text-[#666666]">Member</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-16 bg-[#D4BD9E]/20 rounded-lg flex items-center justify-center mb-2">
                <span className="font-bold text-[#8B6340] text-sm">REALTOR®</span>
              </div>
              <span className="text-xs text-[#666666]">Member</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-16 bg-[#D4BD9E]/20 rounded-lg flex items-center justify-center mb-2">
                <span className="font-bold text-[#8B6340] text-xs leading-tight">EQUAL HOUSING<br/>OPPORTUNITY</span>
              </div>
              <span className="text-xs text-[#666666]">Supporter</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">Ready to Get Started?</h2>
            <p className="text-[#666666] mb-8">
              Contact us today to learn how we can help manage your properties professionally.
            </p>
            <Link href="/#contact">
              <Button className="bg-[#A0754D] hover:bg-[#8B6340] text-white rounded-full px-10" data-testid="cta-contact">
                Contact Us
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
