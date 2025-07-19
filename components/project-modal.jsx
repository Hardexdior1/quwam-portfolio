"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ExternalLink } from "lucide-react"
import Link from "next/link"
import ImageCarousel from "./image-carousel"

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-black">{project.title}</h2>
            <Badge variant="outline" className="mt-2">
              {project.category}
            </Badge>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="p-6">
          <p className="text-gray-700 mb-6 text-lg">{project.fullDescription}</p>

          {project.images && (
            <div className="mb-6">
              <ImageCarousel images={project.images} projectTitle={project.title} />
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Problems Solved</h3>
            <ul className="space-y-2">
              {project.problems.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">⚠</span>
                  <span className="text-gray-700">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Solutions Implemented</h3>
            <ul className="space-y-2">
              {project.solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">{solution}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            <Button asChild className="bg-black text-white hover:bg-gray-800">
              <Link href={project.liveUrl} target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Site
              </Link>
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
