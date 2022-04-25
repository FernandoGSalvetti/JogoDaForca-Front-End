import { FormEvent, useState } from "react";
import { api } from "../../services/services";
import Modal from "../Modal";
import { Container } from "./style";
interface IModalAddCategoriaProps {
  isOpen: boolean;
  setIsOpen: () => void;
}
export const ModalAddCategoria = ({
  isOpen,
  setIsOpen,
}: IModalAddCategoriaProps) => {
  async function handleSubmit(event : FormEvent) {
      event.preventDefault();
      await api.post('categorias', { nome }).then(response => setIsOpen());
  }
  const [nome, setNome] = useState('');

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} key={"add-categoria"}>
      <Container onSubmit={handleSubmit}>
        <h1> Cadastrar categoria </h1>
        <input placeholder="Nome" onChange={(e) => setNome(e.target.value)}></input>
        <button>Cadastrar</button>
      </Container>
    </Modal>
  );
};
