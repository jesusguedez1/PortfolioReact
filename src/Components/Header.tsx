import React from 'react'
import "../style/header.css";
import { useState } from 'react';

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [ArrowMove, setArrowMove] = useState(false);

  const handleResize = () => {
    setIsOpen(!isOpen);
    setIsMobile(!isMobile);
  }
  const handleArrowMove = () => {
    setArrowMove(!ArrowMove);
    setTimeout(()=>{
      setArrowMove(false);
    },1000)
    
  }

  return (
    <div className='header-Container-723238723'>
      <nav className='navBar-navegation-75623' >
        <div className="containerNavbar-contolledSpaceBox-677232">
          
          <img className='imgLogo2-7218' src="/Image/MyLogo.png" alt="" />

        <div className="sections-menuNavegation-32234678">
          <img className='imgLogo-7218' src="/Image/MyLogo.png" alt="" />
          <ul className='ul-MenuNavegation-898989'>
            <li><img src="/Image/iconHome.png" alt="Imagen de inicio" /><h4>Inicio</h4></li>
            <li><img src="/Image/iconExperience.png" alt="" /><h4>Experiencia</h4></li>
            <li><img src="/Image/iconProyectos.png" alt="" /><h4>Proyectos</h4></li>
            <li><img src="/Image/iconAboutMe.png" alt="" /><h4>Sobre Mi</h4></li>
          </ul>
          <h3 className='contact-h3-2372378'><img src="/Image/iconsContact.png" alt="" />Contacto </h3>
        </div>

        <div className='dropdown-menu-1227877' onClick={handleResize}>
            <ul className='ul-1227877' style={{paddingBottom:  isOpen ? '0' : '15px',
             paddingLeft: isOpen ? '13px' : '0px',
             backgroundColor: isOpen ? '#dd0000' : '#04143d'}}>
              <li className="lineDropdown-1" style={{transform: isOpen ? 'rotateZ(60deg)' : 'rotate(0deg)'}} ><img src="/Image/iconLineaHorizontal.png" alt="" /></li>
              <li className="lineDropdown-2" style={{display: isOpen ? 'none' : 'flex'}}><img src="/Image/iconLineaHorizontal.png" alt="" /></li>
              <li className="lineDropdown-3" style={{transform: isOpen ? 'rotateZ(120deg)' : 'rotate(0deg)'}}><img src="/Image/iconLineaHorizontal.png" alt="" /></li>
            </ul>
        </div>
          </div>
      </nav>
      
      <section className='principalContainer-78789'>
        <div className="section-container-secundaryInformation-7328">

        <div className="profilePicture-container-74728">
          <div className="containerInformation-animation-6737283">    
            <h3>Hola, mi nombre es</h3>
            <h2>Jesus Alberto Guedez</h2>
            <h1>Programador Front-End Junior</h1>
            <p>Disfruto el reto de dar vida a interfaces que no solo se vean bien, sino que realmente funcionen para las personas. Para mí, el desarrollo Front-End es un punto de encuentro entre la creatividad y la lógica, donde cada línea de código y cada detalle de diseño cuentan para construir experiencias web claras, rápidas y agradables de usar. Soy desarrollador Front-End junior, con poca experiencia profesional pero con gran capacidad de adaptación, aprendiendo y practicando cada día para seguir creciendo y mejorar en mi trabajo.</p>
              <div className='buttonHeader-565675688'>
              <button className='AboutMe-673738' onClick={handleArrowMove}>Descargar CV 
                  <div className="conatiner-download-823832">
                    <img className={`Arrow-animation-3232 ${ArrowMove ? "move" : ""}`} src="/Image/iconArrow.png" alt="" />
                  </div>
              </button>
                 <div className="socialNetwork-header-container-02738">
                  <button><img src="Image/iconLinkeding.png" alt="" /></button>
                  <button><img src="Image/iconGithHubNavBAr.png" alt="" /></button>
                  <button><img src="Image/iconDiscord.png" alt="" /></button>
                 </div>
              </div>
          </div>
        </div>

        <div className="containerOfAnimation-78238">
          <div className='circle-One-627373'></div>
            <img className='MePicture-photho-5636723' src="/Image/MeCyberpunk.jpg" alt="" />
          <div className="circle-two-6847893"></div>
        </div>

        

        </div>
          <div className="navBar-Porfolio-63823">
            <ul className="container-navbar-8934488" style={{transform: isMobile ? 'translateX(0px)' : 'translateX(235px)'}}>  
              <li><img src="/Image/iconHome.png" alt="" /><h5>Inicio</h5></li>
              <li><img src="/Image/iconExperience.png" alt="" /><h5>Experiencia</h5></li>
              <li><img src="/Image/iconProyectos.png" alt="" /><h5>Proyectos</h5></li>
              <li><img src="/Image/iconAboutMe.png" alt="" /><h5>Sobre mi</h5></li>
              <li><img src="/Image/iconsContact.png" alt="" /><h5>Contacto</h5></li>
            </ul>
        </div>
      </section>
    </div>
  )
}

export default Header
