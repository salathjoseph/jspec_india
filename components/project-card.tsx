"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Play, MapPin, Calendar } from "lucide-react"
import type { Project } from "@/lib/api"
import Image from "next/image"

interface ProjectCardProps {
  project: Project
  onViewProject: (project: Project) => void
  translations: any
}

export default function ProjectCard({ project, onViewProject, translations }: ProjectCardProps) {
  const isCompleted = project.status === "completed"

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md overflow-hidden bg-white">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.imageUrl || "/placeholder.svg?height=200&width=400&text=Project+Image"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Play Button Overlay */}
        {project.videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="icon"
              className="w-16 h-16 rounded-full bg-[#f89421] hover:bg-[#e8851e] text-white shadow-2xl"
              onClick={() => onViewProject(project)}
            >
              <Play className="w-6 h-6 ml-1" />
            </Button>
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <Badge
            className={`${
              isCompleted
                ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                : "bg-amber-100 text-amber-700 border border-amber-200"
            } font-medium text-xs`}
          >
            {isCompleted ? (
              <>
                <CheckCircle className="w-3 h-3 mr-1" />
                {translations.projects.completed}
              </>
            ) : (
              <>
                <Clock className="w-3 h-3 mr-1" />
                {translations.projects.inProgress}
              </>
            )}
          </Badge>
        </div>

        {/* Location */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center text-white text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {project.location}
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          <h4 className="text-[#616a71] text-lg font-bold hammersmith-style leading-tight">{project.title}</h4>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-semibold text-[#616a71]">Client:</span>
              <span className="text-gray-700">{project.client}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-[#616a71]">Contractor:</span>
              <span className="text-gray-700">{project.contractor}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(project.startDate).toLocaleDateString()}
              {project.endDate && ` - ${new Date(project.endDate).toLocaleDateString()}`}
            </div>
          </div>

          <div
            className={`p-3 rounded-lg border-l-4 ${
              isCompleted ? "bg-emerald-50 border-emerald-400" : "bg-amber-50 border-amber-400"
            }`}
          >
            <p className={`text-sm font-medium ${isCompleted ? "text-emerald-800" : "text-amber-800"}`}>
              {project.description}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className={`${
                    isCompleted
                      ? "border-emerald-400 text-emerald-700 bg-emerald-50"
                      : "border-amber-400 text-amber-700 bg-amber-50"
                  } text-xs px-3 py-1`}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {!isCompleted && project.progress && (
              <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-amber-700">Progress</span>
                  <span className="text-sm font-bold text-amber-700">{project.progress}%</span>
                </div>
                <div className="w-full bg-amber-200 rounded-full h-2">
                  <div
                    className="bg-amber-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
