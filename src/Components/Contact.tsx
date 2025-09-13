import React from 'react'
import "../style/contact.css"

function Contact() {
  return (
    <section className='globalSection-contact-3234234'>
      <div className="containerPrincipal-Contact-3474387">
        <div className="informationContact-234234">
            <div className="titileAndParagraph-contact-12321">
              <h1>Contactame<span>!</span></h1>
              <p>Puedes enviar un mensaje a través del del formulario,
                o enviando haciendo clic en algunas de mis redes sociales, 
                respondere tu mensaje lo antes posible.
              </p>
            </div>
            <div className="socialNetwork-contact-3543">
              <ul>
                <li> <img src="/Image/iconLinkedinBlue.png" alt="" />Mi perfil linkedin</li>
                <li> <img src="/Image/iconDiscordBlue.png" alt="" />Contactame por discord</li>
              </ul>
            </div>
            <div className="followUS-otherSocialNetwork-23432">
                <div className="titleFallowUS-2783327"><h2>Mis redes sociales</h2></div>
                <div className="networkFallowME-5456">
                  <img src="/Image/iconFacebook.png" alt="" />
                  <img src="/Image/iconInstagram.png" alt="" />
                  <img src="/Image/iconGmail.png" alt="" />
                  <img src="/Image/iconWhatsapp.png" alt="" />
                  <img src="/Image/iconGithHubNavBAr.png" alt="" />
                </div>
            </div> 
        </div>

        <div className="sectionFormGlobal-3214213">
          <form action="" className='formContainer-234'>
           <div className="inputsOne-32432">
            <div className="fila">
              <div className="campo">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" required />
              </div>
              <div className="campo">
                <label htmlFor="telefono">Número de Teléfono</label>
                <input type="number" id="telefono" required />
              </div>
            </div>
            <div className="fila">
              <div className="campo">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="campo">
                <label htmlFor="empresa">Empresa</label>
                <input type="text" id="empresa" required />
              </div>
            </div>
          </div>
            <div className="inputsTwo-123123">
              <div className="campoTaxt"> 
                <label htmlFor="">Mensaje</label>
                <textarea name="" id="" maxLength={250} placeholder='' required ></textarea>
              </div>
              <button className='submitButton'>Enviar <img src="" alt="" /></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
