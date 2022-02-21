import React from 'react';
import WishlistProducts from '../../Comps/WishlistPage/WishlistProducts';
import Header from '../../Comps/Header/Header';
import Footer from '../../Comps/Footer/Footer';

function WishlistPage() {
  return (
  <main className="WishlistPage">
    <Header />
    <WishlistProducts />
    <Footer />
  </main>
  )
}

export default WishlistPage