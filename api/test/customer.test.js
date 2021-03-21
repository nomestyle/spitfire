import { expect, server, BASE_URL } from './setup';

describe('/customer test', () => {
    it('gets all customers', done => {
        server
            .get(`${BASE_URL}/customer`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
    });
});

describe('/customer/id/:id test', () => {
    it('gets a customer', done => {
        server
            .get(`${BASE_URL}/customer/id/0`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
    });
});

describe('/customer/identifier/:identifier test', () => {
    it('gets a customer', done => {
        server
            .get(`${BASE_URL}/customer/identifier/000`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
    });
});

describe('/customer/sort/:direction/by/:property test', () => {
    it('gets a customer array', done => {
        server
            .get(`${BASE_URL}/customer/sort/ASC/by/identifier`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
    });
});

describe('/customer/sort/:direction/by/status/:stat test', () => {
    it('gets a customer', done => {
        server
            .get(`${BASE_URL}/customer/sort/ASC/by/identifier/status/2`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
    });
});

describe('/customer/sort/:direction/by/:property/filter/:filter/:value test', () => {
    it('gets a customer array', done => {
        server
            .get(`${BASE_URL}/customer/sort/ASC/by/identifier/filter/lastName/test`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
    });
});

describe('/customer/:identifier/updatestatus/:status test', () => {
    it('gets an integer array', done => {
        server
            .put(`${BASE_URL}/customer/000/updatestatus/non-active`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
    });
});
