import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Administracao } from "../pages/administracao";
import { Home } from "../pages/home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/administracao/*" element={<Administracao />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
