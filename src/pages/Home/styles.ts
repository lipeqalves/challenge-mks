import styled from "styled-components";
import {devices} from "../../services/size_screen";
export const ContainerCard = styled.div`
  
  width: 100%;
  height: auto;
  max-width: 1028px;
 
  display: grid;
  justify-items:center;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 100px;


  @media ${devices.mobileL} {
    margin-top: 20px;
    margin-bottom: 20px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Container = styled.div`
  margin: auto 0;
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
`;
