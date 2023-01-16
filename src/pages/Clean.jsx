import React from 'react'
import Clean_body from '../components/Clean_body'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Opc_proteins_l from '../components/Opc_proteins_l'

const Clean = () => {
  return (
    <div>
        <Header/>
        <Opc_proteins_l/>
        <Clean_body/>
        <Footer/>
    </div>
  )
}

export default Clean