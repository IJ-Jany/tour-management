import React from 'react'
import Header from './../header'
import Footer from './../footer'
import Router from '../../router/Routers'

const layout = () => {
  return (
   <>
    <Header/>
    <Footer/>
    <Router/>
   </>
  )
}

export default layout