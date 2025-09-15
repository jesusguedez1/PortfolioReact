import React, { useState } from 'react'
import "../style/contact.css"

function Contact() {
  
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [message, setMessage] = useState("");

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
              <li><img src="/Image/iconLinkedinBlue.png" alt="" />Mi perfil linkedin</li>
              <li><img src="/Image/iconDiscordBlue.png" alt="" />Contactame por discord</li>
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
            <div className="title-and-subtitle-Form-3223">
              <h2>Trabajemos juntos!<img src="/Image/iconCoheteContact.png" alt="" /></h2>
              <p>Envíame un mensaje y lo atenderé por WhatsApp.</p>
            </div>
            <div className="inputsOne-32432">
              <div className="fila">
                <div className="campo">
                  <label htmlFor="nombre" className={`labelText ${nombre ? 'up' : 'bellow'}`}>
                    Nombre
                  </label>
                  <input 
                    type="text" 
                    id="nombre"
                    className='inputText-999' 
                    required
                    value={nombre}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNombre(e.target.value)} 
                  />
                </div>

                <div className="campo">
                  <label htmlFor="telefono" className={`labelText ${telefono ? 'up' : 'bellow'}`}>
                    Número de Teléfono
                  </label>
                  <input 
                    type="number" 
                    id="telefono"
                    className='inputText-999' 
                    required
                    value={telefono}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTelefono(e.target.value)} 
                  />
                </div>
              </div>

              <div className="fila">
                <div className="campo">
                  <label htmlFor="email" className={`labelText ${email ? 'up' : 'bellow'}`}>
                    Email
                  </label>
                  <input 
                    type="email"
                    id="email"
                    className='inputText-999' 
                    required
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
                  />
                </div>

                <div className="campo">
                  <label htmlFor="empresa" className={`labelText ${empresa ? 'up' : 'bellow'}`}>
                    Empresa
                  </label>
                  <input 
                    type="text" 
                    id="empresa"
                    className='inputText-999' 
                    required
                    value={empresa}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmpresa(e.target.value)} 
                  />
                </div>
              </div>
            </div>

            <div className="inputsTwo-123123">
              <div className="campoTaxt"> 
                <label htmlFor="mensaje" className={` ${message ? 'upP' : 'bellowW'}`}>
                  Mensaje
                </label>
                <textarea  
                  id="mensaje"
                  className='textArea-123123'
                  maxLength={250}
                  required 
                  value={message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}>
                </textarea>
              </div>

              <button className='submitButton'>
                Enviar <img src="" alt="" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact