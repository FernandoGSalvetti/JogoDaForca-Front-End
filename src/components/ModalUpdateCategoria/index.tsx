import { FormEvent, useEffect, useState } from "react";
import { api } from "../../services/services";
import Modal from "../Modal";
import { Container } from "./style";
interface ICategoria{
  nome: string,
  id: number,
}
interface IModalAddCategoriaProps {
  isOpen: boolean;
  setIsOpen: () => void;
  categoria: ICategoria;
}
export const ModalUpdateCategoria = ({
  isOpen,
  setIsOpen,
  categoria,
}: IModalAddCategoriaProps) => {
  async function handleSubmit(event : FormEvent) {
      event.preventDefault();
      await api.put(`categorias/${categoria.id}`, { nome }).then((response) => setIsOpen());
  }
  const [nome, setNome] = useState(categoria.nome);
  useEffect(() => {
    setNome(categoria.nome)
  }, [categoria])
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} key={"add-categoria"}>
      <Container onSubmit={handleSubmit}>
        <h1> Atualizar categoria </h1>
        <input placeholder="Nome" value = {nome} onChange={(e) => setNome(e.target.value)}></input>
        <button>Atualizar</button>
      </Container>
    </Modal>
  );
};
