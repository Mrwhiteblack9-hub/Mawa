export default function Footer(){
  return (
    <footer className="w-full border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
        <div>© {new Date().getFullYear()} MAWA — Not financial advice</div>
        <div className="flex gap-4">
          <a href="https://x.com/Mawathecroco?t=wsu9i2sYkDof5NMHoioXMw&s=09" className="hover:underline">Twitter</a>
          <a href="https://t.me/mawasolana" className="hover:underline">Telegram</a>
          <a href="#" className="hover:underline">Discord</a>
        </div>
      </div>
    </footer>
  )
}
