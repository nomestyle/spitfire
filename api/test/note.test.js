import { expect, server, BASE_URL } from './setup';

describe('/note/customer/:identifier test', () => {
    it('gets all notes for a customer', done => {
        server
            .get(`${BASE_URL}/note/customer/000`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
    });
});

describe('/note/addto/:identifier test', () => {
    it('adds a note to a customer', done => {
        server
            .post(`${BASE_URL}/note/addto/000`)
            .send({"noteContent":"test add"})
            .set('Accept','application/json')
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
    });
});

describe('/note/edit/:id test', () => {
    it('edits a customer note', done => {
        server
            .put(`${BASE_URL}/note/edit/0`)
            .send({"noteContent":"test edit"})
            .set('Accept','application/json')
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
    });
});

describe('/note/delete/:id test', () => {
    it('edits a customer note', done => {
        server
            .delete(`${BASE_URL}/note/delete/0`)
            .set('Accept','application/json')
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
    });
});


