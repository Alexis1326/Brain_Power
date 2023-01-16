import React from 'react'
import '../style/Option_body.css'

const Option_body = () => {
  return (
    <div className='contents'>
      <span className='text-service'>SERVICIOS</span>
      <div className='img-services'>
        <img className='image-service' src='./src/image/Servicios.jpg'></img>
      </div>
      <span className='text-service'>PROTEINAS</span>
      <div className='img-services'>
        <img className='image-service' src='./src/image/Proteins.png'></img>
      </div>
    </div>
  )
}

export default Option_body