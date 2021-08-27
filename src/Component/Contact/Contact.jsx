import React from 'react'
import "./Contact.css";
import { ReactComponent as TelegramBlack} from "../../assets/TelegramBlack.svg";
import   {ReactComponent as TwitterBlack }from "../../assets/TwitterBlack.svg";
import {ReactComponent as InstagramBlack} from "../../assets/InstagramBlack.svg";
import {ReactComponent as Contacts} from "../../assets/Contacts.svg";
import {ReactComponent as Email} from "../../assets/Email.svg";


export default function Contact() {

        
    return (
        <div className = "Contact" id= 'contact'>
           <div className = "Left">
           <div className = "textWrapper">
               <h2>Contact</h2>
               <h3>Get In Touch</h3>
               <p >Got any any questions?Reach out and we will get back to you shortly.</p>
              </div>
               <ul>
                  <li> <Email className = "logo" />
                  <p>info@nftmastertoken.com</p>
                  </li>
                  <li><TelegramBlack className = "logo"/>
                  <p style = {{color:'#de190b',fontWeight : 'bold'}}>Join us on Telegram</p>
                  </li>
                  <li style = {{color:'#de190b',fontWeight : 'bold'}}><TelegramBlack  className = "logo"/>
                  <p>Follow us on Telegram</p>
                  </li>
                  <li style = {{color:'#de190b', fontWeight : 'bold'}}><TwitterBlack  className = "logo"/>
                  <p>Follow us on Twitter</p>
                  </li>
                  <li style = {{color:'#de190b' ,fontWeight : 'bold'}}><InstagramBlack  className = "logo"/>
                  <p>Follow us on Instagram</p>
                  </li>
               </ul>
               
           </div>
           <div className = "Center">
               <input type= 'text' placeholder = 'Your Name'/>
               <input type= 'text' placeholder = 'Your Email'/>
               <textarea placeholder = "Your Message"></textarea>
               <button>Submit</button>
           </div>
           <div className = "Right">
           <Contacts className = "contact-svg"/>
           </div>
        </div>
    )
}
