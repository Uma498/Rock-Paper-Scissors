import {
  HeaderContainer,
  ResponsiveContainer,
  Heading,
  ScoreContainer,
  ScoreHeading,
  ScoreValue,
} from './styledComponents'

const HeaderScore = props => {
  const {score} = props
  return (
    <HeaderContainer>
      <ResponsiveContainer>
        <Heading>
          ROCK <br /> PAPER <br /> SCISSORS
        </Heading>
      </ResponsiveContainer>
      <ScoreContainer>
        <ScoreHeading>Score </ScoreHeading>
        <ScoreValue>{score}</ScoreValue>
      </ScoreContainer>
    </HeaderContainer>
  )
}

export default HeaderScore
