import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;

  @media (min-width: 648px) {
    max-width: 1000px;
  }
`;

export const TokenPresale = styled.div`
  width: 100%;
  /* color: red; */
`;

export const TokenHeading = styled.p`
  padding-top: 40px;
  font-size: 35px;
  font-weight: 700;
  text-align: left;
  font-family:'Montseratt Black'
`;

export const EventSubHeading = styled.div`
  text-align: left;
  color:#383030;
  font-size: 14px;
  font-weight: 700;
  padding-top:20px;
  padding-bottom: 30px;
  letter-spacing:1.5px;
  font-family:'Montserrat Black'
`;

export const EventDescription = styled.div`
  padding-bottom: 10px;
  font-size: 14px;
  color: #000000b9;
  font-weight: 600;
  text-align: left;
  font-family:'Montserrat Light'
`;

export const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  

  @media (min-width: 648px) {
    flex-direction: row;
  }
`;

export const JoinusWrapper = styled.div`
  @media (min-width: 648px) {
    margin-left: 1%;
    width: 90%;
  }

  @media (max-width: 648px) {
    width: 100%;
  }
`;

export const Joinus = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 11px;

  @media (min-width: 648px) {
    /* width: 50%; */
  }

  @media (max-width: 648px) {
    /* width: 100%; */
    flex-direction: column;
  }
`;

export const EventWrapper = styled.div`
  width: 40%;
  /* height: 70px; */
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #fbd4d4;
  border: none;
  padding: 4%;
  display: flex;
  font-family:'Montserrat Light'
  @media (max-width: 648px) {
    width: 70%;
    margin: auto;
    text-align: center;
    flex-direction: column;
  }

  @media (max-width: 648px) {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

export const SalebuttonWrapper = styled.div`
  width: 70%;
  padding: 5px;
  border: none;
  background-color: #fcb3b4;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  padding: 2%;

  @media (max-width: 648px) {
    width: 100%;
    margin: 1rem auto;
    text-align: center;
    flex-direction: column;
  }

  @media (max-width: 648px) {
    border-radius: 0px;
  }
`;

export const Salebutton = styled.button`
  width: 180px;
  height:47px;
  padding: 10px;
  border: none;
  border-radius: 27px;
  background-color: #ab2315;
  outline: none;
  font-size: 11px;
  font-weight: 700;
  color: white;
  margin: auto;
  text-align: center;
  font-family:'Circular Std Medium'

  @media (max-width: 648px) {
    width: 70%;
    margin-bottom: 20px;
  }
`;

export const SaleText = styled.p`
  font-size: 14px;
  text-align:center;
  margin:25px;
  
`;

export const SalesEvent = styled.p`
  text-align: center;
  margin: auto;
  text-transform: uppercase;
  font-size: 12px;
`;

export const PresaleCardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;

  @media (max-width: 648px) {
    flex-direction: column;
  }

  @media (min-width: 648px) {
  margin-top: 26px;
  }
`;

export const PresaleCard = styled.div`
  width: 40%;
  margin: 2% ;
  text-align: center;
  justiy-content:space-between;

  @media (max-width: 648px) {
    width: 50%;
    margin-bottom: 1rem;
  }
`;

export const CardHeader = styled.div`
  width: 102%;
  background-color: #ab2315;
  display: flex;
  height: 50px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  font-weight: bold;
`;

export const CardDate = styled.div`
  width: 100%;
  border: 2px solid#ab2315;
  height: 130px;
`;

export const CardFooter = styled.div`
  width: 102%;
  background-color: black;
  height: 70px;
  color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  & > p {
    font-size: 12px;
  }

  @media (max-width: 648px) {
    height: 80px;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
  }
`;

export const Tokenomics = styled.div`
  width: 100%;
  padding-top: 2rem;
  height: 130px;
`;
export const TokenHeader = styled.h3`
  font-weight: bolder;
  font-size:30px;
  color:black;
  letter-spacing:2px;
`;