"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe, ChevronDown } from "lucide-react"
import { type Locale, locales } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLocale: Locale
  onLocaleChange: (locale: Locale) => void
}

const languageNames = {
  en: "English",
  ar: "العربية",
  fr: "Français",
}

const languageFlags = {
  en: "🇺🇸",
  ar: "🇸🇦",
  fr: "🇫🇷",
}

export default function LanguageSwitcher({ currentLocale, onLocaleChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className="flex items-center space-x-2 text-[#616a71] hover:text-[#f89421]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">
          {languageFlags[currentLocale]} {languageNames[currentLocale]}
        </span>
        <span className="sm:hidden">{languageFlags[currentLocale]}</span>
        <ChevronDown className="w-4 h-4" />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[150px]">
          {locales.map((locale) => (
            <button
              key={locale}
              className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-2 ${
                locale === currentLocale ? "bg-[#f89421]/10 text-[#f89421]" : "text-[#616a71]"
              } ${locale === locales[0] ? "rounded-t-lg" : ""} ${locale === locales[locales.length - 1] ? "rounded-b-lg" : ""}`}
              onClick={() => {
                onLocaleChange(locale)
                setIsOpen(false)
              }}
            >
              <span>{languageFlags[locale]}</span>
              <span>{languageNames[locale]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
