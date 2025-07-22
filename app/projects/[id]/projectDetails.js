
'use client'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, ArrowLeft, User, Shield } from "lucide-react"
import Link from "next/link"
import ImageCarousel from "@/components/image-carousel"
import { useState } from "react"

const ProjectDetails=({project})=>{
      const [showDemo,setShowDemo]=useState(false)
const toggleDemo =()=>{
setShowDemo(!showDemo)
              document.getElementById("demo-video")?.scrollIntoView({ behavior: 'smooth' });

}
return <main>
<div className="min-h-screen bg-white border" id="demo-video">
     <div className={`max-w-4xl mx-auto p-5 md:p-0 mt-5 ${showDemo?`block`:`hidden`}`}>
       <video muted    poster={project.poster} controls>
  <source src={project.src} type="video/mp4" />
  Your browser does not support the video tag.
</video>
<div className="flex justify-end"> <button className="bg-black text-white hover:bg-gray-800 mt-4 rounded-md px-3 py-1" onClick={toggleDemo}>close</button>
</div>
     </div>



      <div className="max-w-4xl mx-auto px-6 py-12">
        <Button asChild variant="outline" className="mb-8 bg-transparent stickey">
          <Link href="/#projects">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </Button>

        
       

        {/* <div className="mb-8">
          <Badge variant="outline" className="mb-4 border-black text-black">
            {project.category}
          </Badge>
          <h1 className="text-2xl md:text-5xl font-bold text-black mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{project.description}</p>
          <div>
            <Button asChild className="bg-black text-white hover:bg-gray-800">
            {project.video?<button onClick={toggleDemo}>
              <ExternalLink className="w-4 h-4 mr-2" />
              view project
            </button>:<Link href={project.liveUrl} target="_blank">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live Site
            </Link>}
          </Button>
          </div>
 
{project.  hasliveLink&&<div className="block"><Button asChild className="bg-black block  mx-2 text-white hover:bg-gray-800 md:inline-block">
           <Link href={project.liveUrl} target="_blank">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live Site
            </Link>
          </Button></div>}
        
        </div> */}
        <div className="mb-8">
  <Badge variant="outline" className="mb-4 border-black text-black">
    {project.category}
  </Badge>

  <h1 className="text-2xl md:text-5xl font-bold text-black mb-4">
    {project.title}
  </h1>

  <p className="text-xl text-gray-600 mb-6">{project.description}</p>

  <div className="flex flex-col md:flex-row gap-3">
    <Button asChild className="bg-black text-white hover:bg-gray-800">
      {project.video ? (
        <button onClick={toggleDemo} className="w-full text-left md:w-auto">
          <ExternalLink className="w-4 h-4 mr-2" />
          View Project
        </button>
      ) : (
        <Link href={project.liveUrl} target="_blank">
          <ExternalLink className="w-4 h-4 mr-2" />
          View Live Site
        </Link>
      )}
    </Button>

    {project.hasliveLink && (
      <Button asChild className="bg-black text-white hover:bg-gray-800">
        <Link href={project.liveUrl} target="_blank">
          <ExternalLink className="w-4 h-4 mr-2" />
          View Live Site
        </Link>
      </Button>
    )}
  </div>
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
                      {/* <h4 className="font-semibold flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4" />
                        Admin Account
                      </h4> */}
                      {/* <p className="text-sm text-gray-600">Email: {project.loginInfo.admin.email}</p>
                      <p className="text-sm text-gray-600">Password: {project.loginInfo.admin.password}</p> */}
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
            {/* <Link href={project.liveUrl} target="_blank">
              <ExternalLink className="w-4 h-4 mr-2" />
             
            </Link> */}
            {project.video?<button onClick={(()=>{
                toggleDemo()

            })}  
>
              <ExternalLink className="w-4 h-4 mr-2" />
              view project
            </button>:<Link href={project.liveUrl} target="_blank">
              <ExternalLink className="w-4 h-4 mr-2" />
              Explore the Live Platform
            </Link>}
          </Button>
        </div>
      </div>
    </div>
</main>
}
export default ProjectDetails