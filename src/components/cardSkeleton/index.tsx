import {
  CardContainer,
  CardImg,
  TextProduct,
  TextPrice,
  TextDescription,
  Row,
} from "./styles";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill()
    .map((item,index) => (
      <CardContainer key={index}>
        <CardImg >
          <Skeleton height={138} width={111} baseColor={"#0f0f0f"}
            highlightColor={"#0F52BA"}/>
        </CardImg>
        <Row>
          <TextProduct>
            <Skeleton />
          </TextProduct>
          <TextPrice>
            <Skeleton height={12}
            width={20}baseColor={"#0f0f0f"}
            highlightColor={"#0F52BA"}/>
          </TextPrice>
        </Row>
        <TextDescription>
          <Skeleton />
        </TextDescription>
        <button>
          <Skeleton
            height={22}
            width={200}
            baseColor={"#0f0f0f"}
            highlightColor={"#0F52BA"}
          />{" "}
        </button>
      </CardContainer>
    ));
};
