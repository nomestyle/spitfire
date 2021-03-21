import { expect, server, BASE_URL } from './setup';

describe('Customer Endpoint test', () => {
    it('gets all customers', done => {
        server
            .get(`${BASE_URL}/customer`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.message).to.equal(
                    'Testing.1..2...3'
                );
                done();
            });
    });
});
