import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  Container,
  TextMks,
  TextSistemas,
  ContainerText,
  BtnCarrinho,
} from "./styles";

export const HeaderSkeleton = () => {
  return (
    <Container>
      <ContainerText>
        <TextMks><Skeleton height={44} width={144}/></TextMks>
        <TextSistemas><Skeleton height={22} width={74} /></TextSistemas>
      </ContainerText>
      <BtnCarrinho >
        <Skeleton height={22} width={74}/>
      </BtnCarrinho>
    </Container>
  );
};
