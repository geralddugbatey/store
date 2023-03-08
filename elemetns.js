import styled, { keyframes } from "styled-components";
import { BiExit } from "react-icons/bi";
import {
  GiEyelashes,
  GiCupcake,
  GiCandleFlame,
  GiCakeSlice,
  GiCard5Hearts,
  GiCard2Hearts,
  GiCash,

} from "react-icons/gi";

export const Div = styled.div`
  background: black;
  position: relative;
  height: 100vh;
`;

const animate = keyframes`


0%{
    opacity:0;
}

50%{
    opacity:0.7;
}

100%{
    transform: translateY(-50px);
    opacity:1
}

`;


const around = keyframes`
 from {
    transform: rotate(0deg) translate(120px) scale(.7);
  }
  to {
    transform: rotate(360deg) translate(120px) scale(.7);
  }

`;


export const Cash = styled(GiCash)`

font-size:8em;
color:black;
cursor: pointer;

`

export const Lashes = styled(GiEyelashes)`
font-size:8em;
color:black;

`

export const In = styled.div`
  height: 80%;
  width: 100%;
  color: #e983d8;
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${animate} 1s forwards;
  transition: all 0.3s ease-in-out;
`;

export const Load = styled.div`
position:absolute;
color:white;
background:black;
text-align:center;
transition:0.2s ease-in-out;
font-size:1rem;
top: ${({ load }) => (load ? "0" : "-200%")};
width:100%;
padding:1rem;


`

export const Aside = styled.aside`
  z-index: 5;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: ${({ turn }) => (turn ? "0" : "-200%")};
  transition: all 0.3s ease-in-out;

  background: #fff;
`;

export const I = styled.div`
  padding: 3rem;
  overflow: scroll;
  font-size: 2rem;
  text-align: center;
  font-weight: 700;

  margin-top: 3rem;

  gap: 0.4rem;

  p {
    margin: 0.5rem 0;
    font-size: 1.1rem;
    text-align: center;
  }
`;

export const S = styled.div`
  display: flex;
  gap: 0.2rem;
`;
export const Button = styled.div`
  cursor: pointer;
  font-weight: 400;
  background: #fff;
  padding: 0.4rem;
  border-radius: 0.2rem;

  border: 1px solid #e983d8;

  &:hover {
    background: #e983d8;
    color: #fff;
    border: 1px solid #fff;
  }
`;
export const Input = styled.input`
  outline: none;
  border-radius: 0.2rem;

  border: ${({ wrong }) => (wrong ? "1px solid red" : "1px solid #fff")};

  padding: 0.1rem;
`;

export const Exit = styled(BiExit)`
  cursor: pointer;
  color: black;
  font-size: 2rem;
  top: 0;
  right: 0;
  margin: 1rem;
  position: absolute;
  z-index: ${({ turn }) => (turn ? "20" : "-1")};
`;

export const Eye = styled(GiEyelashes)`
  color: #e983d8;
  font-size: 2rem;
  top: 0;
  left: 0;
  margin: 1rem;
  position: absolute;
  z-index: 20;
`;

export const Cake1 = styled(GiCupcake)`
  color: #e983d8;
  font-size: 2rem;
  animation: ${around} 4s linear infinite;
  animation-delay:-4s;
  margin: 1rem;
`;

export const Candle = styled(GiCandleFlame)`
  color: #e983d8;
  font-size: 2rem;
  animation: ${around} 4s linear infinite;
  animation-delay:-3s;
  margin: 1rem;
`;

export const Cake = styled(GiCakeSlice)`
  color: #e983d8;
  font-size: 2rem;

  animation: ${around} 4s linear infinite;
  animation-delay:-2s;

  margin: 1rem;
`;

export const Two = styled(GiCard2Hearts)`
  color: #e983d8;
  font-size: 2rem;
`;

export const Five = styled(GiCard5Hearts)`
  color: #e983d8;
  font-size: 2rem;
`;

export const Dev= styled.div`
 animation: ${around} 4s linear infinite;
 animation-delay:-1s;


`
export const Main = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;

  & > * {
    grid-column: 1;
    grid-row: 1;
  }
`;
