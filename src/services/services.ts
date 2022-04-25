import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3333'
});

//http://localhost:3333/categorias/1?_embed=palavras
//pegar as palavras de uma categoria