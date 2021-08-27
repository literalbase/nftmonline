import React from 'react'
import WhyChooseNftm from '../../assets/why-choose-NFTM.svg';
export default function Why() {
    const Data = [
        
        {
          image2: WhyChooseNftm,
          title2: "What is NFTM token",
          heading2: 'Why Choose NFTM?',
          description2:
            'You should now have a decent idea of what an About Us page should and shouldn’t contain. We’re going to follow this with a few tips to help you stand out and create an About Us page that works',
        },
      ];
    return (
    
     <div className = "aboutContainer" id = "Why">
        {Data.map((d) =>  (
       

             <div className = "right">
                        <div className = "imgView">
                        <img src = {d.image2} alt= "" className = "image2"/>
                        </div>
                          <div className = "part2">
                              <h2 style = {{margin:'50px'}}>{d.heading2}</h2>
                                <h3 style = {{textAlign:'center'}}>{d.title2}</h3>
                             <p className ="about-description" >{d.description2}</p>
                        
                        </div>
             </div>
             ))}
             </div>
    )
}
