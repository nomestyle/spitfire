import { expect, server, BASE_URL } from './setup';

describe('Swagger page test', () => {
    it('gets swagger UI', done => {
        server
            .get(`${BASE_URL}/api-docs/`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.text).to.match(
                    /Swagger UI/
                );
                done();
            });
    });
});
