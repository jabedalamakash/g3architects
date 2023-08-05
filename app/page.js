
import Hero from './Components/Hero'
import Gallery from './Components/Gallery'
import Footer from './Components/Footer'
import Sponsor from './Components/Sponsor'
import Statistics from './Components/Statistics'
import Feature from './Components/Feature'

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Hero/>
        <Gallery/>
        <Feature/>

        <Statistics/>
        <Sponsor/>
        <Footer/>
      </div>
    </main>
  )
}
