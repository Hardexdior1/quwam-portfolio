"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Atom, Globe, Server, Network, Database, Mail, 
  Code,
  Paintbrush,
  FlaskConical, } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"




const frontendStack = [
  { name: "React.js", description: "UI Library", icon: Atom },
  { name: "Next.js", description: "SSR, Routing, SEO", icon: Globe },
  { name: "JavaScript", description: "Dynamic Web Content", icon: Code },
  { name: "Tailwind CSS", description: "Utility-first styling", icon: Paintbrush },
  { name: "Postman & Thunder Client", description: "Tools for API testing and debugging", icon: FlaskConical },
];


const backendStack = [
  { name: "Node.js", description: "JavaScript Runtime", icon: Server },
  { name: "Express.js", description: "RESTful API Framework", icon: Network },
  { name: "MongoDB + Mongoose", description: "NoSQL Database", icon: Database },
  { name: "Nodemailer", description: "Email notifications", icon: Mail },
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-black mb-12 text-center"
        >
          My Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-2 border-gray-200 h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black">Frontend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {frontendStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="p-2 bg-gray-100 rounded-md">
                      <tech.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-black">{tech.name}</h4>
                      <p className="text-gray-600 text-sm">{tech.description}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-2 border-gray-200 h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black">Backend & Other Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {backendStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="p-2 bg-gray-100 rounded-md">
                      <tech.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-black">{tech.name}</h4>
                      <p className="text-gray-600 text-sm">{tech.description}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
