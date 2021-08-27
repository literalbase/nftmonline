import React from 'react';

import RoadMap from '../../assets/RoadMap.svg';
import RoadMap1 from '../../assets/RoadMap1.svg';
import RoadMap2 from '../../assets/RoadMap2.svg';
import RoadMap3 from '../../assets/RoadMap3.svg';
import RoadMap4 from '../../assets/RoadMap4.svg';
import RoadMap5 from '../../assets/RoadMap5.svg';
import RoadMap6 from '../../assets/RoadMap6.svg';

import {
     Container,
      Wrapper,
      RoadMapLine,
      RoadMapText,
      RoadMapOne,
      RoadMapTwo,
      RoadMapThree,
      RoadMapFour,
      RoadMapFive,
      RoadMapSix,

      RoadMaps
     } from '../RoadMap/Roadmapstyles'
 
     
export default function Roadmap() {
  
    return (
        <Container>
            <Wrapper>
               <RoadMapText>
                   Road Map
               </RoadMapText>
                <RoadMapLine>
                   <img 
                    src = {RoadMap}
                    alt = "Road Map line"
                    style ={{width:'80%', marginLeft: '150px',marginRight:'0px',alignItems:'center',marginTop:'30px'}}
                   />
                </RoadMapLine>
               <RoadMaps>
                <RoadMapOne>
                <img 
                    src = {RoadMap1}
                    alt = "Road Map One"
                    style = {{width: '8.125rem',marginLeft :'10.625rem',marginTop:'6px'}}
                />
                </RoadMapOne>
                <RoadMapTwo>
                <img 
                    src = {RoadMap2}
                    alt = "Road Map Two"
                    style = {{width:'10rem'}}
                />
                </RoadMapTwo>
                <RoadMapThree>
                <img 
                    src = {RoadMap3}
                    alt = "Road Map Three"
                    style = {{width: '8.125rem'}}
                />
                </RoadMapThree>

                <RoadMapFour>
                <img 
                    src = {RoadMap4}
                    alt = "Road Map Three"
                    style = {{width:'10rem'}}
                />
                </RoadMapFour>
                <RoadMapFive>
                <img 
                    src = {RoadMap5}
                    alt = "Road Map Three"
                    style = {{width: '8.125rem'}}
                />
                </RoadMapFive>
                <RoadMapSix>
                <img 
                    src = {RoadMap6}
                    alt = "Road Map Three"
                    style = {{width: '9rem '}}
                />
                </RoadMapSix>

                </RoadMaps>

            </Wrapper>
        </Container>
    )
}
