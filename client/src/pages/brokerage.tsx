import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, DollarSign, Wallet, Heart, Cpu, Users, GraduationCap, TrendingUp } from "lucide-react";
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

const agentBenefits = [
  {
    icon: DollarSign,
    title: "No Deal Based Splits",
    subtitle: "Big or Small, You Keep It All",
    description: "No commission splits, take home more of what you earn."
  },
  {
    icon: Wallet,
    title: "Minimal Fees",
    subtitle: "Built For Sustainability",
    description: "Low costs tailored through minimal monthly and transaction fees."
  },
  {
    icon: Heart,
    title: "Benefits",
    subtitle: "Supporting Our Agents",
    description: "Strategic partnerships and discounts with leading insurance providers."
  }
];

const features = [
  {
    icon: Cpu,
    title: "Tech-Enabled Brokerage",
    description: "A platform built to empower agents through smart technology and AI-driven tools. From automated marketing & lead nurturing to predictive analytics, everything is designed to streamline your workflow."
  },
  {
    icon: DollarSign,
    title: "Agent-Centric Compensation Plan",
    description: "Our model is built around the success of agents — 100% commissions, low flat fees & revenue sharing, we give agents the freedom to earn more, build wealth, and scale their business without limitations."
  },
  {
    icon: GraduationCap,
    title: "Expert-Led Industry Training",
    description: "High-impact training led by top producers, industry veterans, and marketing strategists. From mastering lead generation to scaling a team, we offer real-world education that drives real results."
  },
  {
    icon: TrendingUp,
    title: "Wealth Building Opportunities",
    description: "Innovative models designed to create long-term, scalable income for agents. By recruiting and supporting other productive agents, you earn passive income from their success."
  }
];

export default function Brokerage() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-wide text-shadow-hero mb-4">
              IKON PROPERTY GROUP
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white/90 mb-6">
              Elevate Your Career, Build Your Empire
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A new generation of brokerage — flat-fees, no commission splits, and a rewarding revenue share program. Keep more of what you earn and grow multiple income streams by building your network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agent Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">A Model Built For Agents</h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {agentBenefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border border-[#D4BD9E]/30 shadow-md hover:shadow-lg transition-all text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-[#D4BD9E]/30 flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="h-8 w-8 text-[#8B6340]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{benefit.title}</h3>
                    <p className="text-[#A0754D] font-medium mb-3">{benefit.subtitle}</p>
                    <p className="text-[#333333] leading-relaxed">{benefit.description}</p>
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
            <Button className="bg-[#A0754D] hover:bg-[#8B6340] text-white rounded-full px-8" data-testid="cta-book-call">
              Book A Call
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-24 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Innovation At Its Core</h2>
            <p className="text-[#666666] text-lg max-w-2xl mx-auto">
              A platform built to empower agents through smart technology and AI-driven tools
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-[#D4BD9E]/30 shadow-md">
                  <CardContent className="p-8 flex gap-6">
                    <div className="w-14 h-14 rounded-full bg-[#D4BD9E]/30 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-7 w-7 text-[#8B6340]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">{feature.title}</h4>
                      <p className="text-[#333333] leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Sharing */}
      <section className="py-24 bg-bronze-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Revenue Sharing</h2>
            <p className="text-xl text-white/90 mb-8">Grow Your Team, Maximize Your Earnings</p>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Our innovative revenue sharing model allows you to build multiple income streams by recruiting and supporting other productive agents. Earn passive income from their success while growing your network.
            </p>
            <Button className="bg-white text-[#8B6340] hover:bg-white/90 rounded-full px-8 font-semibold" data-testid="cta-join">
              Join Our Team
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
