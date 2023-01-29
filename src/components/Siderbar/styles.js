import styled from 'styled-components';
import {devices} from "../../services/size_screen";
export const Container = styled.div`
  background-color: #0F52BA;;
  position: absolute;
  
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));
  grid-row-gap: 15px; 
  align-content:space-between;
  justify-items:center;
  

  top: 0px;
  left: 65.5%;
  width: 486px;
  height: auto;

  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  right: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .2s;
 

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }

  @media ${devices.mobileL} {
    left: 24%;
    width: 330px;
    height: auto;
  }
`;

export const Content = styled.div`
  
  width: 100%;
  height: auto;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px; 
  
  
`;

export const TextHeader = styled.div`
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;
  text-align: start;
  color: #FFFFFF;
 
`

export const ContainerHeader = styled.div` 
  margin-top:26px;
  width: 230px; 
  height: 60px;
  display:flex;
  @media ${devices.mobileL} {
    width: 200px;
  }
`

export const ContainerText = styled.div` 
  
  width: 320px; 
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  @media ${devices.mobileL} {
    
    width: 230px;
    height: 67px;
  }
`

export const ContainerFooter = styled.div` 
  
 
  width: 486px; 
  height: 97px;

  background: #000000;

  display: flex;
  align-items: center;
  justify-content: center;
  
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  color: #ffffff;

  @media ${devices.mobileL} {
    
    width: 330px;
    height: 67px;
  }
`
export const CardClose = styled.p`

  width: 38px;
  height: 38px;

  font-weight: 400;
  font-size: 34px;
  line-height: 17px;

  color: #000000;

`;