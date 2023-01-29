import { Container, ContainerText } from "./styles";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const FooterSketeton = () => {
  return (
    <Container>
      <ContainerText><Skeleton height={17} width={270}/></ContainerText>
    </Container>
  );
};
