"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Download } from "lucide-react"
import { fetchProjects, type Project } from "@/lib/api"
import ProjectCard from "./project-card"
import VideoModal from "./video-modal"

interface ProjectsSectionProps {
  translations: any
  onBrochureDownload: () => void
}

export default function ProjectsSection({ translations, onBrochureDownload }: ProjectsSectionProps) {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async () => {
    try {
      setLoading(true)
      const projectsData = await fetchProjects()
      setProjects(projectsData)
      setError(null)
    } catch (err) {
      setError("Failed to load projects")
      console.error("Error loading projects:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleViewProject = (project: Project) => {
    setSelectedProject(project)
    setIsVideoModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsVideoModalOpen(false)
    setSelectedProject(null)
  }

  const completedProjects = projects.filter((p) => p.status === "completed").length
  const inProgressProjects = projects.filter((p) => p.status === "in-progress").length

  if (loading) {
    return (
      <section className="py-16">
        <div className="text-center mb-12">
          <Badge className="bg-[#f89421]/10 text-[#f89421] mb-4 px-4 py-2">Our Portfolio</Badge>
          <h2 className="text-5xl font-bold text-[#616a71] mb-6 hammersmith-style">{translations.projects.title}</h2>
        </div>

        {/* Loading Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-lg animate-pulse">
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
              <div className="h-40 bg-gray-200"></div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#616a71] mb-4">Error Loading Projects</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Button onClick={loadProjects} className="bg-[#f89421] hover:bg-[#e8851e] text-white">
            Try Again
          </Button>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="py-16">
        <div className="text-center mb-12">
          <Badge className="bg-[#f89421]/10 text-[#f89421] mb-4 px-4 py-2">Our Portfolio</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#616a71] mb-4 hammersmith-style">
            {translations.projects.title}
          </h2>
          <p className="text-lg md:text-xl text-[#616a71] max-w-4xl mx-auto leading-relaxed">
            {translations.projects.subtitle}
          </p>
        </div>

        {/* Project Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border-l-4 border-[#f89421] text-center hover:shadow-xl transition-shadow">
            <div className="text-2xl md:text-3xl font-bold text-[#f89421] hammersmith-style mb-1">
              {projects.length}
            </div>
            <div className="text-sm md:text-base text-[#616a71] font-medium">Total Projects</div>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border-l-4 border-[#616a71] text-center hover:shadow-xl transition-shadow">
            <div className="text-2xl md:text-3xl font-bold text-[#616a71] hammersmith-style mb-1">
              {completedProjects}
            </div>
            <div className="text-sm md:text-base text-[#616a71] font-medium">Completed</div>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border-l-4 border-orange-300 text-center hover:shadow-xl transition-shadow">
            <div className="text-2xl md:text-3xl font-bold text-orange-600 hammersmith-style mb-1">
              {inProgressProjects}
            </div>
            <div className="text-sm md:text-base text-[#616a71] font-medium">Ongoing</div>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border-l-4 border-gray-400 text-center hover:shadow-xl transition-shadow">
            <div className="text-2xl md:text-3xl font-bold text-gray-600 hammersmith-style mb-1">100%</div>
            <div className="text-sm md:text-base text-[#616a71] font-medium">Success Rate</div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewProject={handleViewProject}
              translations={translations}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#f89421]/10 to-[#616a71]/10 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#616a71] mb-3 md:mb-4 hammersmith-style">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-[#616a71] mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
              Join our list of satisfied clients and experience the JSPEC INDIA difference in bridge construction and
              heavy lifting solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedProject && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={handleCloseModal}
          videoUrl={selectedProject.videoUrl || ""}
          title={selectedProject.title}
          description={selectedProject.description}
        />
      )}
    </>
  )
}
