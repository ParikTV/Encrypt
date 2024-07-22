import { Router } from "express";
import ProductosController, { UsuariosController } from "../controller/UsuariosController";
import { checkJwt } from "../middleware/jwt";
import { checkRole } from "../middleware/role";

const routes= Router();

routes.post("",[checkJwt, checkRole(['admin'])], UsuariosController.new)

export default routes;

