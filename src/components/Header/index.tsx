import { Container, Content } from "./style";
import fichaImg from "../../assets/ficha.svg";
export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={fichaImg} alt="Ficha" />
        <h1>Jogo da forca</h1>
        <img src={fichaImg} alt="Ficha" />
      </Content>
    </Container>
  );
};
