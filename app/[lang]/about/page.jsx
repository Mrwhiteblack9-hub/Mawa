export default function About(){
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold">About MAWA</h2>
       <div className="mt-6 grid lg:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p className="mt-3 text-white/80">To create a memecoin that combines a strong identity, clean execution, and a sustainable community.</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Commitments</h3>
          <ul className="mt-3 text-white/80 list-disc pl-5">
            <li>Transparency</li>
            <li>Regular communication</li>
            <li>Publicly accessible roadmap</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
