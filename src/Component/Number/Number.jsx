import React from 'react'
import './number.css'

export default function Number() {
    return (
        <div className = "number" style = {{
            display:'flex',
            justifyContent:'space-between'
        
        }}>
            <li>25%</li>
            <li style = {{
                
                marginLeft:''
            }}>10%</li>
            <li style= {{
                  marginLeft:''
            }}>10%</li>
            <li style= {{
                marginRight:''
            }}>15%</li>
            <li style= {{
                marginLeft:''
            }}>15%</li>
            <li style= {{
                marginLeft:'',
                
            }}>20%</li>
            <li style= {{
             margin:'2%',
             marginLeft:'100px'
               
            }}>25%</li>
        </div>
    )
}
