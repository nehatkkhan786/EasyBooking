import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured';
import "./home.css"
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperty from '../../components/featuredproperties/FeaturedProperty';
import MailList from '../../components/maillist/MailList';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className='homeTitle'>Browse By Property Type</h1>
          <PropertyList/>
          <h1 className='homeTitle'>Home Guests Love</h1>
          <FeaturedProperty/>
          <MailList/>
          <Footer/>
      </div>
    </div>
  )
}

export default Home