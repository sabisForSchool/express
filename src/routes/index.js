import {Router} from "express"
import usuariosController from "../controllers/usuariosController.js"

const routes = new Router();



routes.get("/usuarios", usuariosController.listarUsuarios)
routes.post('/usuario', usuariosController.criarUsuario)
routes.get("/usuario/:id", usuariosController.listarUserPorId)
routes.put("/usuario/:id", usuariosController.atualizarUser)

export default routes;
