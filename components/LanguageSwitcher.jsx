import Link from 'next/link'

export default function LanguageSwitcher({ currentLang }) {
  const languages = [
    { code: 'fr', name: '🇫🇷' },
    { code: 'en', name: '🇬🇧' },
<<<<<<< HEAD
    { code: 'zh', name: '🇨🇳' },
  ]

=======
    { code: 'zh', name: '🇨🇳' }
  ]
>>>>>>> 1ddba00 (Initial commit of the complete MAWA website)
  return (
    <div className="flex items-center gap-2 bg-mawa-card border border-white/10 rounded-full p-1">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={`/${lang.code}`}
          className={`w-8 h-8 rounded-full grid place-items-center text-sm transition-colors ${
<<<<<<< HEAD
            currentLang === lang.code ? 'bg-mawa-blue' : 'hover:bg-white/10'
=======
            currentLang === lang.code ? 'bg-mawa-blue text-black font-semibold' : 'hover:bg-white/10'
>>>>>>> 1ddba00 (Initial commit of the complete MAWA website)
          }`}
        >
          {lang.name}
        </Link>
      ))}
    </div>
  )
}
