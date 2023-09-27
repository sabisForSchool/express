import {Router} from "express"
import usuariosController from "../controllers/usuariosController.js"

const routes = new Router();



routes.get("/usuarios", usuariosController.listarUsuarios)
routes.post('/usuario', usuariosController.criarUsuario)
routes.get("/usuario/:username", usuariosController.listarUserPorId)

export default routes;
