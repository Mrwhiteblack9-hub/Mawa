import '../globals.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getDictionary } from '../../dictionaries'

export const metadata = {
  title: 'MAWA — The Serious Meme Revolution',
  description: 'MAWA — A serious memecoin with a crocodile mascot, premium branding, and a strong community.'
}

export default async function RootLayout({ children, params }) {
<<<<<<< HEAD
  const dict = await getDictionary(params.lang);
=======
  const dict = await getDictionary(params.lang)
>>>>>>> 1ddba00 (Initial commit of the complete MAWA website)
  return (
    <html lang={params.lang}>
      <body>
        <Header lang={params.lang} nav={dict.nav} buy_url={dict.buy_url} />
<<<<<<< HEAD
        <main className="min-h-screen">
          {children}
        </main>
=======
        <main className="min-h-screen">{children}</main>
>>>>>>> 1ddba00 (Initial commit of the complete MAWA website)
        <Footer />
      </body>
    </html>
  )
}
