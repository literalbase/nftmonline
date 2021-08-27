import React from 'react';
import {
  Container,
  Wrapper,
  TokenPresale,
  TokenHeading,
  EventSubHeading,
  EventDescription,
  TableWrapper,
  Joinus,
  JoinusWrapper,
  SalesEvent,
  SalebuttonWrapper,
  SaleText,
  Salebutton,
  EventWrapper,
  PresaleCardWrapper,
  PresaleCard,
  CardHeader,
  CardDate,
  CardFooter,
  Tokenomics,
  TokenHeader,
} from './eventstyles';
import '../../App.css';

export default function EventSale() {
  const columns = [
    {
      scope: 'Token Symbol',
      date: 'NFTM',
    },
    {
      scope: 'Token sale start',
      date: '17th August, 2021',
    },
    {
      scope: 'Token sale end',
      date: '30th September, 2021',
    },
    {
      scope: 'Token for sale',
      date: '2,500,000,000,000',
    },
    {
      scope: 'Block Chain',
      date: 'Binance Smart Chain',
    },
    {
      scope: 'Total Supply',
      date: '10,000,000,000,000',
    },
    {
      scope: 'Sales Duration',
      date: '4 weeks',
    },
    {
      scope: 'Airdrop',
      date: '500 slots',
    },
  ];

  const presaleData = [
    {
      presaleTitle: 'Pre Sale',
      date: '27th June, 2021',
      duration: '4 weeks',
      type: 'Hard Cap',
      coin: '330 BNB',
    },
    {
      presaleTitle: 'Presale Rate',
      date: 'Minimum Buy',
      duration: '0.01 BNB',
      type: '100,000,000 BNB',
      coin: 'Max 3BNB',
    },
    {
      presaleTitle: 'AirDrop',
      date: '1,500,000,000,000 NFTM',
      duration: '5000 SLOTS',
      type: '+750,000/Referral',
      coin: 'Unlimited Referral',
    },
  ];

  return (
    <Container>
      <Wrapper>
        <TokenPresale>
          <TokenHeading>Token Presale</TokenHeading>
          <EventSubHeading>PUBLIC PRESALE EVENT</EventSubHeading>
          <EventDescription>
            The public presale event will start on August 27, 2021 and{' '}
          </EventDescription>
          <EventDescription>
            will open until September 25 2021 with a total hard cap of 330 BNB
          </EventDescription>
        </TokenPresale>
        <TableWrapper>
          <table
            id="round-table"
            className="table table-hover table-striped table-bordered"
            style={{ borderRadius: '20px', border: 'none' }}
          >
            <tbody>
              {columns.map((data, index) => (
                <tr key={index + 'cols'}>
                  <th scope="row"
                   style={{ backgroundColor: '#FCB3B4',
                    width :"400px",borderRadius:"3px"

                     }}>
                    {data.scope}
                  </th>
                  <td
                     style={{
                      color: 'red',
                      backgroundColor: { index } ===1 ? 'red' : '#F9CBCB',
                      
                    }}
                  >
                    {data.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <JoinusWrapper>
            <Joinus>
              <EventWrapper>
                <SalesEvent>
                  Join our <br />{' '}
                  <span style={{ fontWeight: 'bold', fontSize: '12px' }}>
                    Pulic Presale
                  </span>{' '}
                  <br /> Event
                </SalesEvent>
              </EventWrapper>
              <SalebuttonWrapper>
                <SaleText>
                  Presale ends at <br />{' '}
                  <span style={{ color: '#9E8181', fontSize: '12px' }}>
                    25th July, 2021
                  </span>{' '}
                </SaleText>{' '}
                <Salebutton>Join Presale Event</Salebutton>
              </SalebuttonWrapper>
            </Joinus>
            <PresaleCardWrapper>
              {presaleData.map((data, index) => (
                <PresaleCard key={index}>
                  <CardHeader>
                    <p
                      style={{
                        textTransform: 'uppercase',
                        color: 'white',
                        margin: ' 1rem auto',
                      }}
                    >
                      {data.presaleTitle}
                    </p>
                  </CardHeader>
                  <CardDate>
                    <p
                      style={{
                        fontWeight: 'bold',
                        margin: ' 2rem auto',
                      }}
                    >
                      {data.date}
                    </p>
                    <p
                      style={{
                        fontSize: '14px',
                      }}
                    >
                      {data.duration}
                    </p>
                  </CardDate>
                  <CardFooter>
                    <p
                      style={{
                        textAlign: 'center',
                        paddingTop: '11px',
                      }}
                    >
                      {data.type}
                    </p>
                    <p
                      style={{
                        textAlign: 'center',
                      }}
                    >
                      {data.coin}
                    </p>
                  </CardFooter>
                </PresaleCard>
              ))}
            </PresaleCardWrapper>
          </JoinusWrapper>
        </TableWrapper>
          <Tokenomics>
            <TokenHeader >Tokenomics</TokenHeader>
          </Tokenomics>
      </Wrapper>
    </Container>
  );
}
