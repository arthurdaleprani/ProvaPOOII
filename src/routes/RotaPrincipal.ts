import { Router } from "express";
import ControleMain from "../controllers/ControleMain";

const RotaPrincipal = Router();

RotaPrincipal.get('/', ControleMain.renderMainPage);

export default RotaPrincipal;