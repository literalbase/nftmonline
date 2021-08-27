import React from 'react';
import AboutNftm from '../../assets/about-NFTM.svg';
import WhyChooseNftm from '../../assets/why-choose-NFTM.svg';
import "./aboutstyles.css"
  
  export default function About() {
    const Data = [
      {

        image1: AboutNftm,
        heading1: 'About NFTM',
        title1:"What is NFTM token?",
        description1:
          'You should now have a decent idea of what an About Us page should and shouldn’t contain. We’re going to follow this with a few tips to help you stand out and create an About Us page that works',
      },
      {
        image2: WhyChooseNftm,
        title2: "What is NFTM token",
        heading2: 'Why Choose NFTM?',
        description2:
          'You should now have a decent idea of what an About Us page should and shouldn’t contain. We’re going to follow this with a few tips to help you stand out and create an About Us page that works',
      },
    ];
    return (
        <div className = "aboutContainer" id = "About">
        {Data.map((d) =>  (
       <div >
             <div className = "left">
             
             <div className = "part1">
                     <h2>{d.heading1}</h2>
                       <h3>{d.title1}</h3>
                       <p className = "about-description">{d.description1}</p>
                       </div>
                       
                       <img src = {d.image1} alt= "" className= "image1"/>
                      
             </div>
 
 {/** 

             <div className = "right">
                        <div className = "imgView">
                        <img src = {d.image2} alt= "" className = "image2"/>
                        </div>
                          <div className = "part2">
                              <h2>{d.heading2}</h2>
                                 <h3>{d.title2}</h3>
                             <p className ="about-description" >{d.description2}</p>
                        
                        </div>
             </div>
              */}
         </div>

             
     ))}
     </div>
    );
  }
  