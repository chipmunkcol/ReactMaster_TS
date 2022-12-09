import styled, { keyframes } from "styled-components";

const Keyframes = () =>{
    return(
        <div>
            <AnimationBox>
                <span>🤑</span>
            </AnimationBox>


        </div>
    );
}

export default Keyframes;

const spin = keyframes`
 0%{
    transform: rotate(0deg);
    border-radius: 0px;
 }
 50%{
    transform: rotate(360deg);
    border-radius: 50px;
    font-size: 50px
 }
 100%{
    transform: rotate(0deg);
    border-radius: 25px;
 }
`
const AnimationBox = styled.div`
 width: 100px;
 height: 100px;
 background-color: tomato;

 display: flex;
 justify-content: center;
 align-items: center;
 // keyframe 으로 animation 효과 가능
 animation: ${spin} 5s linear infinite;

 // styled-components는 html 자식들 (span) 요소에 접근가능 */
 span{
    &:hover{
        font-size: 20px;
    }
    &:active{
        opacity: 0;       
    }
 }
 
`
