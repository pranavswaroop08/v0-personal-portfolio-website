"use client"

import { motion } from "framer-motion"
import { Shield, Brain, Lock, Search, AlertTriangle, Target, CheckCircle2, Clock, Loader2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const researchAreas = [
  { name: "Cybersecurity", icon: Shield },
  { name: "Threat Intelligence", icon: AlertTriangle },
  { name: "AI for Security", icon: Brain },
  { name: "Certificate Transparency Analytics", icon: Lock },
  { name: "Phishing Detection", icon: Search },
]

const researchGoals = [
  {
    icon: Shield,
    title: "Early Detection",
    description: "Detect suspicious domains before phishing campaigns launch",
  },
  {
    icon: Target,
    title: "Accuracy",
    description: "Reduce false positives in automated threat detection",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Explore AI-assisted threat intelligence pipelines",
  },
  {
    icon: Lock,
    title: "Proactive Defense",
    description: "Improve proactive cybersecurity defenses",
  },
]

const timeline = [
  { status: "complete", label: "Literature Review" },
  { status: "complete", label: "Threat Intelligence Study" },
  { status: "in-progress", label: "Framework Design" },
  { status: "in-progress", label: "Data Collection" },
  { status: "pending", label: "Model Development" },
  { status: "pending", label: "Evaluation" },
]

const technologies = [
  "Python",
  "Machine Learning",
  "Threat Intelligence",
  "Certificate Transparency",
  "Cloud Analytics",
  "Cybersecurity",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function ResearchSection() {
  return (
    <section id="research" className="py-24 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
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

        {/* Main Research Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
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
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 hover:bg-secondary/70 transition-colors"
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
                  <div className="text-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/40 transition-colors">
                    <div className="text-2xl font-bold text-gradient mb-1">CT Logs</div>
                    <div className="text-xs text-muted-foreground">Data Source</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/40 transition-colors">
                    <div className="text-2xl font-bold text-gradient mb-1">AI Fusion</div>
                    <div className="text-xs text-muted-foreground">Analysis Method</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/40 transition-colors">
                    <div className="text-2xl font-bold text-gradient mb-1">Proactive</div>
                    <div className="text-xs text-muted-foreground">Detection Type</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Research Focus Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="p-8 rounded-2xl glass">
            <h3 className="text-xl font-semibold mb-4 text-gradient">Research Focus</h3>
            <p className="text-muted-foreground leading-relaxed">
              Investigating how Certificate Transparency intelligence and heterogeneous AI models can be 
              combined to identify phishing infrastructure before attacks become active. This research aims 
              to shift cybersecurity from reactive to proactive defense strategies.
            </p>
          </div>
        </motion.div>

        {/* Research Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Research <span className="text-gradient">Goals</span>
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {researchGoals.map((goal) => (
              <motion.div
                key={goal.title}
                variants={itemVariants}
                className="group"
              >
                <div className="p-6 rounded-xl glass glass-hover h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <goal.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{goal.title}</h4>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Research Progress Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Research <span className="text-gradient">Progress</span>
          </h3>
          <div className="p-8 rounded-2xl glass">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-3 p-4 rounded-lg ${
                    item.status === "complete" 
                      ? "bg-green-500/10 border border-green-500/20" 
                      : item.status === "in-progress"
                      ? "bg-primary/10 border border-primary/20"
                      : "bg-secondary/30 border border-border/30"
                  }`}
                >
                  {item.status === "complete" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  ) : item.status === "in-progress" ? (
                    <Loader2 className="h-5 w-5 text-primary animate-spin shrink-0" />
                  ) : (
                    <Clock className="h-5 w-5 text-muted-foreground shrink-0" />
                  )}
                  <span className={`text-sm font-medium ${
                    item.status === "pending" ? "text-muted-foreground" : ""
                  }`}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technologies Used */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Technologies <span className="text-gradient">Used</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-primary/10 hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
