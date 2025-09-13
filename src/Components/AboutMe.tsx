import React from 'react'
import "../style/aboutMe.css";

function AboutMe() {
  return (
    <section className='aboutMe-12345'>
      <div className="title-AboutMe-67126">
        <h4>Sobre Mi!</h4>
      </div>
      <div className="containerInformationGeneral-732747">
      <div className="picture-photos-aboutMe-812732">
        <div className="photos-aboutMe-container-1">
          <div className="containerCoheteImg-23"><img id='coheteGif-328823' src="/Image/iconCohete.gif" alt="" /></div>
          <img src="/Picture/MeKitchen.jpg" alt="" className="photo-1-878273" />
        </div>
        <div className="photos-aboutMe-container-2">
          <img src="/Picture/MePc.jpeg" alt="" className="photo-2-32324" />
          <div className="container-informationAboutExperience-323232">
            <h3><span>+2</span> años</h3>
            <h4>Estudiando</h4>
            <h5>Desarrollo Front-End</h5>
          </div>
        </div>
      </div>

      <div className="information-aboutMe-container-36326">
          <h3>De la Cocina Profesional al Código:</h3>
          <h4><span className='spanTitle'>Programador Front-End </span>con sabor creativo</h4>
          <p>Antes de escribir líneas de código, mi día a día transcurría entre fogones y recetas,
             trabajando como cocinero profesional durante varios años. Esa experiencia me enseñó disciplina, atención al detalle y creatividad,
            cualidades que ahora aplico en el desarrollo Front-End. Hoy, combino la precisión técnica con un toque de ingenio para crear interfaces funcionales,
            atractivas y bien estructuradas.</p>
            <button onClick={()=>{ window.open("https://jesusguedez1.github.io/PortfolioJesusGuedez/index.html", "_blank")}}>Mi pasado en la cocina <img src="/Image/iconSarten.png" alt="" /></button>
      </div>
      </div>

      <section className='containerGlobal-techStack-122443'>
      <div className="stack-technology-6236632">

        <div className="stackFilled-3223">
          <div className='titleStackFilled-323235'><h4>Mi Stack</h4></div>
        </div>

        <div className="container-divider-stack">
        <div className="cardTech-individual">
          <h4>HTML5</h4>
          <img src="/Image/iconHtml.png" alt="" />
          <p>Intermedio</p>
        </div>
        <div className="cardTech-individual">
          <h4>CSS3</h4>
          <img src="/Image/iconsCss.png" alt="" />
          <p>Intermedio</p>
        </div>
        <div className="cardTech-individual">
          <h4>JavaScript</h4>
          <img src="/Image/iconJavaScript.png" alt="" />
          <p>Intermedio</p>
        </div>
        <div className="cardTech-individual">
          <h4>TypeScript</h4>
          <img src="/Image/iconTypeScript.png" alt="" />
          <p>Basico</p>
        </div>
        <div className="cardTech-individual">
          <h4>ReactJS</h4>
          <img src="/Image/iconReact.png" alt="" />
          <p>Basico</p>
        </div>
        <div className="cardTech-individual">
          <h4>Git</h4>
          <img src="/Image/iconGit.png" alt="" />
          <p>Basico</p>
        </div>
        </div>
      </div>



      <div className='stack-in-progress-3232'>
        <div className='title-ProgressTech-3234'>
          <h4>Aprendiendo!</h4>
        </div>

          <div className="container-divider-stack">
          <div className="stackProgress-cardIndividual-21231">
            <h4>Python</h4>
            <img src="/Image/iconPython.png" alt="" />
            <p>En progreso</p>
          </div>
          <div className="stackProgress-cardIndividual-21231">
            <h4>FastApi</h4>
            <img src="/Image/iconFastAPI.png" alt="" />
            <p>Iniciando</p>
          </div>
          <div className="stackProgress-cardIndividual-21231">
            <h4>Tailwind</h4>
            <img src="/Image/iconTailwind.png" alt="" />
            <p>En progreso</p>
          </div>
          <div className="stackProgress-cardIndividual-21231">
            <h4>English</h4>
            <h1 className='Level-english-1323'>A2</h1>
            <p>Iniciando</p>
          </div>
        </div>

      </div>
      </section>
    </section>  
  )
}

export default AboutMe
