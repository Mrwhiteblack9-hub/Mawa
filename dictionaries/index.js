import 'server-only'

const dictionaries = {
<<<<<<< HEAD
  en: () => import('./en.json').then((module) => module.default),
  fr: () => import('./fr.json').then((module) => module.default),
  zh: () => import('./zh.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()
=======
  en: () => import('./en.json').then((m) => m.default),
  fr: () => import('./fr.json').then((m) => m.default),
  zh: () => import('./zh.json').then((m) => m.default)
}
export const getDictionary = async (locale) => dictionaries[locale] ? dictionaries[locale]() : dictionaries.fr()
>>>>>>> 1ddba00 (Initial commit of the complete MAWA website)
