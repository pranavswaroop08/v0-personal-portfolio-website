"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowDown, Download, FlaskConical, FolderOpen, Briefcase, Bot, Dribbble } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const currentlyBuilding = [
  {
    icon: FlaskConical,
    text: "Researching proactive phishing detection using Certificate Transparency logs and heterogeneous AI fusion",
  },
  {
    icon: Bot,
    text: "Building intelligent automation and trend intelligence systems",
  },
  {
    icon: Dribbble,
    text: "Representing the PES University Basketball Team",
  },
  {
    icon: Briefcase,
    text: "Exploring opportunities in AI, cybersecurity, and software engineering",
  },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Building AI, Security & Analytics Systems</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient">Pranav Swaroop</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-4"
            >
              Computer Science Student | AI & Automation Builder | Cybersecurity Researcher
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground leading-relaxed mb-8 max-w-xl"
            >
              I&apos;m a second-year Computer Science student at PES University building AI-powered
              automation systems, analytics platforms, and cybersecurity solutions. My current research
              focuses on proactive phishing detection through Certificate Transparency log mining and
              heterogeneous AI fusion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button asChild size="lg" className="glow">
                <Link href="#projects">
                  <FolderOpen className="mr-2 h-5 w-5" />
                  View Projects
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass-hover">
                <Link href="#research">
                  <FlaskConical className="mr-2 h-5 w-5" />
                  Research
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Currently Building Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="pt-8 border-t border-border/30"
            >
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-5">
                Currently Building
              </h3>
              <div className="space-y-4">
                {currentlyBuilding.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl scale-110" />

              {/* Profile Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full glass p-2 glow group ring-2 ring-primary/20">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/profile.jpg"
                    alt="Pranav Swaroop"
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full z-20" />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-lg glass"
              >
                <span className="text-sm font-medium">AI & ML</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg glass"
              >
                <span className="text-sm font-medium">Cybersecurity</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 -right-8 px-4 py-2 rounded-lg glass"
              >
                <span className="text-sm font-medium">Automation</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
