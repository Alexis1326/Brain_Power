import React from 'react'
import '../style/Gainers_body.css'

const Gainers_body = () => {
  return (
    <div className='contents-gainers'>
        <div className='img-gainers'>
            <img className='img-prot' src='../src/image/Peso 1.jpeg'></img>
            <span className='information-gainers'>THE WHEY OF GAIN<br/>Sabor: Vainilla<br/></span>
            <span className='price-gainers'>$100.000</span>
            <button className='btn-buy'>COMPRAR</button>
        </div>
    </div>
  )
}

export default Gainers_body