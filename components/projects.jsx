"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Eye } from "lucide-react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import ProjectModal from "./project-modal"
import ImageSearch from "./image-search"

const projects = [
  {
        img:"/hotelhero.PNG",
    id: "verseone-hotel",
    title: "VerseOne Hotel",
    category: "Full-Stack Platform",
    description: "Complete hotel booking platform with admin dashboard, payment integration, and email notifications.",
    stack: ["Next.js", "Node.js", "MongoDB", "Paystack"],
    liveUrl: "https://verseonehotel.netlify.app/",
    type: "fullstack",
    featured: true,
    fullDescription: `A full-stack hotel reservation platform that helps hotels automate bookings, manage availability, and give guests a smooth online experience. Built with collaboration between frontend and backend development.`,
    features: [
      "Room listing with filters by location, price, type, and availability",
      "Instant booking system – Users can book with or without creating an account",
      "Flexible payment options – Pay online (Paystack) or on arrival",
      "Email notifications for booking confirmations",
      "Admin dashboard for room management and booking tracking",
      "Mobile-friendly, fast-loading UI",
    ],
    problems: [
      "Handling bookings without user accounts while preventing duplicates",
      "Ensuring payment only triggers booking creation on success",
      "Admin control needed to be simple but powerful",
    ],
    solutions: [
      "Implemented temporary session tracking and form validation",
      "Integrated Paystack webhook handling and payment verification",
      "Built custom dashboard for real-time room and booking management",
    ],
    loginInfo: {
      user: "adenirandamilare66@gmail.com / 124password",
      admin: "admin@gmail.com / admin",
    },
  },
  {
    id: "doctor-booking",
        img:"/newhero.PNG",

    title: "Doctor Appointment Platform",
    category: "Full-Stack Platform",
    description:
      "Healthcare management platform with role-based authentication, appointment booking, and clinic dashboard.",
    stack: ["Next.js", "Node.js", "MongoDB", "Express.js", "Nodemailer"],
    liveUrl: "https://medipluss-fullstack.netlify.app",
    type: "fullstack",
    featured: true,
    fullDescription: `A fully responsive healthcare web application that enables clinics to manage doctors, appointments, patient reviews, and blog content from a central dashboard.`,
    features: [
      "Role-based Authentication: Admin, Doctors, and Patients",
      "Clinic Admin Dashboard for doctor and content management",
      "Individual doctor profiles with reviews and ratings",
      "Appointment booking system with notifications",
      "Blog section for health tips and announcements",
      "Fully responsive UI optimized for all devices",
    ],
    problems: [
      "Managing different user roles and permissions",
      "Handling appointment conflicts and availability",
      "Creating seamless patient experience",
    ],
    solutions: [
      "Implemented secure role-based authentication system",
      "Built real-time booking validation and notification system",
      "Designed intuitive UI with clear user flows",
    ],
    loginInfo: {
      note: "Login information is provided on the website. Still in development",
    },
  },
  {
    id: "sparkleclean",
    img:"/clean2.PNG",
    title: "SparkleClean Pro",
    category: "Business Website",
    description: "Professional cleaning service website with lead capture and custom pricing forms.",
    stack: ["Next.js", "Tailwind CSS", "Netlify"],
    liveUrl: "https://sparklecleean.netlify.app",
    type: "landing",
    fullDescription: `A modern, professional website designed for service-based businesses in the cleaning industry. Built to solve real challenges that cleaning companies face in building trust online and converting visitors into customers.`,
    features: [
      "Clean, modern homepage with clear value proposition",
      "Detailed Services section with visuals and pricing tiers",
      '"Who We Are" section to boost brand trust',
      "Dedicated Contact page with lead capture form",
      "Plan & Budget form for custom client needs",
      "Fully responsive and fast-loading",
    ],
    problems: [
      "Small local businesses lack strong online presence",
      "Customers unsure about services and booking process",
      "Fixed pricing doesn't fit all client needs",
    ],
    solutions: [
      "Created trustworthy, professional web presence",
      "Clear service descriptions and pricing structure",
      "Custom plan & budget form for unique requirements",
    ],
    images: [
      "/placeholder.svg?height=400&width=800&text=SparkleClean+Homepage",
      "/placeholder.svg?height=400&width=800&text=Services+Section",
      "/placeholder.svg?height=400&width=800&text=About+Section",
      "/placeholder.svg?height=400&width=800&text=Contact+Form",
      "/placeholder.svg?height=400&width=800&text=Pricing+Plans",
    ],
  },
  {
    id: "fin-ai",
    title: "FIN-ai SaaS Landing",
    img:"/ai-hero.PNG",
    category: "SaaS Landing Page",
    description: "AI customer support SaaS landing page with conversion-focused design.",
    stack: ["Next.js", "Tailwind CSS", "Netlify"],
    liveUrl: "https://aisaaslandiingpage.netlify.app/",
    type: "landing",
    fullDescription: `A sleek, modern landing page designed to promote a customer support SaaS product powered by AI. Focuses on clear communication and conversion-driven design.`,
    features: [
      "Bold hero section with clear product value",
      "Feature highlights explaining AI benefits",
      "Testimonials to build credibility",
      "Pricing section with clear tiers",
      "FAQ to handle objections",
      "Strategic CTA placement for conversions",
    ],
    problems: [
      "SaaS startups need professional product presentation",
      "Complex AI features need simple explanation",
      "Converting visitors into early users or leads",
    ],
    solutions: [
      "Professional, polished startup-ready design",
      "Simple, visually engaging feature explanations",
      "Conversion-optimized layout and CTAs",
    ],
    images: [
      "/placeholder.svg?height=400&width=800&text=FIN-ai+Landing+Page",
      "/placeholder.svg?height=400&width=800&text=Features+Section",
      "/placeholder.svg?height=400&width=800&text=Testimonials",
      "/placeholder.svg?height=400&width=800&text=Pricing+Section",
      "/placeholder.svg?height=400&width=800&text=FAQ+Section",
    ],
  },
]



const funProjects = [
  {
    id: "image-search",
    img:"/photo.PNG",
    title: "Image Search Tool",
    description: "Search images by name, place, or description using external APIs. click on each img to expand it",
    liveUrl: "https://cowr-wise-task.netlify.app/",
    category: "Utility Tool",
    stack: ["React", "API Integration", "CSS"],
  },

]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [showImageSearch, setShowImageSearch] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const featuredProjects = projects

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-black mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-2 border-gray-200 hover:border-black transition-all duration-300 overflow-hidden hover:shadow-lg">
                <motion.div
                  className="aspect-video w-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.img}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="border-black text-black">
                      {project.category}
                    </Badge>
                    {project.featured && <Badge className="bg-black text-white">Featured</Badge>}
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        asChild
                        size="sm"
                        className="bg-black text-white hover:bg-gray-800 transition-all duration-300"
                      >
                        <Link href={`/projects/${project.id}`}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-black text-black hover:bg-gray-50 bg-transparent transition-all duration-300"
                      >
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Site
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Fun Projects */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-2xl font-bold text-black mb-8"
        >
          Fun Projects
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-6">
          {funProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
                <motion.div
                  className="aspect-video w-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.img}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {project.category}
                  </Badge>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="transition-all duration-300 hover:shadow-sm bg-transparent"
                      >
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Site
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}

      {showImageSearch && <ImageSearch onClose={() => setShowImageSearch(false)} />}
    </section>
  )
}
