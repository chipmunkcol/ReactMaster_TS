
import styled from "styled-components";

const AsAndAttrs = () => {
    return(
    <div>
        <Contaier>
            <Btn>Log In</Btn>
            <Btn as='a' href="/">Go Website</Btn>
            {/* as 연산자를 사용해서 html을 바꿀 수 있음!  */}
            <Input />
            <Input />
            <Input />
        </Contaier>
    </div>
    )
}

export default AsAndAttrs;

const Contaier = styled.div``

const Btn = styled.button`
 background-color: tomato;
 border: none;
 border-radius: 10px;
 cursor: pointer;
`;
// html에 속성값을 추가할 수 있음!
const Input = styled.input.attrs({ required: true, maxLength: 10 })`
 background-color: teal;
`