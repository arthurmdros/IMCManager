import styled from "styled-components"

const PopUpCPFContainer = styled.div`
background-color: black;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
`;

export const DesktopPopUpCPFContainer = styled(PopUpCPFContainer)`
border-radius: 7px;
box-shadow: 0 0 32px rgba(0,0,0,0.5);
padding: 40px;
width: 450px;
font-size: 26px;
justify-content: center;
`

export const Header = styled.div`
width: 100%;    
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

export const BtnGroup = styled.div`
width: 70%;    
display: flex;    
align-items: center;    
margin-left:40px;
`