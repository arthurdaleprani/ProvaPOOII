import { Router } from "express";
import ControleLance from "../controllers/ControleLance";

const LanceRota = Router();

LanceRota.get('/Lance', ControleLance.listLance);

export default LanceRota;