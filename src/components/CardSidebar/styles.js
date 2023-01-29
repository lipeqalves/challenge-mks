import styled from "styled-components";
import { devices } from "../../services/size_screen";
export const CardContainer = styled.div`
  display: flex;
  width: 379px;
  height: 95px;
  margin-left: 15px;
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  @media ${devices.mobileL} {
    width: 250px;
    height: 220px;
    margin-top: 28px;
    margin-left: 56px;
    justify-content: center;
  }
`;
export const Row = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 88%;
  height: 82px;

  @media ${devices.mobileL} {
    width: 88%;
    height: 210px;
    margin-right: 20px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
export const CardImg = styled.img`
  width: 46px;
  height: 57px;
  color: #000000;

  @media ${devices.mobileL} {
    width: 80px;
    height: 95px;
  }
`;
export const TextProduct = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;

  font-weight: 400;
  font-size: 13px;
  line-height: 17px;

  color: #2c2c2c;

  @media ${devices.mobileL} {
    width: 100px;
    font-size: 16px;
    line-height: 19px;
  }
`;
export const TextPrice = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 26px;

  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #000000;

  @media ${devices.mobileL} {
    width: 84px;
    height: 34px;
    color: #ffffff;

    background: #373737;
    border-radius: 5px;
  }
`;

export const CardClose = styled.p`
  position: relative;
  left: 94.62%;
  right: 2.8%;
  top: -3%;
  bottom: 100%;

  width: 18px;
  height: 18px;

  font-weight: 400;
  font-size: 24px;
  line-height: 17px;

  color: #2c2c2c;

  @media ${devices.mobileL} {
    width: 21px;
    height: 21px;

    font-size: 34px;
    left: 90.62%;
    right: 0.8%;
    top: -5%;
    bottom: 100%;
  }
`;

export const BoxBtn = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 64px;
  height: 26px;

  background: #ffffff;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;

  @media ${devices.mobileL} {
    justify-content: space-around;
    width: 97px;
    height: 34px;
  }
`;
export const BtnSelecao = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  background: #ffffff;

  width: 20px;
  height: 10px;
`;
export const BtnText = styled.span`
  width: 20px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 400;
  font-size: 14px;
  line-height: 12px;

  color: #000000;

  @media ${devices.mobileL} {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const ContainerBtnPrice = styled.div`
  width: 172px;
  height: 35px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${devices.mobileL} {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 45px;
  }
`;
