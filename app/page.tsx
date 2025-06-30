"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Building,
  ConeIcon as Crane,
  Settings,
  Users,
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  CheckCircle,
  Award,
  Shield,
  Target,
  TrendingUp,
  FileText,
  Download,
  Play,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, SetStateAction } from "react"
import LanguageSwitcher from "@/components/language-switcher"
import ProjectsSection from "@/components/projects-section"
import VideoModal from "@/components/video-modal"
import { getTranslation, type Locale } from "@/lib/i18n"

export default function JSPECWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [locale, setLocale] = useState("en")
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const translations = getTranslation(locale as Locale)

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true)
      try {
        const response = await fetch("/api/projects")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setProjects(data)
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const handleBrochureDownload = () => {
    const link = document.createElement("a")
    link.href = "/jspec-brochure.pdf"
    link.download = "JSPEC-INDIA-Company-Brochure.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleLanguageChange = (newLocale: SetStateAction<string>) => {
    setLocale(newLocale)
  }

  const openVideoModal = () => {
    setIsVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src="/jspec-logo.png" alt="JSPEC INDIA Logo" width={200} height={80} className="h-16 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link
                href="#home"
                className="text-[#616a71] hover:text-[#f89421] font-medium transition-colors relative group"
              >
                {translations.nav.home}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f89421] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#about"
                className="text-[#616a71] hover:text-[#f89421] font-medium transition-colors relative group"
              >
                {translations.nav.about}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f89421] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#services"
                className="text-[#616a71] hover:text-[#f89421] font-medium transition-colors relative group"
              >
                {translations.nav.services}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f89421] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#projects"
                className="text-[#616a71] hover:text-[#f89421] font-medium transition-colors relative group"
              >
                {translations.nav.projects}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f89421] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#contact"
                className="text-[#616a71] hover:text-[#f89421] font-medium transition-colors relative group"
              >
                {translations.nav.contact}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f89421] transition-all group-hover:w-full"></span>
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <LanguageSwitcher currentLocale={locale as Locale} onLocaleChange={handleLanguageChange} />
              <Button
                variant="ghost"
                className="bg-[#f89421] hover:bg-[#e8851e] text-white hammersmith-style shadow-lg hover:shadow-xl transition-all"
                onClick={handleBrochureDownload}
              >
                <Download className="w-4 h-4 mr-2" />
                {translations.nav.brochure}
              </Button>

              {/* Mobile Menu Button */}
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 pt-4">
                <Link href="#home" className="text-[#616a71] hover:text-[#f89421] font-medium transition-colors">
                  {translations.nav.home}
                </Link>
                <Link href="#about" className="text-[#616a71] hover:text-[#f89421] font-medium transition-colors">
                  {translations.nav.about}
                </Link>
                <Link href="#services" className="text-[#616a71] hover:text-[#f89421] font-medium transition-colors">
                  {translations.nav.services}
                </Link>
                <Link href="#projects" className="text-[#616a71] hover:text-[#f89421] font-medium transition-colors">
                  {translations.nav.projects}
                </Link>
                <Link href="#contact" className="text-[#616a71] hover:text-[#f89421] font-medium transition-colors">
                  {translations.nav.contact}
                </Link>
                <Button
                  variant="ghost"
                  className="text-[#616a71] hover:text-[#f89421] justify-start px-0"
                  onClick={handleBrochureDownload}
                >
                  <Download className="w-4 h-4 mr-2" />
                  {translations.nav.downloadBrochure}
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#f89421] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#616a71] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-[#f89421] text-white hammersmith-style px-4 py-2">
                    <Award className="w-4 h-4 mr-2" />
                    {translations.hero.llpRegistered}
                  </Badge>
                  <Badge variant="outline" className="border-[#616a71] text-[#616a71] px-4 py-2">
                    ISO Certified
                  </Badge>
                </div>

                <h1 className="text-6xl lg:text-7xl font-bold text-[#616a71] leading-tight hammersmith-style">
                  {translations.hero.title}
                  <span className="bg-gradient-to-r from-[#f89421] to-[#e8851e] bg-clip-text text-transparent">
                    {translations.hero.heavyStructure}
                  </span>
                  {translations.hero.specialists}
                </h1>

                <p className="text-xl text-[#616a71] leading-relaxed max-w-2xl">{translations.hero.subtitle}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#f89421] hover:bg-[#e8851e] text-white hammersmith-style shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                  onClick={openVideoModal}
                >
                  <Play className="w-5 h-5 mr-2" />
                  {translations.hero.viewProjects}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#616a71] text-[#616a71] hover:bg-[#616a71] hover:text-white hammersmith-style transition-all"
                  onClick={handleBrochureDownload}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  {translations.hero.companyProfile}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#f89421] hammersmith-style">23+</div>
                  <div className="text-sm text-[#616a71] font-medium">{translations.hero.yearsExperience}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#f89421] hammersmith-style">100+</div>
                  <div className="text-sm text-[#616a71] font-medium">{translations.hero.projectsCompleted}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#f89421] hammersmith-style">3</div>
                  <div className="text-sm text-[#616a71] font-medium">{translations.hero.countries}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#f89421] to-[#e8851e] rounded-2xl p-8 text-white shadow-2xl">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/20 text-white">{translations.hero.founded2001}</Badge>
                </div>

                <h3 className="text-3xl font-bold mb-4 hammersmith-style">{translations.hero.industryLeadership}</h3>
                <p className="text-lg mb-8 text-orange-100">
                  {translations.hero.foundedBy} <strong>Mr. Jaganath Thangamani</strong>{" "}
                  {translations.hero.withUnparalleled}
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Building className="h-10 w-10 mx-auto mb-3" />
                    <p className="font-semibold hammersmith-style">{translations.hero.bridgeErection}</p>
                    <p className="text-sm text-orange-200">{translations.hero.expertSolutions}</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Crane className="h-10 w-10 mx-auto mb-3" />
                    <p className="font-semibold hammersmith-style">{translations.hero.heavyLifting}</p>
                    <p className="text-sm text-orange-200">{translations.hero.advancedEquipment}</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Settings className="h-10 w-10 mx-auto mb-3" />
                    <p className="font-semibold hammersmith-style">{translations.hero.steelStructures}</p>
                    <p className="text-sm text-orange-200">{translations.hero.precisionEngineering}</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Users className="h-10 w-10 mx-auto mb-3" />
                    <p className="font-semibold hammersmith-style">{translations.hero.expertTeam}</p>
                    <p className="text-sm text-orange-200">{translations.hero.skilledProfessionals}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center space-x-3 p-6 bg-gray-50 rounded-lg">
              <Shield className="h-8 w-8 text-[#f89421]" />
              <div>
                <div className="font-bold text-[#616a71] hammersmith-style">{translations.trust.safetyFirst}</div>
                <div className="text-sm text-gray-600">{translations.trust.zeroAccident}</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-6 bg-gray-50 rounded-lg">
              <Award className="h-8 w-8 text-[#f89421]" />
              <div>
                <div className="font-bold text-[#616a71] hammersmith-style">{translations.trust.certified}</div>
                <div className="text-sm text-gray-600">ISO 9001:2015</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-6 bg-gray-50 rounded-lg">
              <Target className="h-8 w-8 text-[#f89421]" />
              <div>
                <div className="font-bold text-[#616a71] hammersmith-style">{translations.trust.onTime}</div>
                <div className="text-sm text-gray-600">{translations.trust.delivery100}</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-6 bg-gray-50 rounded-lg">
              <TrendingUp className="h-8 w-8 text-[#f89421]" />
              <div>
                <div className="font-bold text-[#616a71] hammersmith-style">{translations.trust.growth}</div>
                <div className="text-sm text-gray-600">{translations.trust.yearOverYear}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-[#f89421]/10 text-[#f89421] mb-4 px-4 py-2">{translations.about.aboutJspec}</Badge>
            <h2 className="text-5xl font-bold text-[#616a71] mb-6 hammersmith-style">
              {translations.about.engineeringExcellence}
            </h2>
            <p className="text-xl text-[#616a71] max-w-4xl mx-auto leading-relaxed">
              {translations.about.specializedCivil}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-[#616a71] mb-6 hammersmith-style">
                  {translations.about.ourLegacy}
                </h3>
                <p className="text-lg text-[#616a71] mb-6 leading-relaxed">
                  {translations.about.jspecIndiaIs}
                  <strong> Mr. Jaganath Thangamani</strong> {translations.about.withOver}
                </p>

                <div className="bg-gradient-to-r from-[#f89421]/10 to-transparent p-6 rounded-lg border-l-4 border-[#f89421]">
                  <h4 className="text-xl font-bold text-[#616a71] mb-3 hammersmith-style">
                    {translations.about.ourMission}
                  </h4>
                  <p className="text-[#616a71]">{translations.about.toDeliverWorldClass}</p>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-[#f89421] mb-6 hammersmith-style">
                  {translations.about.coreExpertise}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#f89421] rounded-full"></div>
                    <span className="text-[#616a71] font-medium">{translations.about.bridgeErection}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#f89421] rounded-full"></div>
                    <span className="text-[#616a71] font-medium">{translations.about.heavyLifting}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#f89421] rounded-full"></div>
                    <span className="text-[#616a71] font-medium">{translations.about.cableStayed}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#f89421] rounded-full"></div>
                    <span className="text-[#616a71] font-medium">{translations.about.steelStructures}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-2 border-[#f89421]/20 hover:border-[#f89421] transition-all hover:shadow-lg">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-4xl font-bold text-[#f89421] hammersmith-style">23+</CardTitle>
                  <CardDescription className="text-[#616a71] font-medium">
                    {translations.about.yearsOfExcellence}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 border-[#f89421]/20 hover:border-[#f89421] transition-all hover:shadow-lg">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-4xl font-bold text-[#f89421] hammersmith-style">3</CardTitle>
                  <CardDescription className="text-[#616a71] font-medium">
                    {translations.about.countriesServed}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 border-[#f89421]/20 hover:border-[#f89421] transition-all hover:shadow-lg">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-4xl font-bold text-[#f89421] hammersmith-style">100+</CardTitle>
                  <CardDescription className="text-[#616a71] font-medium">
                    {translations.about.projectsDelivered}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 border-[#f89421]/20 hover:border-[#f89421] transition-all hover:shadow-lg">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-4xl font-bold text-[#f89421] hammersmith-style">LLP</CardTitle>
                  <CardDescription className="text-[#616a71] font-medium">
                    {translations.about.registeredEntity}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-[#616a71]/10 text-[#616a71] mb-4 px-4 py-2">{translations.services.ourServices}</Badge>
            <h2 className="text-5xl font-bold text-[#616a71] mb-6 hammersmith-style">
              {translations.services.comprehensiveSolutions}
            </h2>
            <p className="text-xl text-[#616a71] max-w-4xl mx-auto leading-relaxed">
              {translations.services.fromConceptTo}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#f89421] to-[#e8851e] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#f89421] text-xl hammersmith-style">
                  {translations.services.bridgeSegments}
                </CardTitle>
                <CardDescription className="text-[#616a71]">
                  {translations.services.specializedErection}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-[#616a71]">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#f89421] mr-2" /> Box Girders
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#f89421] mr-2" /> I Girders
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#f89421] mr-2" /> U Girders
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#f89421] mr-2" /> Pi Girders
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#f89421] mr-2" /> PSI Modules
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#616a71] to-[#4a5258] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Crane className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#f89421] text-xl hammersmith-style">
                  {translations.services.advancedErection}
                </CardTitle>
                <CardDescription className="text-[#616a71]">{translations.services.stateOfTheArt}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-[#616a71]">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#f89421] mr-2" /> Span-by-span Method
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#f89421] mr-2" /> Balanced Cantilever
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#f89421] mr-2" /> Overhead Launching Gantries
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#f89421] mr-2" /> Under slung Gantries
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#f89421] mr-2" /> Derek Cranes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#f89421] to-[#e8851e] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#f89421] text-xl hammersmith-style">
                  {translations.services.technicalSupport}
                </CardTitle>
                <CardDescription className="text-[#616a71]">
                  {translations.services.comprehensiveTechnical}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-[#616a71]">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#f89421] mr-2" /> LG Assembly & Disassembly
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#f89421] mr-2" /> Segment Erection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#f89421] mr-2" /> Stressing Works
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#f89421] mr-2" /> Span Alignment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#f89421] mr-2" /> Bearing Installation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Equipment & Expertise */}
          <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-[#616a71] mb-12 text-center hammersmith-style">
              {translations.services.equipmentExpertise}
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-white border-l-4 border-[#f89421] shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#616a71] hammersmith-style flex items-center">
                    <Crane className="w-6 h-6 mr-3 text-[#f89421]" />
                    {translations.services.specializedEquipment}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-[#616a71]">
                    <li className="flex items-center">
                      <ArrowRight className="w-4 h-4 text-[#f89421] mr-2" /> Overhead Launching Gantries
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="w-4 h-4 text-[#f89421] mr-2" /> Under slung Launching Gantries
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="w-4 h-4 text-[#f89421] mr-2" /> Derek Cranes for Cable-Stayed Bridges
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="w-4 h-4 text-[#f89421] mr-2" /> Ground Support Systems with Cranes
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-l-4 border-[#f89421] shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#616a71] hammersmith-style flex items-center">
                    <FileText className="w-6 h-6 mr-3 text-[#f89421]" />
                    {translations.services.workScope}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-[#616a71]">
                    <li className="flex items-center">
                      <ArrowRight className="w-4 h-4 text-[#f89421] mr-2" /> Assembly & Disassembly of LG Systems
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="w-4 h-4 text-[#f89421] mr-2" /> Segment Erection using LG Systems
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="w-4 h-4 text-[#f89421] mr-2" /> Temporary & Permanent Stressing
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="w-4 h-4 text-[#f89421] mr-2" /> Span Alignment & Bearing Installation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <ProjectsSection translations={translations} onBrochureDownload={handleBrochureDownload} />
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#f89421]/10 text-[#f89421] mb-4 px-4 py-2">{translations.contact.getInTouch}</Badge>
            <h2 className="text-5xl font-bold text-[#616a71] mb-6 hammersmith-style">
              {translations.contact.readyToStartProject}
            </h2>
            <p className="text-xl text-[#616a71] max-w-3xl mx-auto">{translations.contact.ourTeamOf}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#616a71] mb-6 hammersmith-style">
                  {translations.contact.contactInformation}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-[#f89421] rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#616a71] hammersmith-style mb-1">
                        {translations.contact.headOffice}
                      </h4>
                      <p className="text-gray-600">
                        Chennai 600063, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-[#f89421] rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#616a71] hammersmith-style mb-1">
                        {translations.contact.phone}
                      </h4>
                      <a
                        href="tel:+919445071399"
                        className="text-gray-600 hover:text-[#f89421] transition-colors font-medium"
                      >
                        +91 9445071399
                      </a>
                      <p className="text-sm text-gray-500">{translations.contact.available247}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-[#f89421] rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#616a71] hammersmith-style mb-1">
                        {translations.contact.email}
                      </h4>
                      <a
                        href="mailto:info@jspecindia.com?subject=Project Inquiry - JSPEC INDIA"
                        className="text-gray-600 hover:text-[#f89421] transition-colors font-medium"
                      >
                        info@jspecindia.com
                      </a>
                      <p className="text-sm text-gray-500">{translations.contact.responseWithin24}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-[#f89421] rounded-lg flex items-center justify-center">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#616a71] hammersmith-style mb-1">
                        {translations.contact.website}
                      </h4>
                      <p className="text-gray-600">www.jspecindia.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Details */}
              <div className="bg-gradient-to-br from-[#f89421] to-[#e8851e] rounded-2xl p-6 text-white">
                <h4 className="text-xl font-bold mb-4 hammersmith-style">{translations.contact.companyDetails}</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">GSTIN:</span>
                    <span>33AAVFJ3928K1ZT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{translations.contact.registration}:</span>
                    <span>LLP Registered</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{translations.contact.founder}:</span>
                    <span>Mr. Jaganath Thangamani</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{translations.contact.experience}:</span>
                    <span>23+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{translations.contact.countries}:</span>
                    <span>India, Malaysia, Saudi Arabia</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-6 bg-white text-[#f89421] hover:bg-gray-100 hammersmith-style"
                  onClick={handleBrochureDownload}
                >
                  <Download className="w-4 h-4 mr-2" />
                  {translations.contact.downloadCompanyBrochure}
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl border-0">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-t-lg">
                  <CardTitle className="text-2xl text-[#616a71] hammersmith-style">
                    {translations.contact.sendMessage}
                  </CardTitle>
                  <CardDescription className="text-[#616a71]">{translations.contact.fillOutForm}</CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-[#616a71] mb-2 block">
                          {translations.contact.firstName} *
                        </label>
                        <Input
                          placeholder="John"
                          className="border-gray-300 focus:border-[#f89421] focus:ring-[#f89421] h-12"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#616a71] mb-2 block">
                          {translations.contact.lastName} *
                        </label>
                        <Input
                          placeholder="Doe"
                          className="border-gray-300 focus:border-[#f89421] focus:ring-[#f89421] h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-[#616a71] mb-2 block">
                          {translations.contact.emailAddress} *
                        </label>
                        <Input
                          type="email"
                          placeholder="john@company.com"
                          className="border-gray-300 focus:border-[#f89421] focus:ring-[#f89421] h-12"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#616a71] mb-2 block">
                          {translations.contact.phoneNumber}
                        </label>
                        <Input
                          placeholder="+91 9876543210"
                          className="border-gray-300 focus:border-[#f89421] focus:ring-[#f89421] h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-[#616a71] mb-2 block">
                        {translations.contact.companyName} *
                      </label>
                      <Input
                        placeholder="Your Company Name"
                        className="border-gray-300 focus:border-[#f89421] focus:ring-[#f89421] h-12"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-[#616a71] mb-2 block">
                        {translations.contact.projectType}
                      </label>
                      <select className="w-full h-12 border border-gray-300 rounded-md px-3 focus:border-[#f89421] focus:ring-[#f89421]">
                        <option value="">{translations.contact.selectProjectType}</option>
                        <option value="bridge-erection">{translations.contact.bridgeErection}</option>
                        <option value="heavy-lifting">{translations.contact.heavyLifting}</option>
                        <option value="lg-operations">LG Operations</option>
                        <option value="steel-structures">{translations.contact.steelStructures}</option>
                        <option value="consulting">{translations.contact.technicalConsulting}</option>
                        <option value="other">{translations.contact.other}</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-[#616a71] mb-2 block">
                        {translations.contact.projectDetails} *
                      </label>
                      <Textarea
                        placeholder={translations.contact.provideDetailedInfo}
                        rows={6}
                        className="border-gray-300 focus:border-[#f89421] focus:ring-[#f89421]"
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="terms" className="rounded border-gray-300" />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        {translations.contact.agreeToTerms}
                      </label>
                    </div>

                    <Button className="w-full bg-[#f89421] hover:bg-[#e8851e] text-white hammersmith-style py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                      {translations.contact.sendMessage}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Unique Contact Options */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-[#616a71] mb-8 text-center hammersmith-style">
              {translations.contact.connectWithUs}
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Call Us - Unique Design */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#616a71] to-[#4a5258] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-200 group-hover:border-gray-400 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#616a71] to-[#4a5258] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#616a71] hammersmith-style mb-2">
                      {translations.contact.callUsNow}
                    </h4>
                    <p className="text-gray-600 mb-6">{translations.contact.speakDirectly}</p>
                    <a
                      href="tel:+919445071399"
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#616a71] to-[#4a5258] text-white font-bold py-4 px-6 rounded-xl hover:from-[#4a5258] hover:to-[#3a424a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <Phone className="w-5 h-5 mr-3" />
                      +91 94450713399
                    </a>
                    <p className="text-xs text-gray-500 mt-3">{translations.contact.availableForEmergencies}</p>
                  </div>
                </div>
              </div>

              {/* Email Us - Unique Design */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f89421] to-[#e8851e] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 border-2 border-orange-200 group-hover:border-orange-400 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#f89421] to-[#e8851e] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#616a71] hammersmith-style mb-2">
                      {translations.contact.emailUs}
                    </h4>
                    <p className="text-gray-600 mb-6">{translations.contact.getDetailedProposals}</p>
                    <a
                      href="mailto:info@jspecindia.com?subject=Project Inquiry - JSPEC INDIA&body=Hello JSPEC INDIA Team,%0D%0A%0D%0AI am interested in your bridge construction and heavy lifting services. Please provide more information about:%0D%0A%0D%0A- Project type:%0D%0A- Location:%0D%0A- Timeline:%0D%0A- Specific requirements:%0D%0A%0D%0AThank you."
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#f89421] to-[#e8851e] text-white font-bold py-4 px-6 rounded-xl hover:from-[#e8851e] hover:to-[#d77a1a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <Mail className="w-5 h-5 mr-3" />
                      info@jspecindia.com
                    </a>
                    <p className="text-xs text-gray-500 mt-3">{translations.contact.responseGuaranteed}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Contact Methods */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-2xl p-8 max-w-2xl mx-auto">
                <h4 className="text-xl font-bold text-[#616a71] hammersmith-style mb-4">
                  {translations.contact.preferOtherWays}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <Globe className="w-6 h-6 text-[#f89421]" />
                    <div>
                      <p className="font-semibold text-[#616a71]">{translations.contact.visitOurWebsite}</p>
                      <a
                        href="https://www.jspecindia.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        www.jspecindia.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <Download className="w-6 h-6 text-[#f89421]" />
                    <div>
                      <p className="font-semibold text-[#616a71]">{translations.contact.companyBrochure}</p>
                      <button onClick={handleBrochureDownload} className="text-sm text-blue-600 hover:underline">
                        {translations.contact.downloadPdf}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#616a71] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <Image
                src="/jspec-logo.png"
                alt="JSPEC INDIA Logo"
                width={200}
                height={80}
                className="h-16 w-auto brightness-0 invert"
              />
              <p className="text-gray-300 leading-relaxed">{translations.footer.leadingSpecialized}</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-[#f89421] rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-[#f89421] rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-[#f89421] rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 hammersmith-style">{translations.footer.services}</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-[#f89421] transition-colors cursor-pointer">
                  {translations.footer.bridgeEquipment}
                </li>
                <li className="hover:text-[#f89421] transition-colors cursor-pointer">
                  {translations.footer.temporaryStructure}
                </li>
                <li className="hover:text-[#f89421] transition-colors cursor-pointer">
                  {translations.footer.heavyStructureErection}
                </li>
                <li className="hover:text-[#f89421] transition-colors cursor-pointer">LG Operations</li>
                <li className="hover:text-[#f89421] transition-colors cursor-pointer">
                  {translations.footer.technicalConsulting}
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 hammersmith-style">{translations.footer.quickLinks}</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="#about" className="hover:text-[#f89421] transition-colors">
                    {translations.footer.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-[#f89421] transition-colors">
                    {translations.footer.ourServices}
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-[#f89421] transition-colors">
                    {translations.footer.projects}
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-[#f89421] transition-colors">
                    {translations.footer.contact}
                  </Link>
                </li>
                <li className="hover:text-[#f89421] transition-colors cursor-pointer">{translations.footer.careers}</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 hammersmith-style">{translations.footer.contactInfo}</h4>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-[#f89421]" /> +91 9445071399
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-[#f89421]" /> info@jspecindia.com
                </p>
                <p className="flex items-center">
                  <Globe className="w-4 h-4 mr-2 text-[#f89421]" /> www.jspecindia.com
                </p>
                <p className="text-sm">GSTIN: 33AAVFJ3928K1ZT</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-center md:text-left">
                &copy; {new Date().getFullYear()} JSPEC INDIA. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-gray-300 hover:text-[#f89421] transition-colors text-sm">
                  {translations.footer.privacyPolicy}
                </Link>
                <Link href="#" className="text-gray-300 hover:text-[#f89421] transition-colors text-sm">
                  {translations.footer.termsOfService}
                </Link>
                <Link href="#" className="text-gray-300 hover:text-[#f89421] transition-colors text-sm">
                  {translations.footer.safetyPolicy}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <VideoModal isOpen={isVideoModalOpen} onClose={closeVideoModal} videoUrl={""} title={""} />
    </div>
  )
}
