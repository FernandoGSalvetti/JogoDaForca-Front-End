import { Header } from "../../components/Header";
import { ButtonContainer, Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <Header />
      <ButtonContainer>
        <button> Criar Partida </button>
      </ButtonContainer>
    </Container>
  );
};
