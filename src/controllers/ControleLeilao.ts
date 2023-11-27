import { Request, Response } from 'express';
import LeilaoServico from '../services/LeilaoServico';


class ControleLeilao {

    constructor(){
    }

    async listLeialo(req: Request, res: Response){
        const Leilao = await LeilaoServico.listLeilao();

        res.render('users', { Leilao:Leilao })
    }
}

export default new ControleLeilao();