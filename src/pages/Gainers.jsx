import React from 'react'
import Footer from '../components/Footer'
import Gainers_body from '../components/Gainers_body'
import Header from '../components/Header'
import Opc_proteins_g from '../components/Opc_proteins_g'

const Gainers = () => {
  return (
    <div>
        <Header/>
        <Opc_proteins_g/>
        <Gainers_body/>
        <Footer/>
    </div>
  )
}

export default Gainers