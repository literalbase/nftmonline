import React from 'react';
//Importing SVG logos from assets
import ExchangeIcon from '../../assets/exchnge-icon.svg';
import BitForex from '../../assets/bitforex.svg';
import Binance from '../../assets/binance.svg';
import Gecko from '../../assets/gecko.svg';
import Probit from '../../assets/probit.svg';
import Exchangeitem from '../../assets/Exchangeitem.svg'

//Importing components  from  partnerstyles
import {
  Container,
  Wrapper,
  Exchange,
  ExchangeText,
  BitForEx,
  GeckoDisplay,
} from './patnerstyles';

export default function Patner() {
  const bitImages = [BitForex, Binance];
  const geckoProbit = [Gecko, Probit];
    return (
      <Container>
      <Wrapper>
      <Exchange>
          <img
            src={ExchangeIcon}
            alt="exchange icon"
            style={{ width: '60px', height: '47px' }}
          />
          <ExchangeText>Exchange Listing to be announced</ExchangeText>
        </Exchange>
        <BitForEx>
          {bitImages.map((image, index) => (
            <img
              key={index + 's'}
              src={image}
              alt="binance"
              style={{ width: '120px', height: '60px', margin: '0.3rem' }}
            />
          ))}
        </BitForEx>
        <GeckoDisplay>
          {geckoProbit.map((image, index) => (
            <img
              key={index + 's'}
              src={image}
              alt="binance"
              style={{ width: '110px', height: '70px', margin: '0.1rem' }}
            />
          ))}
        </GeckoDisplay>
      </Wrapper>
      </Container>
    );
}
