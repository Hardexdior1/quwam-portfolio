"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-20 border">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-black mb-6"
        >
          Adeniran Quwam
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Frontend Developer specializing in React, Next.js, and building user-friendly, performant web applications
          that solve real business problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
            >
              View My Work
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-gray-50 bg-transparent transition-all duration-300 hover:shadow-md"
            >
              <Link href="/resume.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          {[
            { href: "https://github.com/hardexdior1", icon: Github },
            { href: "https://www.linkedin.com/in/adeniran-quwam-8b8b2225b/", icon: Linkedin },
            { href: "https://x.com/AdeniranQuwam", icon: Twitter },
          ].map(({ href, icon: Icon }, index) => (
            <motion.div
              key={href}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <Link href={href} className="text-gray-600 hover:text-black transition-colors duration-300">
                <Icon className="w-6 h-6" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
