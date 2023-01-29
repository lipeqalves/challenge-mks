import styled from "styled-components";
import {devices} from "../../services/size_screen";

export const Container = styled.header`
  width: 100vw;
  height: 101px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0f52ba;

  @media ${devices.mobileL} {
    height: 48px;
  }
`;
export const ContainerText = styled.div`
  margin-left: 65px;
  height: 101px;
  display: flex;
  align-items: center;
  @media ${devices.mobileL} {
    margin-left: 15px;
  }
`;

export const TextMks = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 19px;
  text-align: center;

  mix-blend-mode: normal;
  @media ${devices.mobileL} {
    
    font-size: 32px;
  }
`;

export const TextSistemas = styled.p`
  display: flex;
  margin-left: 3px;
  align-items: end;
  height: 30px;
  font-size: 20px;
  line-height: 19px;

  mix-blend-mode: normal;
  @media ${devices.mobileL} {
    
    font-size: 16px;
  }
`;

export const BtnCarrinho = styled.div`
  margin-right: 65px;

  width: 90px;
  height: 45px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  color: #000000;

  background: #ffffff;
  border-radius: 8px;

  @media ${devices.mobileL} {
    margin-right: 15px;
    width: 52px;
    height: 26px;
  }
`;
