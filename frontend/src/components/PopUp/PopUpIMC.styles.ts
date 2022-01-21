import styled from "styled-components"

const PopUpIMCContainer = styled.div`
background-color: black;
display: flex;
fexl-direction: column;
align-items: center;
position: relative;
`;

export const DesktopPopUpIMCContainer = styled(PopUpIMCContainer)`
border-radius: 7px;
box-shadow: 0 0 32px rgba(0,0,0,0.5);
padding: 40px;
width: 450px;
font-size: 26px;
justify-content: center;
`

export const Header = styled.h3`
color: white;
font-size: 35px;
line-height: 1em;
font-weight: 300;
margin: 5px 0 10px;
text-align: center;
`