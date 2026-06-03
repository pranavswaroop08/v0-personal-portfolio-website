"use client"

import { motion } from "framer-motion"
import { Briefcase, Award, GraduationCap } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Intern",
    company: "Emertxe Information Technologies",
    duration: "4 Weeks",
    description: "Completed technical internship focused on software development practices, technical problem solving, and industry-oriented learning.",
    icon: Briefcase,
  },
]

const achievements = [
  {
    title: "Google Gemini Student Ambassador",
    description: "Reached advanced stage of Google Gemini Student Ambassador selection process.",
    icon: Award,
  },
  {
    title: "Multiple AI & Automation Projects",
    description: "Built multiple AI and automation projects demonstrating practical application of emerging technologies.",
    icon: GraduationCap,
  },
  {
    title: "Active Contributor",
    description: "Active contributor to technical projects and research initiatives in AI and cybersecurity.",
    icon: Award,
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
            <span className="text-gradient">Experience</span> & Recognition
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience and achievements in technology and leadership.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              Work Experience
            </h3>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary glow-sm" />
                
                <div className="p-6 rounded-xl glass glass-hover">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="font-semibold text-lg">{exp.title}</h4>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground px-3 py-1 rounded-full bg-secondary/50">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Leadership & Recognition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="h-5 w-5 text-primary" />
              </div>
              Leadership & Recognition
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 rounded-xl glass glass-hover group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
