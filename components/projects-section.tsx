"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Dumbbell, MessageSquare, Flag, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const featuredProjects = [
  {
    title: "Pitline(🚧 In Development)",
    description: "Built a telemetry-driven analytics platform that helps sim racers compare racing lines, identify performance bottlenecks, and improve lap consistency through data-driven insights.",
    technologies: ["TypeScript", "Analytics", "Sports Technology", "Data Visualization"],
    metrics: ["Telemetry Analysis", "Racing Line Comparison", "Performance Tracking"],
    image: "/pitline.png",
    github: "https://github.com/pranavswaroop08/pitline",
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Reddit Trend Intelligence Agent",
    description: "Developed an automated intelligence platform that monitors Reddit communities, extracts emerging discussions, and generates actionable insights using workflow automation and AI-powered analysis.",
    technologies: ["Python", "APIs", "Automation", "n8n", "AI Analysis"],
    metrics: ["Automated Monitoring", "Trend Extraction", "Workflow Automation"],
    image: "/reddit.png",
    github: "https://github.com/pranavswaroop08/reddit-trend-intelligence-agent",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Trading Analysis Syndicate",
    description: "Created a market analytics platform that processes financial data, identifies trends, and supports research-driven investment analysis.",
    technologies: ["Python", "Data Analytics", "Financial Analysis", "Market Research"],
    metrics: ["Market Analysis", "Data Processing", "Research Insights"],
    image: "/trading.png",
    github: "https://github.com/pranavswaroop08/Trading-Analysis-Syndicate",
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
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
          className="grid lg:grid-cols-3 gap-6 mb-16"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full rounded-2xl glass overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>

                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild variant="outline" size="sm" className="w-full glass-hover">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Repository
                    </Link>
                  </Button>
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
          className="grid md:grid-cols-3 gap-4 mb-16"
        >
          {additionalProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group"
            >
              <div className="p-5 rounded-xl glass glass-hover hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
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

        {/* GitHub CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 rounded-2xl glass text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Explore More Projects
              </h3>
              <p className="text-muted-foreground mb-6">
                Additional experiments, prototypes, and development work can be found on my GitHub profile.
              </p>
              <Button asChild size="lg" className="glow">
                <Link href="https://github.com/pranavswaroop08" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
