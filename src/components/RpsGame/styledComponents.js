import styled from 'styled-components'

export const RpsGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  background-color: #223a5f;
`
export const RulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  margin-bottom: 44px;
`

export const PopupView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 260px;
  width: 100%;
  padding: 10px;

  @media screen and (min-width: 768px) {
    height: 60vh;
  }
`

export const PopupImg = styled.img`
height:90%;
width:100%;
margin-top:auto:
`
