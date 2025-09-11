// API Types
export interface Project {
  id: string
  title: string
  client: string
  contractor: string
  description: string
  status: "completed" | "in-progress"
  progress?: number
  tags: string[]
  videoUrl?: string
  imageUrl?: string
  location: string
  startDate: string
  endDate?: string
}

export interface CompanyData {
  stats: {
    yearsExperience: number
    projectsCompleted: number
    countries: number
    successRate: number
  }
  services: Service[]
  testimonials: Testimonial[]
  certifications: Certification[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Testimonial {
  id: string
  name: string
  company: string
  position: string
  content: string
  rating: number
  avatar?: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  imageUrl?: string
}

// Mock API functions (replace with real API calls)
export async function fetchProjects(): Promise<Project[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    {
      id: "1",
      title: "Chennai to Bangalore Expressway",
      client: "RCCL",
      contractor: "ESTRUCTURA",
      description: "LG Commissioning, I Girder Lifting & Erection",
      status: "completed",
      tags: ["LG Systems", "I Girder"],
      videoUrl: "/placeholder-video.mp4",
      imageUrl: "/placeholder.svg?height=300&width=400&text=Chennai+Expressway",
      location: "Tamil Nadu, India",
      startDate: "2022-01-15",
      endDate: "2023-06-30",
    },
    {
      id: "2",
      title: "Kozhikode Highway Project",
      client: "KMC",
      contractor: "ESTRUCTURA",
      description: "LG Commissioning, Segment Lifting & Erection",
      status: "completed",
      tags: ["LG Systems", "Segments"],
      videoUrl: "/placeholder-video.mp4",
      imageUrl: "/placeholder.svg?height=300&width=400&text=Kozhikode+Highway",
      location: "Kerala, India",
      startDate: "2021-08-10",
      endDate: "2023-03-20",
    },
    {
      id: "3",
      title: "Kannur Bypass Project",
      client: "VSEPL",
      contractor: "IBEC",
      description: "LG Commissioning, I Girder Lifting & Erection",
      status: "completed",
      progress: 75,
      tags: ["LG Systems", "I Girder"],
      videoUrl: "/placeholder-video.mp4",
      imageUrl: "/placeholder.svg?height=300&width=400&text=Kannur+Bypass",
      location: "Kerala, India",
      startDate: "2023-02-01",
    },
    {
      id: "4",
      title: "Pune Metro Project",
      client: "RVNL",
      contractor: "STRUCTICON",
      description: "LG Commissioning, Segment Lifting & Erection",
      status: "completed",
      progress: 60,
      tags: ["LG Systems", "Segments"],
      videoUrl: "/placeholder-video.mp4",
      imageUrl: "/placeholder.svg?height=300&width=400&text=Pune+Metro",
      location: "Maharashtra, India",
      startDate: "2023-04-15",
    },
    {
      id: "5",
      title: "Chennai Metro Project",
      client: "RVNL",
      Subcontractor: "L&T",
      description: "Erection & PT works",
      status: "On progress",
      progress: 60,
      tags: ["LG Systems", "Segments"],
      videoUrl: "/placeholder-video.mp4",
      imageUrl: "/placeholder.svg?height=300&width=400&text=Pune+Metro",
      location: "Maharashtra, India",
      startDate: "2023-04-15",
    },
  ]
}

export async function fetchCompanyData(): Promise<CompanyData> {
  await new Promise((resolve) => setTimeout(resolve, 800))

  return {
    stats: {
      yearsExperience: 23,
      projectsCompleted: 100,
      countries: 3,
      successRate: 100,
    },
    services: [
      {
        id: "1",
        title: "Bridge Segments Erection",
        description: "Specialized erection of precast concrete and steel segments for all bridge types",
        icon: "Building",
        features: ["Box Girders", "I Girders", "U Girders", "Pi Girders", "PSI Modules"],
      },
      {
        id: "2",
        title: "Advanced Erection Methods",
        description: "State-of-the-art methodologies for efficient and safe bridge construction",
        icon: "Crane",
        features: [
          "Span-by-span Method",
          "Balanced Cantilever",
          "Overhead Launching Gantries",
          "Under slung Gantries",
          "Derek Cranes",
        ],
      },
      {
        id: "3",
        title: "Technical Support",
        description: "Comprehensive technical expertise and skilled manpower for complex projects",
        icon: "Settings",
        features: [
          "LG Assembly & Disassembly",
          "Segment Erection",
          "Stressing Works",
          "Span Alignment",
          "Bearing Installation",
        ],
      },
    ],
    testimonials: [
      {
        id: "1",
        name: "Rajesh Kumar",
        company: "ESTRUCTURA",
        position: "Project Manager",
        content:
          "JSPEC INDIA delivered exceptional results on our Chennai Expressway project. Their expertise in LG operations is unmatched.",
        rating: 5,
      },
      {
        id: "2",
        name: "Mohammed Al-Rashid",
        company: "Saudi Infrastructure Corp",
        position: "Chief Engineer",
        content:
          "Working with JSPEC INDIA in Saudi Arabia was a game-changer. Their international experience shows in every aspect of their work.",
        rating: 5,
      },
    ],
    certifications: [
      {
        id: "1",
        name: "ISO 9001:2015",
        issuer: "International Organization for Standardization",
        date: "2023-01-15",
      },
      {
        id: "2",
        name: "Safety Excellence Award",
        issuer: "Indian Construction Safety Council",
        date: "2023-06-20",
      },
    ],
  }
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  await new Promise((resolve) => setTimeout(resolve, 600))

  return [
    {
      id: "1",
      name: "Rajesh Kumar",
      company: "ESTRUCTURA",
      position: "Project Manager",
      content:
        "JSPEC INDIA delivered exceptional results on our Chennai Expressway project. Their expertise in LG operations is unmatched.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=RK",
    },
    {
      id: "2",
      name: "Mohammed Al-Rashid",
      company: "Saudi Infrastructure Corp",
      position: "Chief Engineer",
      content:
        "Working with JSPEC INDIA in Saudi Arabia was a game-changer. Their international experience shows in every aspect of their work.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=MA",
    },
    {
      id: "3",
      name: "Priya Sharma",
      company: "RVNL",
      position: "Technical Director",
      content:
        "The precision and safety standards maintained by JSPEC INDIA on our metro project exceeded all expectations.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=PS",
    },
  ]
}

// Error handling wrapper
export async function apiCall<T>(
  fn: () => Promise<T>,
): Promise<{ data: T | null; error: string | null; loading: boolean }> {
  try {
    const data = await fn()
    return { data, error: null, loading: false }
  } catch (error) {
    console.error("API Error:", error)
    return { data: null, error: "Failed to fetch data", loading: false }
  }
}
