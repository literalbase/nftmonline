import React from 'react'
import {ReactComponent as Logo}  from "../../assets/logo.svg"
import{ ReactComponent as TelegramWhite} from "../../assets/TelegramWhite.svg";
import{ ReactComponent as TwitterWhite} from "../../assets/TwitterWhite.svg";
import {ReactComponent as InstagramW} from "../../assets/InstagramW.svg";
import

{
     Container,
     Wrapper,
     Text ,
     Paragraph,
     AboutWhy,
     NewsLetter,
     NewsParagraph,
     Input,
     Button,
     Socials,
     Copyright

    } from '../Footer/footerstyles';
 

export default function Footer() {
    
    return (
       <Container>
       <Wrapper >
           <Logo style = {{ width:'60px' , margin:'5px'}}/>
           <Text>NFTMasters Token</Text>
       </Wrapper>
           <Paragraph> Appreciating the best Nfts and encouraging  new creation  </Paragraph>
           <AboutWhy>
               <li style = {{ margin:'5px'}}>About</li>
               <li style = {{ margin:'5px'}}>Why</li>
               <li style = {{ margin:'5px'}}>Token Sale</li>
               <li style = {{ margin:'5px'}}> Smart Contract</li>

           </AboutWhy>
             <NewsLetter>NewsLetter</NewsLetter>
           <NewsParagraph>Keep to date with our progress.Subscribe for Email Update</NewsParagraph>
           <Input style= {{
               display :'flex',paddingTop:'30px'
           }}>
           <input type = 'text' placeholder = 'Your Email address ' 
           style = {{border:'none',
            width:'8cm',
            outline:'none',
            background:'3px',
            fontSize:'14px',
            borderBottom:'1px solid white'
            }}/>
            
           <Button ><button
           style = {{
               cursor:'pointer'
           }}
            >Submit</button></Button>
           </Input>
           <Socials>
               <li style = {{ margin:'15px', cursor:'pointer'}}><TelegramWhite/></li>
               <li style = {{ margin:'15px', cursor: 'pointer'}}><TwitterWhite/></li>
               <li style = {{ margin:'15px' ,cursor: 'pointer'}}><InstagramW/></li>
           </Socials>
           <Copyright>
            &copy;2021 NFTMastersToken
           </Copyright>
       </Container>
    )
}
