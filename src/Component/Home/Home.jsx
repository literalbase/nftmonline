import React, { useEffect, useState } from 'react';
import JoinUs from '../../assets/join-d.svg';
import WhitePaper from '../../assets/whitepaper-d.svg';
import {
    Container,
    IntroText,
    Wrapper,
    ReadLinks,
    ReadLink,
    Presale,
    PreHeading,
    CountDown,
    TimeWrapper,
    PresaleButton,
    Day,
  } 
  from "./styledhome"



export default function Home() {
   
    let url = '';
    const linkdata = [ 

         { icon: WhitePaper, text: 'Read Whitepaper' },
  
         { icon: JoinUs, text: 'Join Presale' },

          { icon: JoinUs, text: 'Join Airdrop' },

];

  const calculateTimeLeft = () => {
         let year = new Date().getFullYear();
       const difference = +new Date(`${year}-8-20`) - +new Date();
       let timeLeft = {};

       if (difference > 0) {
        timeLeft = {
          Days: Math.floor(difference / (1000 * 60 * 60 * 24)) || '0',
          Hours: Math.floor((difference / (1000 * 60 * 60)) % 24) || '0',
          Minutes: Math.floor((difference / 1000 / 60) % 60) || '0',
          Seconds: Math.floor((difference / 1000) % 60) || '0',
        };
      }
  
      return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  const keysOfTimeLeft = Object.keys(timeLeft);

  keysOfTimeLeft.forEach((interval, index) => {
    if (!timeLeft[interval]) {
      return;
    }
     // if (timeLeft[interval] === '0') return '0';

     timerComponents.push(
        <TimeWrapper>
          <p style={{ fontSize: '20px' }}>
            {index < keysOfTimeLeft.length - 1
              ? timeLeft[interval] + ' :'
              : timeLeft[interval]}
          </p>
          <Day>{interval}</Day>
        </TimeWrapper>
      );
    });

    return (
        <Container>
        <Wrapper>
          <IntroText>
            Next Generation Yield Farming Protocol in Binance smart chain
          </IntroText>
          <ReadLinks>
            {linkdata.map((data, index) => (
              <ReadLink key={index + 'nk'}>
                <a
                  href={url}
                  style={{
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '200',
                    color: 'rgba(255, 255, 255, 0.836)',
                    top:'300px'
                  }}
                >
                 <img src={data.icon} alt="icons"/>
                  {" "}{" " + data.text}
                </a>
              </ReadLink>
            ))}
          </ReadLinks>
          <Presale>
            <PreHeading>Public Presale Event</PreHeading>
            <CountDown>
              {timerComponents.length ? timerComponents : <span>Time's up!</span>}
            </CountDown>
            <PresaleButton>
           Join Public Presale
          </PresaleButton>
          </Presale>
        </Wrapper>
      </Container>
    )


}
