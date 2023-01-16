import React from 'react'
import '../style/Clean_body.css'

const Clean_body = () => {
  return (
    <div className='contents-clean'>
        <div className='product-clean'>
          <img className='clean1' src='../src/image/Limpia 1.jpeg' width={200}></img>
          <span className='text-clean'>PROTON WHEY<br/>Sabor: Chocolate<br/>$150.000</span>
          <button className='btn-buy'>Comprar</button>
          <img className='clean1'src='../src/image/Limpia 2.jpeg' width={200}></img>
          <span className='text-clean'>WHEY PURE<br/>Sabor: Chocolate<br/>$150.000</span>
          <button className='btn-buy'>Comprar</button>
          <img className='clean1'src='../src/image/Limpia 3.jpeg' width={200}></img>
          <span className='text-clean'>BEST PROTEIN<br/>Sabor: Chocolate<br/>$150.000</span>
          <button className='btn-buy'>Comprar</button>
          <img className='clean1'src='../src/image/Limpia 4.jpeg' width={200}></img>
          <span className='text-clean'>GOLD STANDARD WHEY<br/>Sabor: Chocolate<br/>$300.000</span>
          <button className='btn-buy'>Comprar</button>
          <img className='clean1'src='../src/image/Limpia 5.jpeg' width={200}></img>  
          <span className='text-clean'>BI-PRO CLASSIC<br/>$150.000</span>
          <button className='btn-buy'>Comprar</button>
        </div>
    </div>
  )
}

export default Clean_body