import { useEffect, useState } from "react";
import { api } from "../../services/services";
import { ModalAddCategoria } from "../ModalAddCategoria";
import { ModalUpdateCategoria } from "../ModalUpdateCategoria";
import { Button, Container, Header } from "./style";
interface Categoria {
  id: number;
  nome: string;
}
export const Categorias = () => {
  const [isOpenAddCategoriaModa, setIsOpenAddCategoriaModal] = useState(false);
  const [isOpenUpdateCategoriaModal, setIsOpenUpdateCategoriaModal] = useState(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoriaToEdit, setCategoriaToEdit] = useState<Categoria>({} as Categoria);
  async function loadCategorias() {
    api.get("categorias").then((response) => {
      setCategorias(response.data);
    });
  }
  useEffect(() => {
    loadCategorias(); 
  }, []);
  useEffect(() => {
    if(!isOpenAddCategoriaModa || !isOpenUpdateCategoriaModal){
        loadCategorias()
    }
  }, [ isOpenAddCategoriaModa, isOpenUpdateCategoriaModal ]);
  function handleEditCategoria(categoria: Categoria){
    setCategoriaToEdit(categoria);
    toogleModalUpdateCategoria();
  }
  async function handleDeleteCategoria(id: number){
    await api.delete(`categorias/${id}`).then(() => loadCategorias());
  }
  function toogleModalAddCategoria(){
    setIsOpenAddCategoriaModal(!isOpenAddCategoriaModa)
  }
  function toogleModalUpdateCategoria(){
    setIsOpenUpdateCategoriaModal(!isOpenUpdateCategoriaModal);
  }
  return (
    <Container>
      <Header>
        <h1>Categorias</h1>
        <Button onClick={toogleModalAddCategoria}>
          Cadastrar
        </Button>
      </Header>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.id}>
              <td> {categoria.nome} </td>
              <td>
                <Button onClick = {() => handleEditCategoria(categoria)}>Editar</Button>
                <Button className="btn-excluir" onClick={()=> handleDeleteCategoria(categoria.id)}>Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalAddCategoria isOpen = {isOpenAddCategoriaModa} setIsOpen={toogleModalAddCategoria}/>
      <ModalUpdateCategoria isOpen = {isOpenUpdateCategoriaModal} setIsOpen={toogleModalUpdateCategoria} categoria = {categoriaToEdit}/>
    </Container>
  );
};
