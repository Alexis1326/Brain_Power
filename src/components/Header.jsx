import React from 'react'
import '../style/Header.css'

const Header = () => {
  return (
    <div>
        <header className='head'>
          <img className='img-logo' src='./src/image/Logo sin letras.png' width={100} height={90}/>
          <span className='name-gym'>BRAIN POWER</span>
          <hr className='line'></hr>
          <i class="fa fa-4x fa-cart-plus" aria-hidden="true"></i>
        </header>
    </div>
  )
}

export default Header