import { Link } from "react-router-dom";
import { Container } from "./style";

export const HeaderAdm = () => {
  return (
    <Container>
      <h2>Administração</h2>
      <div>
          <Link to={'categorias'}>
            Categorias
          </Link>
          <Link to={'palavras'}>
            Palavras
          </Link>
      </div>
    </Container>
  );
};
