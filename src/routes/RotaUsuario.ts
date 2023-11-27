import { Router } from "express";
import ControleUsuario from "../controllers/ControleUsuario";

const RotaUsuario = Router();

RotaUsuario.get('/users', ControleUsuario.listUsers);

export default RotaUsuario;