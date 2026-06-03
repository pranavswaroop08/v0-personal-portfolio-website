"use client"

import { motion } from "framer-motion"
import { Dribbble } from "lucide-react"

export function BeyondSection() {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 md:p-10 rounded-2xl glass relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                <Dribbble className="h-12 w-12 text-primary" />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Beyond <span className="text-gradient">Technology</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Member of the PES University Basketball Team. Balancing competitive sports, 
                  research, and software development has strengthened teamwork, discipline, 
                  leadership, and problem-solving abilities.
                </p>

                {/* Traits */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {["Teamwork", "Discipline", "Leadership", "Problem-Solving"].map((trait) => (
                    <span
                      key={trait}
                      className="px-4 py-2 rounded-full bg-secondary/50 text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
