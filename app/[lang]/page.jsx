import Hero from '../../components/Hero'
import { getDictionary } from '../../dictionaries'

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang)
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Hero lang={lang} dict={dict} />
      <section className="mt-12 grid lg:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-2xl font-bold">{dict.home.vision_title}</h3>
          <p className="mt-3 text-white/80">{dict.home.vision_text}</p>
        </div>
        <div className="card">
          <h3 className="text-2xl font-bold">{dict.home.highlights_title}</h3>
          <ul className="mt-3 list-disc pl-5 text-white/80">
            <li>{dict.home.supply}</li>
            <li>{dict.home.lp_lock}</li>
            <li>{dict.home.tax}</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
