import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 140px;
  max-width: 550px;
  border: 1px solid #ffffff;
  margin-top: 40px;
  border-radius: 12px;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    max-width: 1100px;
  }
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Bree Serif;
  padding: 20px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 80%;
  margin-right: 20px;
  background-color: #ffffff;
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 25%;
  }
`

export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0px;
  font-family: Bree Serif;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ScoreValue = styled.p`
  color: #223a5f;
  text-align: center;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
