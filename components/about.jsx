"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-black mb-8 text-center"
        >
          About Me
        </motion.h2>

        <div className="prose prose-lg max-w-none text-gray-700">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed mb-6"
          >
            I'm a frontend developer with a keen eye for detail and an obsession with building user-friendly,
            performant, and accessible websites. I specialize in HTML, CSS, Tailwind CSS, JavaScript, and TypeScript,
            working primarily with React and Next.js.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg leading-relaxed mb-6"
          >
            I build responsive and SEO-optimized applications, integrate APIs, and translate business requirements into
            reliable and maintainable interfaces. My experience spans from working with startups to building full-stack
            platforms that solve real-world problems. Currently expanding my skills into backend development to become a
            more well-rounded developer.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg leading-relaxed"
          >
            When I'm not coding or improving my skills, I'm often exploring how people lived before the presidential or
            parliamentary eras, diving into the history of rulers, wars, betrayals, and notable figures. I also enjoy
            watching scenes from Game of Thrones, drawn to its rich storytelling, political intrigue, and medieval
            atmosphere.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
