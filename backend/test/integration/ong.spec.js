const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () =>{
        const res = await request(app)
            .post('/ongs')
            /**
             * para setar os testes em que a chamada tiver um Header:
             * .set('auth' <- nome da header, '(id válido do auth)')
             */
            .send({
                name: "APACC",
                email: "contato@apac.com.br",
                whatsapp: "51000000000",
                city: "capao da canoa",
                uf: "RS"
            });
        
         expect(res.body).toHaveProperty('id');
         expect(res.body.id).toHaveLength(8);
    });
});