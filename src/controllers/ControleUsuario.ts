import { Request, Response } from 'express';
import UserServices from '../services/ServicoUser';

class ControleUsuario {

    constructor(){
    }

    async listUsers(req: Request, res: Response){
        const users = await UserServices.listUsuario();

        res.render('users', { users: users })
    }
}

export default new ControleUsuario();