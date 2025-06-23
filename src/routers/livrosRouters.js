import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/:id", LivroController.buscarLivroPorId);
routes.post("/livros", LivroController.cadastrarLivros);
routes.put("/livros/:id", LivroController.atualizaLivro);
routes.delete("/livros/:id", LivroController.deletaLivro);

export default routes;