import express, { request } from "express";
import routes from "./routes";
import path from "path";
import cors from "cors";
import { errors } from "celebrate";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
// Rota: Endereço completo da requisição
// Recursos: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-en

// POST: http://localhost:8000/users = criar um usuário
// GET: http://localhost:8000/users = Listar usuários
// GET: http://localhost:8000/users/1 = Buscar dados do usuário com valor 1

// Request Param: parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcinais para filtros paginação
// Request Body: Parametros  para criação/atualização de informações

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(errors());

app.listen(8000, () => {
  console.log("Servidor rodando em http://localhost:8000");
});
