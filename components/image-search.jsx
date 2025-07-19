"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Search } from "lucide-react"

export default function ImageSearch({ onClose }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  const searchImages = async () => {
    if (!searchTerm) return

    setLoading(true)
    // Simulate API call with placeholder images
    setTimeout(() => {
      const mockImages = Array.from(
        { length: 6 },
        (_, i) => `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(searchTerm)}_${i + 1}`,
      )
      setImages(mockImages)
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Image Search Tool</CardTitle>
            <CardDescription>Search for images by name, place, or description</CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-6 h-6" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for images..."
              onKeyPress={(e) => e.key === "Enter" && searchImages()}
            />
            <Button onClick={searchImages} disabled={loading}>
              <Search className="w-4 h-4 mr-2" />
              {loading ? "Searching..." : "Search"}
            </Button>
          </div>

          {images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Search result ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {images.length === 0 && !loading && (
            <div className="text-center py-8 text-gray-500">Enter a search term to find images</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
