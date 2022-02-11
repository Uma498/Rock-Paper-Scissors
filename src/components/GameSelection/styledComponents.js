import styled from 'styled-components'

export const GameSelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 250px;
  height: 250px;
  margin-top: 80px;

  @media screen and (min-width: 768px) {
    width: 420px;
    margin-bottom: 40px;
  }
`

export const GameButton = styled.button`
  height: 100px;
  width: 100px;
  background-color: transparent;
  border: none;
  outline: none;
  margin-top: 0px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    height: 150px;
    width: 150px;
  }
`

export const GameImg = styled.img`
  height: 100px;
  width: 100px;

  @media screen and (min-width: 768px) {
    height: 150px;
    width: 150px;
  }
`

export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
`

export const ResultName = styled.h1`
  color: #ffffff;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ResultText = styled.p`
  color: #ffffff;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const ResultButton = styled.button`
  width: 100px;
  height: 30px;
  color: #223a5f;
  font-size: 14px;
  font-family: 'Bree Serif';
  font-weight: 500;
  border: none;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  outline: none;
`
