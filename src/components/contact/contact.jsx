import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const options = [
    {
        id: 1,
        icon: <AiOutlineMail className='contact__option-icon'></AiOutlineMail>,
        type: "Email", 
        text: "loganihrishi@gmail.com", 
        link: "mailto:loganihrishi@gmail.com"
    }, 
    {
        id: 2,
        icon: <BsLinkedin className='contact__option-icon'></BsLinkedin>,
        type: "Linkedin", 
        text: null, 
        link: "https://www.linkedin.com/in/loganihrishi"
    }, 
    {
        id: 3, 
        icon: <BsInstagram className='contact__option-icon'></BsInstagram>, 
        type: null,
        text: "logani.hrishi", 
        link: "https://www.instagram.com/logani.hrishi"
    }
]

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_e4vndvv', 'template_qzc2m5i', form.current, 'MkwXOWy9-Er4LrpXq')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
      };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                {
                    options.map(({id, icon, type, text, link}) => {
                        return (
                            <article className='contact__option'>
                                {icon}
                                <h4>{type}</h4>
                                <h5>{text}</h5>
                                <a href={link} target='_blank'> Send a Message</a>
                            </article>
                        )
                    })
                }
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='John Doe' required>
                    </input>
                    <input type = 'email' name='email' placeholder='johndoe@gmail.com' required></input>
                    <textarea name='message' rows="7" placeholder='Draft Your Message' required></textarea>
                    <button id='submitButton' type='submit' className='btn btn-primary'> Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;