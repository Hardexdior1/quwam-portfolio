import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Adeniran Quwam</h3>
            <p className="text-gray-400">Frontend Developer</p>
          </div>

          <div className="flex space-x-6">
            <Link href="https://github.com/hardexdior1" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/adeniran-quwam-8b8b2225b/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="https://x.com/AdeniranQuwam" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Adeniran Quwam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
// https://blog.anniebombanie.com/