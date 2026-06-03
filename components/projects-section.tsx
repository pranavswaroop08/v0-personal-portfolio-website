"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Bot, LineChart, TrendingUp, Dumbbell, MessageSquare, Flag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const featuredProjects = [
  {
    title: "Reddit Trend Intelligence Agent",
    description: "An automated intelligence system that monitors Reddit communities, extracts emerging discussions, and generates actionable insights using workflow automation and AI-powered analysis.",
    technologies: ["Python", "APIs", "Automation", "Data Analysis", "n8n"],
    icon: Bot,
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Pitline",
    description: "A sports analytics platform for sim racers that compares racing lines, tracks performance metrics, and helps drivers improve lap consistency.",
    technologies: ["TypeScript", "Analytics", "Sports Technology"],
    icon: LineChart,
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Trading Analysis Syndicate",
    description: "A Python-based market analysis platform designed to process financial data, identify trends, and support data-driven investment research.",
    technologies: ["Python", "Data Analytics", "Financial Analysis"],
    icon: TrendingUp,
    gradient: "from-primary/20 to-accent/20",
  },
]

const additionalProjects = [
  {
    title: "Fitness Tracker",
    description: "A web-based fitness tracking application that helps users monitor workouts, track progress, and maintain performance metrics.",
    icon: Dumbbell,
  },
  {
    title: "Chat Room With File Transfer",
    description: "A real-time communication platform supporting messaging and file transfer functionality.",
    icon: MessageSquare,
  },
  {
    title: "F1 Racing Lines",
    description: "A visualization project focused on racing line analysis and motorsport performance optimization.",
    icon: Flag,
  },
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

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my work in AI, automation, and data analytics.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl glass glass-hover relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            More <span className="text-gradient">Projects</span>
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4"
        >
          {additionalProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group"
            >
              <div className="p-5 rounded-xl glass glass-hover">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{project.title}</h4>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
