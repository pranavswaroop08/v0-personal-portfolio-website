"use client"

import { motion } from "framer-motion"
import { Shield, Brain, Lock, Search, AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const researchAreas = [
  { name: "Cybersecurity", icon: Shield },
  { name: "Threat Intelligence", icon: AlertTriangle },
  { name: "AI for Security", icon: Brain },
  { name: "Certificate Transparency Analytics", icon: Lock },
  { name: "Phishing Detection", icon: Search },
]

export function ResearchSection() {
  return (
    <section id="research" className="py-24 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Research</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of AI and cybersecurity to build more secure systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-10 rounded-2xl glass glow relative overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            
            <div className="relative z-10">
              {/* Status Badge */}
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
                  Ongoing Research
                </Badge>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold mb-6 leading-snug">
                Secure Cloud-Based Proactive Phishing Detection Using Certificate Transparency Log Stream Mining and Heterogeneous AI Fusion
              </h3>

              {/* Research Areas */}
              <div className="flex flex-wrap gap-3 mb-8">
                {researchAreas.map((area) => (
                  <div
                    key={area.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50"
                  >
                    <area.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm">{area.name}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Developing a proactive phishing detection framework that mines Certificate Transparency 
                  logs to identify suspicious domain registrations before phishing campaigns become active. 
                  The system combines certificate intelligence, domain-based indicators, and heterogeneous 
                  AI models to improve early-stage threat detection and reduce false positives.
                </p>
              </div>

              {/* Visual Element */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-secondary/30">
                    <div className="text-2xl font-bold text-gradient mb-1">CT Logs</div>
                    <div className="text-xs text-muted-foreground">Data Source</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-secondary/30">
                    <div className="text-2xl font-bold text-gradient mb-1">AI Fusion</div>
                    <div className="text-xs text-muted-foreground">Analysis Method</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-secondary/30">
                    <div className="text-2xl font-bold text-gradient mb-1">Proactive</div>
                    <div className="text-xs text-muted-foreground">Detection Type</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
