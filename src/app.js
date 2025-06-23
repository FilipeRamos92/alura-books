import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routers/index.js";

const app = express();
routes(app);

const conexao = await connectDatabase();

conexao.on("error", (erro) => {
    console.error("Erro na conexão com o banco de dados", erro);
});

conexao.once("open", () => {
    console.log("Banco de dados conectado");
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso")
});

export default app;

