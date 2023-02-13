import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 217.56px;
  height: 285px;

  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
`;

export const CardImg = styled.img`
  margin-top: 18px;

  width: 111px;
  height: 138px;

  color: #000000;
`;
export const TextProduct = styled.p`
  width: 124px;
  height: 38px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #2c2c2c;
`;
export const TextPrice = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 26px;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;

  color: #ffffff;

  background: #373737;
  border-radius: 5px;
`;
export const TextDescription = styled.p`
  width: 192px;
  height: 25px;
  font-size: 10px;
  line-height: 12px;

  color: #2c2c2c;
`;
export const Row = styled.div`
  display: flex;
`;
