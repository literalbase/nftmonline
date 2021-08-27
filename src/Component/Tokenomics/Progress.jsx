import React from 'react'
import  {ReactComponent as Tokenomics} from '../../assets/tokenomics-chat.svg';
import TokenomicsLine from '../TokenomicsLine/TokenomicsLine';
import Text  from '../Text/Text';


export default function Progress() {
    
    return (
        <div className = 'tokenomics' style = {{justifyContent : "center" , marginLeft:'170px'}}>
          
           <Text/>
           <TokenomicsLine/>
           <Tokenomics  style = {{width:'1100px',marginBottom:'20px'}}/>
        </div>
    )
}
