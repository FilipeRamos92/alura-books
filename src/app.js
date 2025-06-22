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

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
        
    });
};

// app.get("/", (req, res) => {
//     res.status(200).send("Curso de Node.js");
// });

// app.get("/livros", async (req, res) => {
//     const listaLivros = await livro.find({});
//     res.status(200).json(listaLivros);
// });

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

// app.post("/livros", (req, res) => {
//     livros.push(req.body);
//     res.status(201).send("Livro cadastrado com sucesso");
// });

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros[index]);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso")
});

export default app;

