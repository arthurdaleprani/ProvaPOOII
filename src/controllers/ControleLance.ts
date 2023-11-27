import { Request, Response } from 'express';
import LanceServico from '../services/LanceServico'


class ControleLance {

    constructor(){
    }

    async listLance(req: Request, res: Response){
        const users = await LanceServico.listLance();

        res.render('Lances', { lance: LanceServico })
    }
}

export default new ControleLance();