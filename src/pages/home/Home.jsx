import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Header } from '../../components/header/Header';
import "./Home.css";
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import { FeaturedProperties } from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Lorem Ipsum is simply dummy </h1>
        <PropertyList/>
        <h1 className="homeTitle">Lorem Ipsum is simply dummy </h1>
        <FeaturedProperties/>
        <MailList></MailList>
        <Footer></Footer>


      </div>
      
    </div>
  )
}

export default Home
