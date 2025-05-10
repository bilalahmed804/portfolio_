import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  image: string
  link?: string
}

export function ProjectCard({ title, description, techStack, image, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-lg group">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-700 mb-4 line-clamp-3">{description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-slate-900 mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {link ? (
          <Button asChild className="w-full bg-slate-800 hover:bg-slate-700">
            <Link href={link} target="_blank">
              View Project
            </Link>
          </Button>
        ) : (
          <Button disabled className="w-full bg-slate-800 hover:bg-slate-700 cursor-not-allowed">
            Coming Soon
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
