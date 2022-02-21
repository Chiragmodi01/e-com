import React from 'react'
import Header from '../../Comps/Header/Header'
import Footer from '../../Comps/Footer/Footer'
import Boutique from '../../Comps/HomePage/Boutique'
import HallOfFame from '../../Comps/HomePage/HallOfFame'
import Hero from '../../Comps/HomePage/Hero'
import NewCategories from '../../Comps/HomePage/NewCatagories'
import TrendingHer from '../../Comps/HomePage/TrendingHer'
import TrendingHim from '../../Comps/HomePage/TrendingHim'

function HomePage() {
  return (
    <main>
        <div className="homePage">
            <Header />
            <Hero />
            <TrendingHer />
            <TrendingHim />
            <NewCategories />
            <Boutique />
            <HallOfFame />
            <Footer />
        </div>
    </main>
  )
}

export default HomePage