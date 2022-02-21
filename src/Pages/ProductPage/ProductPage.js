import React from 'react'
import Header from '../../Comps/Header/Header'
import CollectionHeader from '../../Comps/ProductPage/CollectionHeader'
import Footer from '../../Comps/Footer/Footer'
import Filters from '../../Comps/ProductPage/Filters'
import Products from '../../Comps/ProductPage/Products'
import LoadMore from '../../Comps/ProductPage/LoadMore'

function HomePage() {
  return (
    <main>
        <div className="ProductPage">
            <Header />
            <CollectionHeader />
            <Filters/>
            <Products />
            <LoadMore />
            <Footer />
        </div>
    </main>
  )
}

export default HomePage