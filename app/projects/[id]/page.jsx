import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, ArrowLeft, User, Shield } from "lucide-react"
import Link from "next/link"
import ImageCarousel from "@/components/image-carousel"

const projectsData = {
  "verseone-hotel": {
        nb:"NB:the backend is hosted on a free plan,so it might take some seconds before it responds when you try to login for the first time. and'd please don't upload any room from the admin page",
    title: "VerseOne Hotel - Full-Stack Booking Platform",
    category: "Full-Stack Platform",
    description: "Complete hotel booking platform with admin dashboard, payment integration, and email notifications.",
    stack: ["Next.js", "Node.js", "MongoDB", "Paystack", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://verseonehotel.netlify.app/",
    fullDescription: `A comprehensive hotel reservation platform that helps hotels automate bookings, manage availability, and provide guests with a smooth online experience. Built through collaboration between frontend and backend development, this platform demonstrates real-world scalability and user experience design.`,
    features: [
      "Room listing with advanced filters by , price, type, and availability",
      "Instant booking system supporting both registered and guest users",
      "Flexible payment options - Pay online via Paystack or choose pay-on-arrival",
      "Automated email notifications for booking confirmations",
      "Comprehensive admin dashboard for room management and booking tracking",
      "Mobile-friendly, fast-loading UI with modern design patterns",
      "SEO optimization for Google search visibility",
      "Real-time availability checking and booking conflict prevention",
    ],
    challenges: [
      {
  problem: "Some users may want to book quickly without creating an account",
  solution: "Implemented guest booking functionality, allowing users to book appointments without signing up",
}
,
      {
        problem: "Ensuring payment only triggers booking creation on successful transaction",
        solution: "Integrated Paystack  payment verification before storing booking in database",
      },
      {
        problem: "Admin control needed to be simple but powerful for hotel management",
        solution: "Built custom dashboard for editing rooms, prices, and viewing bookings in real-time",
      },
      {
        problem: "SEO visibility for brand recognition without custom domain",
        solution:
          "Applied SEO strategies including page titles, descriptions, sitemap generation, and Google Search Console verification",
      },
    ],
    impact:
      'The platform now appears as the first or second result on Google for "Verse One Hotel" searches, demonstrating effective SEO implementation. The booking system handles real user transactions and provides hotels with complete control over their online presence.',
    loginInfo: {
      user: { email: "adenirandamilare66@gmail.com", password: "124password" },
      admin: { email: "admin@gmail.com", password: "admin" },
    },
    collaboration:
      "I built the complete frontend while collaborating with a backend developer who handled Node.js and MongoDB implementation. This project showcases my ability to work effectively in a team environment and integrate with backend APIs.",
    images: [
      "/hotelhero.PNG",
      "/rooms&rates.PNG",
      "/checkout.PNG",
      "/hotelthankyou.PNG",
      "/verseone.PNG",
      "/detailsaboutthebooking.PNG",
    ],
  },
  "doctor-booking": {
    nb:"NB:the backend is hosted on a free plan,so it might take some seconds before it responds when you try to login for the first time.",
    title: "Doctor Appointment & Clinic Management Platform",
    category: "Full-Stack Healthcare Platform",
    description:
      "Comprehensive healthcare management platform with role-based authentication, appointment booking, and clinic dashboard.",
    stack: ["Next.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Framer Motion", "Nodemailer"],
    liveUrl: "https://medipluss-fullstack.netlify.app",
    fullDescription: `A fully responsive healthcare web application that enables clinics to manage their doctors, appointments, patient reviews . Built for clinics, hospitals, and healthcare businesses seeking complete control over their online presence and patient engagement.`,
    features: [
      "Role-based Authentication system for Admin (clinic),  and Patients with secure login",
      "Comprehensive Clinic Admin Dashboard for doctor profile management ",
      "Individual doctor profiles with detailed bios, expertise, availability, and patient reviews",
      "Intelligent appointment booking system with conflict prevention and notifications",
      "Patient review and rating system for doctor credibility",
      "Blog section for health tips, announcements, and medical content publishing",
      "Contact form with email integration for patient inquiries",
      "Fully responsive UI optimized for mobile, tablet, and desktop devices",
     "Patients can rebook previous doctor appointments or browse through available doctors.",
"Email notifications are sent to both the patient and doctor when an appointment is booked.",
"Doctors receive an email notification when their profile is created.",
"Admins can toggle a doctor's availability in case the doctor is unavailable."

    ],
    challenges: [
      {
        problem: "Managing different user roles and permissions across the platform",
        solution:
          "Implemented secure role-based authentication system with route protection and user-specific dashboards",
      },
      {
  problem: "Users booking appointments with unavailable or on-leave doctors",
  solution: "Added admin-controlled availability toggling to prevent bookings for unavailable doctors",
}
,
      {
        problem: "Creating seamless patient experience for booking and rebooking",
        solution: "Designed intuitive UI with clear user flows and appointment history tracking",
      },
     
    ],
    impact:
      "This platform provides healthcare businesses with complete control over their online presence, from doctor management to patient engagement. The system supports real appointment bookings and can be scaled for payment integration also",
    loginInfo: {
      note: "Login credentials for both admin and user account are provided directly on the website for testing purposes.",
    },
    development:
      "I designed and built both the frontend and backend of this platform, demonstrating full-stack development capabilities. The project includes well-organized components and scalable architecture to support future enhancements.",
    images: [
      "/newhero.PNG",
      "/bookdoctors.PNG",
      "/doctor-details.PNG",
      "/my-bookings.PNG",
      "/all-bookings.PNG",
      "/full-doctor-details.PNG",
    ],
  },
  "sparkleclean": {

  title: "Sparkle Clean - High-Converting Website for Small Businesses",
    category: "Business Website",
  description: "Modern website template tailored for small/local service-based businesses to establish a professional online presence.",

    stack: ["Next.js", "Tailwind CSS", "Netlify"],
    liveUrl: "https://sparklecleean.netlify.app",
      fullDescription: `Sparkleclean is a clean, professional website designed for service-based entrepreneurs — whether you're running a cleaning company, repair shop, fitness studio, logistics firm, or local consultancy. It's built to help small business owners gain trust, showcase services, and turn visitors into leads or clients.`,

   features: [
    "Clear, modern homepage with value-driven messaging",
    "Service offerings section with tiered or custom pricing support",
    '"About Us" section to humanize the brand and build credibility',
    "Contact form for lead capture and inquiries",
    "Plan & Budget form to support custom service requests",
    "Responsive, mobile-first design for all device sizes",
    "Fast loading speeds and lightweight structure",
    "SEO-friendly markup for better local search visibility",
  ],
      challenges: [
    {
      problem: "Many small business owners struggle to gain trust online without a proper website",
      solution: "Built a professional site that showcases credibility through testimonials, branding, and clean layout",
    },
    {
      problem: "Customers often lack clarity on available services and pricing",
      solution: "Created a visual, structured services section with flexible pricing or booking pathways",
    },
    {
      problem: "Rigid pricing doesn't suit all potential clients",
      solution: "Included a ‘Request a free Quote’ form so users can explain their needs and receive tailored responses",
    },
    {
      problem: "Lack of conversion strategy on many local business sites",
      solution: "Used clear CTAs, trust indicators, and strong layout flow to drive inquiries and client engagement",
    },
  ],
      impact:
    "This project shows how small and local business owners can benefit from having a conversion-optimized, trustworthy website. It's a reusable base that can be adapted for different industries while ensuring usability and professionalism.",
  development:
    "Focused on simplicity, responsiveness, and performance — this project demonstrates my ability to deliver high-quality, business-ready websites that serve real-world goals. Built with reusability in mind for a variety of local businesses.",

    images: [
      "/clean2.PNG",
      "/aboutsparkle.PNG",
            // "/custom-price.PNG",

            "/professionalservices.PNG",
      "/core-values.PNG",
            "/beforeaftercleaning.PNG",

      "/freequote.PNG",
    ],
  },
  "fin-ai": {
    title: "FIN-ai - AI Customer Support SaaS Landing Page",
    category: "SaaS Landing Page",
    description: "AI customer support SaaS landing page with conversion-focused design.",
    stack: ["Next.js", "Tailwind CSS", "Netlify", "Framer Motion"],
    liveUrl: "https://aisaaslandiingpage.netlify.app/",
    fullDescription: `A sleek, modern landing page designed to promote a customer support SaaS product powered by AI. This project focuses on clear communication, conversion-driven design, and showcasing the unique features of an AI tool built for business support teams.`,
    features: [
      "Bold hero section with clear product value proposition",
      "Feature highlights explaining AI benefits in simple terms",
      // "Testimonials section to build credibility and trust",
      "Pricing section with clear tiers and feature comparison",
      "FAQ section to handle common objections and concerns",
      "CTA buttons strategically placed to drive sign-ups",
      "Fully responsive, fast-loading, and mobile-friendly design",
      "Modern animations and micro-interactions",
    ],
    challenges: [
      {
        problem: "SaaS startups and AI tools need professional product presentation",
        solution: "Created a polished, startup-ready design that presents the product professionally",
      },
      {
        problem: "Complex AI features need to be explained in simple, engaging ways",
        solution: "Designed visually engaging feature explanations that make complex AI concepts accessible",
      },
      {
        problem: "Converting visitors into early users or leads for a new product",
        solution: "Implemented conversion-optimized layout with strategic CTAs and trust-building elements",
      },
      {
        problem: "Standing out in the competitive SaaS/AI market",
        solution: "Used modern design trends and clear value proposition to differentiate the product",
      },
    ],
    impact:
      "This landing page works as a template for any B2B SaaS offering in tech, especially AI. Whether you're launching a hackathon MVP or preparing for investor demos, this landing page presents your product like a polished startup ready for growth.",
    development:
      "Demonstrates expertise in SaaS marketing page design, conversion optimization, and presenting technical products to business audiences. Shows understanding of startup needs and investor presentation requirements.",
    images: [
      "/ai-hero.PNG",
      "/about-fin.PNG",
      "/ai-saas-team-section.PNG",
      "/integration.PNG",
      "/tech-stack.PNG",
            "/join-wait-list.PNG",
    ],
  },
}


const ProjectPage=async({params})=>{

  const {id}=await params

  const project = projectsData[id]
  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white border">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Button asChild variant="outline" className="mb-8 bg-transparent stickey">
          <Link href="/#projects">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </Button>

        
       

        <div className="mb-8">
          <Badge variant="outline" className="mb-4 border-black text-black">
            {project.category}
          </Badge>
          <h1 className="text-2xl md:text-5xl font-bold text-black mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{project.description}</p>
          <Button asChild className="bg-black text-white hover:bg-gray-800">
            <Link href={project.liveUrl} target="_blank">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live Site
            </Link>
          </Button>
        </div>

        <div className="mb-8">
          <ImageCarousel images={project.images} projectTitle={project.title} />
        </div>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{project.fullDescription}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Challenges & Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="border-l-4 border-gray-200 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge: {challenge.problem}</h4>
                    <p className="text-gray-700">
                      <strong>Solution:</strong> {challenge.solution}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {project.loginInfo && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Test Login Information
                </CardTitle>
                <CardDescription>Use these credentials to explore the platform features</CardDescription>
              </CardHeader>
              <CardContent>
                {project.loginInfo.note ? (
                  <p className="text-gray-700">{project.loginInfo.note}</p>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold flex items-center gap-2 mb-2">
                        <User className="w-4 h-4" />
                        User Account
                      </h4>
                      <p className="text-sm text-gray-600">Email: {project.loginInfo.user.email}</p>
                      <p className="text-sm text-gray-600">Password: {project.loginInfo.user.password}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4" />
                        Admin Account
                      </h4>
                      <p className="text-sm text-gray-600">Email: {project.loginInfo.admin.email}</p>
                      <p className="text-sm text-gray-600">Password: {project.loginInfo.admin.password}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Impact & Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{project.impact}</p>
            </CardContent>
          </Card>

          {project.collaboration && (
            <Card>
              <CardHeader>
                <CardTitle>Development & Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{project.collaboration}</p>
              </CardContent>
            </Card>
          )}

          {project.development && (
            <Card>
              <CardHeader>
                <CardTitle>Development Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{project.development}</p>
              </CardContent>
            </Card>
          )}
        </div>
<div>
  <small>
<b> 
  {project.nb}   
</b>    
    </small>
</div>
        <div className="mt-12 text-center">
          <Button asChild className="bg-black text-white hover:bg-gray-800">
            <Link href={project.liveUrl} target="_blank">
              <ExternalLink className="w-4 h-4 mr-2" />
              Explore the Live Platform
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )

}
  
  


export default ProjectPage