import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class ServicoUser {
    constructor(){}

    async listUsuario(){
        try{
            const Usuario = await prisma.usuario.findMany();
            return Usuario;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new ServicoUser();