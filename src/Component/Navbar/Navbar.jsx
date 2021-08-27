import React, { useState } from 'react';
import {ReactComponent as Logo}  from "../../assets/logo.svg"
import { ReactComponent as CloseIcon } from '../../assets/close-menu.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu-icon.svg';
import{ ReactComponent as TelegramWhite} from "../../assets/TelegramWhite.svg";
import{ ReactComponent as TwitterWhite} from "../../assets/TwitterWhite.svg";
import {ReactComponent as InstagramW} from "../../assets/InstagramW.svg";
import "../Navbar/Navbar.css"
import styled from 'styled-components';
let url = ""
//Creating the nav-bar Section  import the logo from the assets file 
export default function Navbar() {
    const [click , setClick] = useState(false);
     const handleClick = () => setClick(!click);
     const closeMobileMenu = () => setClick(false);
    const [open , setOpen ] =useState(false);
    
  
    return (
        <div id = "navbar" className = "nav-header">
          <div className = "logo-wrapper">
             <div className = "logo-container">
            <a href = '#home'>

            <Logo className = "logo" style = {{width :'50px',  marginLeft :'10px',padding:'5px'}}/>
                    <p>NFTMasters Token</p>
                  </a>
        </div>
 
        <ul className = {click ? 'nav-options active' : 'nav-options'}>
             <li className = "option" onClick={closeMobileMenu}>
                <a href = '#About'>About</a>
             </li>

             <li className = "option" onClick={closeMobileMenu}>
                <a href='#why'>Why</a>
                 </li>

                 <li className = "option" onClick={closeMobileMenu}>
                    <a href={url}>Token Sale</a>
                 </li>

                 <li className = "option" onClick={closeMobileMenu}>
                 <a href={url}>Smart Contract</a> 
                 </li>

                 <li className = "option" onClick={closeMobileMenu}>
                 <a href={url} className = "topSocial" onClick = {()=>setOpen(!open)}>Social Media</a>
                 {/*Dropdown bar goes here*/}
                  
                 </li>
        </ul>
        </div>
        <div className="mobile-menu" >
        {click ?(
          <CloseIcon/>

        ) : (
          <MenuIcon/>
        )}
        </div>
        </div>
    )
}
export const Wrapper = styled.div`
  width: 100%;
  height: ;
  background-color:red;
`;