import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class LeilaoServico {
    constructor(){}

    async listLeilao(){
        try{
            const leilao = await prisma.leilao.findMany();
            return leilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LeilaoServico();