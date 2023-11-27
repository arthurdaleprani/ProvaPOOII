import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class LanceServico {
    constructor(){}

    async listLance(){
        try{
            const lance = await prisma.lance.findMany();
            return lance;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LanceServico();