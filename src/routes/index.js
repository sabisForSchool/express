import {Router} from "express"
import usuariosController from "../controllers/usuariosController.js"

const routes = new Router();



routes
    .get("/usuarios", usuariosController.listarUsuarios)
    .post('/usuario', usuariosController.criarUsuario)
    .get("/usuario/:id", usuariosController.listarUserPorId)
    .put("/usuario/:id", usuariosController.atualizarUser)
    .delete("/usuario/:id", usuariosController.deletar)

export default routes;
