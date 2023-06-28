import styled from "styled-components";
import { devices } from "../../services/size_screen";
export const ContainerCard = styled.div`
  height: 100vh;
  max-width: 1024px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 30px;
  margin: 5% 0;

  @media ${devices.mobileL} {
    margin-top: 20px;
    margin-bottom: 20px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`;
