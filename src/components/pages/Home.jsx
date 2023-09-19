import React from 'react'
import Header from '../layout/Header'
import Banner from '../banner/Banner'
import Category from '../category/Category'
import Product from '../product/Product'
import FooterHome from '../layout/FooterHome'

const Home = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <Category/>
    <Product/>
    <FooterHome/>
    </>
  )
}

export default Home