import styled from "styled-components";


const Theme = () => {
    return(
    <div>
        <Wrap>
            Hello, DarkMode!
        </Wrap>
    </div>
    );
}

export default Theme;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    display: flex;
    justify-content: center;
    align-items: center;
`