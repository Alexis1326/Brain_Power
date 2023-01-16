import React from 'react'
import '../style/Start.css'

const Start = () => {
  return (
    <div className='page'>
        <header className='tittle'>
            <h1>BRAIN POWER</h1>
        </header>
        <section>
          <div className='logo'>
            <img src= "./src/image/logo.png" width={400} height={450}/>
          </div>
          <div className='tittle-2'>
            <span>FUERZA DE VOLUNTAD</span>
          </div>
          <div className='text'>
            <p>encuentra productos como proteínas y suplementos, así mismo diferentes tipos de servicios</p>
          </div>
          <div className='buttom-start'>
            <button className='buttom-st'>
              <span class="box">
                INICIAR
              </span>
            </button>
          </div>
          <footer className='footer'>
          </footer>
        </section>
    </div>
  )
}

export default Start

