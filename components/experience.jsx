"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
const experiences = [
  {
    company: "Ojutu Inc",
    img:"https://media.licdn.com/dms/image/v2/D4D0BAQF2QBLpeg-GWQ/company-logo_200_200/company-logo_200_200/0/1708443260137/ojutu_co_logo?e=1755734400&v=beta&t=CiG1DWBc-T7u7mF7SMOpPcIFSLUP948wgyln39EBa9g",
    role: "Frontend Developer",
    period: "August 2024 – July 2025",
    description:
      "Building and optimizing production-grade applications using React and Next.js. Contributed to multiple platforms including an EdTech app and a real estate solution for students to browse nearby rental listings. Collaborating with backend engineers and designers to implement full user flows.",
  },
  {
    company: "Efortlex Limited",
    img:"https://media.licdn.com/dms/image/v2/D4D0BAQHI90zSxE8yqQ/company-logo_200_200/company-logo_200_200/0/1698392921291?e=1755734400&v=beta&t=ej9sI1RZIFDKiGxXbXgk5ivN191J9SP0jTyWUz8KBkg",
    role: "Frontend Developer Intern",
    period: "April 2024 – August 2024",
    description:
      "Built and maintained a property listing platform connecting tenants (mostly students) with landlords based on location proximity. Learned to integrate real API endpoints, manage component state, and transform wireframes into production-ready UIs.",
  },
  {
    company: "Loyalty Solutions",
        img:"https://media.licdn.com/dms/image/v2/D4D0BAQHu8-Zc2rd-zw/img-crop_100/img-crop_100/0/1736524772356?e=1755734400&v=beta&t=PZOtkhW-5YIf5vrRiFr-0Ehxh1j33vCfnh89GIqq7Sw",

    role: "Frontend Developer (Contract)",
    period: "February 2024 – April 2024",
    description:
      "Developed UI components and dashboards for a loyalty program platform. Implemented dynamic reward logic and handled third-party API integrations. Focused on mobile responsiveness and usability across devices.",
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-black mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-300"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 md:mb-16"
            >
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                  <div className="relative">
                    {/* <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                      className="absolute left-4 md:left-auto md:right-0 w-3 h-3 bg-black rounded-full transform -translate-x-1/2 md:translate-x-1/2"
                    ></motion.div> */}
                    <div className="ml-12 md:ml-0 md:text-right">
                      <h3 className="text-xl font-bold text-black">{exp.company}</h3>
                      <p className="text-lg text-gray-600 font-medium">{exp.role}</p>
                      <p className="text-sm text-gray-500">{exp.period}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="ml-12 md:ml-0">
                    <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
