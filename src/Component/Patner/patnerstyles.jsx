import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 0;
`;

export const Wrapper = styled.div`
  width: 80%;
  font-size: 14px;
  margin-top: 5%;
  max-width: 800px;
  margin: auto;
  padding-top: 1.2rem;

  @media (min-width: 648px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const Exchange = styled.div`
  width: 100%;
  text-align: center;

  @media (min-width: 648px) {
    padding-top: 22px;
  }
`;

export const ExchangeText = styled.p`
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;

export const BitForEx = styled.div`
  width: 100%;
  text-align: center;

  @media (min-width: 648px) {
    padding-top: 34px;
  }
`;
export const GeckoDisplay = styled.div`
  width: 100%;
  text-align: center;

  @media (min-width: 648px) {
    padding-top: 29px;
  }
`;