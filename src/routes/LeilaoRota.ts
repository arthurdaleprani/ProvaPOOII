import { Router } from "express";
import ControleLeilao from "../controllers/ControleLeilao";

const LeilaoRota = Router();

LeilaoRota.get('/leilao', ControleLeilao.listLeialo);

export default LeilaoRota;