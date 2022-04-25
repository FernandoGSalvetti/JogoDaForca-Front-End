import { Route, Routes } from "react-router-dom";
import { Categorias } from "../../components/ListagemDeCategorias/index";
import { HeaderAdm } from "../../components/HeaderAdm";
import { Palavras } from "../../components/ListagemDePalavras/index";

export const Administracao = () => {
  return (
    <>
      <HeaderAdm />
      <Routes>
        <Route path="categorias" element={<Categorias />}></Route>
        <Route path="palavras" element={<Palavras/>} />
      </Routes>
    </>
  );
};
