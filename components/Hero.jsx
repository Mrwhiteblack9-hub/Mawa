import Link from 'next/link';

export default function Hero({ lang, dict }){
  return (
    <section className="relative grid lg:grid-cols-5 gap-8 items-center">
      <div className="lg:col-span-3">
        <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 text-xs">{dict.hero.tag}</div>
        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold" dangerouslySetInnerHTML={{ __html: dict.hero.title.replace(/MAWA —/g, 'MAWA — <span class="text-[color:var(--mawa-blue)]">').replace(/,/g, '</span>,<span>') + '</span>' }} />
        <p className="mt-4 text-white/80 max-w-xl">{dict.hero.description}</p>
        <div className="mt-6 flex gap-3">
          <a href={dict.buy_url} target="_blank" rel="noopener noreferrer" className="btn-primary">{dict.nav.buy}</a>
          <Link href={`/${lang}/tokenomics`} className="px-5 py-2 rounded-2xl border border-white/10">{dict.hero.tokenomics_btn}</Link>
        </div>
        <div className="mt-4 text-xs text-white/60">{dict.hero.contract} : <span className="font-mono bg-white/5 px-2 py-1 rounded">SOON...</span></div>
      </div>

      <div className="lg:col-span-2 flex justify-center lg:justify-end">
        <img src="/banner.jpg" alt="MAWA Banner" className="rounded-2xl shadow-2xl w-full max-w-sm object-cover"/>
      </div>
    </section>
  )
}
