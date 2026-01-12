import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Home, Calendar, Building, Hammer, CreditCard, Clock, Building2, Layers } from "lucide-react";
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

const rentalLoans = [
  {
    icon: Layers,
    title: "Rental Portfolio",
    description: "Access fixed-rate, long-term financing with our rental portfolio loans."
  },
  {
    icon: Calendar,
    title: "30-Year DSCR",
    description: "Offer long-term financing for individual rental properties."
  },
  {
    icon: Home,
    title: "Short-Term Rentals",
    description: "Loans that offer fixed-rate financing for your portfolio."
  }
];

const bridgeLoans = [
  {
    icon: Hammer,
    title: "Fix and Flip",
    description: "Reliable funding solution for purchasing new properties or refinancing existing investments."
  },
  {
    icon: CreditCard,
    title: "Credit Line",
    description: "Flexible funds for investors seeking to acquire, refinance, renovate, or aggregate properties."
  },
  {
    icon: Clock,
    title: "2-Year No Ratio Bridge",
    description: "Bridge financing option to acquire or refinance rental properties into an interest-only loan."
  }
];

const constructionLoans = [
  {
    icon: Building,
    title: "Ground Up",
    description: "Loans that provide you with short-term funding for new construction on a SFR."
  },
  {
    icon: Building2,
    title: "Build for Rent",
    description: "One-stop financing solution for experienced developers building new rental properties."
  }
];

const multifamilyLoans = [
  {
    icon: Layers,
    title: "Multifamily Bridge",
    description: "Loan on short-term multifamily projects."
  },
  {
    icon: Building2,
    title: "Multifamily Term",
    description: "Loan on long-term, stabilized multifamily property."
  }
];

export default function Lending() {
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
              Built For Real Estate Investors
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Looking to buy & hold, fix & flip, or build for rent? IPG has the capital for your investment needs. Our loan products are designed to meet the needs of different real estate investors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rental Loans */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Rental Loans</h2>
            <p className="text-[#A0754D] text-lg">$50K - 2M+ Loan Values</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {rentalLoans.map((loan, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border border-[#D4BD9E]/30 shadow-md hover:shadow-lg transition-all text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-[#D4BD9E]/30 flex items-center justify-center mx-auto mb-6">
                      <loan.icon className="h-8 w-8 text-[#8B6340]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{loan.title}</h3>
                    <p className="text-[#333333] leading-relaxed">{loan.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button className="bg-[#A0754D] hover:bg-[#8B6340] text-white rounded-full px-8" data-testid="cta-rental-learn">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Bridge Loans */}
      <section className="py-24 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Bridge Loans</h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {bridgeLoans.map((loan, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border border-[#D4BD9E]/30 shadow-md hover:shadow-lg transition-all text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-[#D4BD9E]/30 flex items-center justify-center mx-auto mb-6">
                      <loan.icon className="h-8 w-8 text-[#8B6340]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{loan.title}</h3>
                    <p className="text-[#333333] leading-relaxed">{loan.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button className="bg-[#A0754D] hover:bg-[#8B6340] text-white rounded-full px-8" data-testid="cta-bridge-questions">
              Questions?
            </Button>
          </motion.div>
        </div>
      </section>

      {/* New Construction Loans */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">New Construction Loans</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {constructionLoans.map((loan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-[#D4BD9E]/30 shadow-md hover:shadow-lg transition-all text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-[#D4BD9E]/30 flex items-center justify-center mx-auto mb-6">
                      <loan.icon className="h-8 w-8 text-[#8B6340]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{loan.title}</h3>
                    <p className="text-[#333333] leading-relaxed">{loan.description}</p>
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
            <Button className="bg-[#A0754D] hover:bg-[#8B6340] text-white rounded-full px-8" data-testid="cta-construction-questions">
              Questions?
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Multifamily Loans */}
      <section className="py-24 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Multifamily Loans</h2>
            <p className="text-[#A0754D] text-lg">4 - 8 Unit Multi-Family | 8+ Unit Commercial</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {multifamilyLoans.map((loan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-[#D4BD9E]/30 shadow-md hover:shadow-lg transition-all text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-[#D4BD9E]/30 flex items-center justify-center mx-auto mb-6">
                      <loan.icon className="h-8 w-8 text-[#8B6340]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{loan.title}</h3>
                    <p className="text-[#333333] leading-relaxed">{loan.description}</p>
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
            <Button className="bg-[#A0754D] hover:bg-[#8B6340] text-white rounded-full px-8" data-testid="cta-multifamily-questions">
              Questions?
            </Button>
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
