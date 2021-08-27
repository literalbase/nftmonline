import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height:440px;
  margin-top: 0;
  background-image: linear-gradient( to bottom, #030000,#000000,#4c1314,#6e1714, #901c10 );
  padding-bottom: 2rem;
  padding-top: 135px;
  overflow:hidden;
`;
export const Wrapper = styled.div`
  width: 80%;
  font-size: 15px;
  margin-top: 5%;
  max-width: 800px;
  margin: auto;
  padding-top: 60px;
`;

export const IntroText = styled.p`
  margin-top: 0;
  color: white;
  font-size: 30px;
  text-align: center;
  font-weight: bolder;
  font-style: montserrat;
`;

export const ReadLinks = styled.ul`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: 50%;
  margin: auto;
  padding: 0;
  @media (max-width: 648px) {
    width: 80%;
    flex-wrap: wrap;

    & > :nth-child(3){
      text-align: center;
    }
  }
`;
export const Day = styled.div`
align-items :center;
`;

export const TimeWrapper = styled.div`
align-items :center;
`;

export const CountDown = styled.div`
margin:10px;
align-items:center;
justify-content:center;
margin-left:55px;
padding-bottom:10px;
`;

export const PreHeading = styled.div`
  text-align:center;
  margin-bottom:30px;
  font-size:18px;
  font-weight:600;
  line-spacing:1.5px
 
`;
export const Presale = styled.div`
 align-items:center;
 justify-content: center;
 padding-left:250px;
 padding-top:70px;
 color:white;
 display:inline-block;
 margin:50px;
`;
export const PresaleButton = styled.div`
background-color:white;
color:black;
text-align:center;
border-radius:30px;
font-weight:700;
line-spacing:2px;
width:170px;
height:25px;
margin:5px
justify-content:center;
align-items:center;
`;

export const ReadLink = styled.div`
   margin-top:40px;
`;


