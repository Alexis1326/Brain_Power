import React from 'react'
import '../style/supplements_body.css'

const Suplements_body = () => {
  return (
    <div className='content-supplements'>
        <div className='product-clean'>
          <img className='c1' src='../src/image/Suplemento 1.jpeg'></img>
          <span className='text-clean'>ATO MIC<br/>$100.000</span>
          <button className='btn-buy spc'>Comprar</button>
          <img className='c1'src='../src/image/Suplemento 2.jpeg'></img>
          <span className='text-clean'>CREATINE<br/>$120.000</span>
          <button className='btn-buy'>Comprar</button>
        </div>
    </div>
  )
}

export default Suplements_body