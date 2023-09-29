import {Router} from "express"
import usuariosController from "../controllers/usuariosController.js"

const routes = new Router();



routes.get("/usuarios", usuariosController.listarUsuarios)
routes.post('/usuario', usuariosController.criarUsuario)
routes.get("/usuario/:id", usuariosController.listarUserPorId)
routes.put("/usuario/:id", usuariosController.atualizarUser)
routes.delete("/usuario/:id", usuariosController.deletar)

export default routes;
