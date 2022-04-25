import React, { useCallback, useEffect, useState } from "react";
import ReactSelect, { SingleValue } from "react-select";
import { api } from "../../services/services";
import { ModalAddCategoria } from "../ModalAddCategoria";
import { ModalUpdateCategoria } from "../ModalUpdateCategoria";
import { Button, Container, Header } from "./style";
interface Palavra {
  id: number;
  nome: string;
  descricao: string,
  idCategoria: number;
}
interface Categoria {
  id: number;
  nome: string;
}
interface CategoriaToSelectObject {
  value: number;
  label: string;
}
export const Palavras = () => {
  const [isOpenAddPalavaraModal, setIsOpenAddPalavraModal] = useState(false);
  const [isOpenUpdatePalavraModal, setIsOpenUpdatePalavraModal] =
    useState(false);
  const [palavras, setPalavras] = useState<Palavra[]>([]);
  const [categorias, setCategorias] = useState<CategoriaToSelectObject[]>([]);
  const [idCategoria, setIdCategorias] = useState<Number>();
  const [palavraToEdit, setPalavraToEdit] = useState<Palavra>({} as Palavra);
  const loadPalavras = React.useCallback(() => {
    api.get(`/categorias/${idCategoria}?_embed=palavras`).then((response) => {
        setPalavras(response.data.palavras);
    });
  }, [idCategoria]);

  useCallback(() => {
    loadPalavras();
  }, [loadPalavras]);

  useEffect(() => {
    if (!isOpenUpdatePalavraModal || !isOpenAddPalavaraModal) {
      loadPalavras();
    }
  }, [isOpenUpdatePalavraModal, isOpenAddPalavaraModal, loadPalavras]);
  useEffect(() => {
    async function loadCategorias() {
      api.get("categorias").then((response) => {
        setCategorias(
          response.data.map((categoria: Categoria) => {
            return { label: categoria.nome, value: categoria.id };
          })
        );
      });
    }
    loadCategorias();
  }, []);
  function handleEditPalavra(palavra: Palavra) {
    setPalavraToEdit(palavra);
    toogleModalUpdatePalavra();
  }
  async function handleDeletePalavra(id: number) {
    await api.delete(`palavras/${id}`).then(() => loadPalavras());
  }
  function toogleModalAddPalavra() {
    setIsOpenAddPalavraModal(!isOpenAddPalavaraModal);
  }
  function toogleModalUpdatePalavra() {
    setIsOpenUpdatePalavraModal(!isOpenUpdatePalavraModal);
  }
  return (
    <Container>
      <Header>
        <h1>Palavras</h1>
        <ReactSelect options={categorias} onChange ={(e : SingleValue<CategoriaToSelectObject>) => setIdCategorias(e?.value)} value = { categorias.filter(categoria => categoria.value === idCategoria)[0] }/>
        <Button onClick={toogleModalAddPalavra}>Cadastrar</Button>
      </Header>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {palavras.map((palavra) => (
            <tr key={palavra.id}>
              <td> {palavra.nome} </td>
              <td>
                <Button onClick={() => handleEditPalavra(palavra)}>
                  Editar
                </Button>
                <Button
                  className="btn-excluir"
                  onClick={() => handleDeletePalavra(palavra.id)}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <ModalAddCategoria
        isOpen={isOpenAddPalavaraModal}
        setIsOpen={toogleModalAddPalavra}
      />
      <ModalUpdateCategoria
        isOpen={isOpenUpdatePalavraModal}
        setIsOpen={toogleModalUpdatePalavra}
        categoria={palavraToEdit}
      /> */}
    </Container>
  );
};
