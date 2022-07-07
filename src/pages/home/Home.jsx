import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured';
import "./home.css"
import PropertyList from '../../components/propertyList/PropertyList';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className='homeTitle'>Browse By Property Type</h1>
          <PropertyList/>
      </div>
    </div>
  )
}

export default Home