import styled from "styled-components";

const PropsAndInheritance = () => {
    return (
    <div>
        <Container>
            <Box bgColor="teal">
            <Text>Hello, React_TS</Text>
            </Box>
            
            <Box bgColor="tomato">Hi</Box>
            <Box />
        </Container>

        <Container>
            <Circle />
        </Container>
    </div>
    )
}

export default PropsAndInheritance;

const Container = styled.div`
  display: flex;
`

const Box = styled.div`
  background-color: ${props => props.bgColor || 'yellow'};
  width: 200px;
  height: 200px;
`;
  const Text = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  `

const Circle = styled(Box)` //styled-components 상속가능ㄷㄷ;
  border-radius: 50%;
`
