import React, {useState} from 'react'
import '../style/Services_body.css'

const Services_body = () => {
  
  const [modal, setModal]=useState(false);
  
  const toggleModal = () => {
    setModal(!modal)
  }

  const [modal1, setModal1]=useState(false);
  
  const toggleModal1 = () => {
    setModal1(!modal1)
  }

  return (
    <div className='body_services'>
        <div className='cards'>
            <span className='program'>PROGRAMA<br/></span>
            <span className='program space'>OBJETIVO<br/></span>               
            <span className='personalized space'>PERSONALIZADO<br/></span>
            <span className='brain space'>BRAIN POWER<br/></span>
            <span className='plam space'>PLAN MENSUAL<br/></span>
            <span className='price'>$120.000</span>
            <button onClick={toggleModal} className='btn-modal space'>mas información</button>
        </div>
        <div className='cards'>
            <span className='program'>PROGRAMA<br/></span>
            <span className='program space'>OBJETIVO<br/></span>               
            <span className='personalized space'>ESTANDAR<br/></span>
            <span className='brain space'>BRAIN POWER<br/></span>
            <span className='plam space'>PLAN MENSUAL<br/></span>
            <span className='price'>$40.000</span>
            <button onClick={toggleModal1} className='btn-modal space'>mas información</button>
        </div>
        <div className='cards'>               
            <span className='personalized space'>ESTANDAR<br/></span>
            <span className='brain space'>BRAIN POWER<br/></span>
            <span className='program'>ORIENTACION POR PARTE</span>
            <span className='program space'>DE LOS INSTRUCTORES</span>
            <span className='plam space'>PLAN DIARIO<br/></span>
            <span className='price'>$4.000</span>
        </div>

        {modal && (
            <div className='modal'>
            <div onClick={toggleModal} className='overlay'></div>
            <div className='modal-content'>
                <span className='program'>PROGRAMA OBJETIVO<br/></span>               
                <span className='service-personalized space'>SERVICIO PERSONALIZADO<br/></span>
                <span className='brain space'>BRAIN POWER<br/></span>
                <span className='plam space'>PLAN MENSUAL<br/></span>
                <ul>
                    <li>Valoración de composición corporal</li>
                    <li>Valoración de composición corporal</li>
                    <li>Valoración de movilidad articular</li>
                    <li>Test de aptitudes físicas</li>
                    <li>Control de seguimiento de cargas de entrenamiento</li>
                    <li>Control de seguimiento orientación nutricional</li>
                    <li>Guía de calidad del sueño</li>
                </ul>
                <span className='price'>$120.000</span>
                <button className='close-modal' onClick={toggleModal}>cerrar</button>
            </div>
        </div>
        )}

        {modal1 && (
            <div className='modal'>
            <div onClick={toggleModal1} className='overlay'></div>
            <div className='modal-content'>
                <span className='program'>PROGRAMA OBJETIVO<br/></span>               
                <span className='service-personalized space'>SERVICIO PERSONALIZADO<br/></span>
                <span className='brain space'>BRAIN POWER<br/></span>
                <span className='plam space'>PLAN MENSUAL<br/></span>
                <ul>
                    <li>Entrevista de expectativas</li>
                    <li>Orientación técnica de los ejercicios por parte de los intructores</li>
                    <li>Orientación nutricional</li>
                    <li>Valoración de la composición corporal</li>
                    <li>Kit de bienvenida</li>
                    <li>Sesiones de aeróbicos</li>
                </ul>
                <span className='price'>$40.000</span>
                <button className='close-modal' onClick={toggleModal1}>cerrar</button>
            </div>
        </div>
        )}
        
    </div>
  )
}

export default Services_body