const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('server', () => {
    describe('GET /', () => {

        it('should call get /  Hello wereldbol request', (done) => {
            request(app)
                .get('/')
                .expect(401)
                .expect((res) => { // ********** use combi of request.expect and expect
                    expect(res.body).toInclude({
                        bla: "ssdff",
                        error: 'Page not found.',
                        bloe: 'sdf'
                    });
                })
                .expect((res) => { // ********** use combi of request.expect and expect
                    expect(res.body.error).toEqual('Page not found.');
                })
                .end(done);
        });
    });

    describe('GET /user', () => {

        it('should contain user hans age 55', (done) => {
            request(app)
                .get('/user')
                .expect(200)
                .expect((res) => {
                    {
                        expect(res.body.users).toInclude({
                            "age": "55",
                            "name": "Hans"
                        })
                    }
                })
                .end(done);
        });

        it('should return user hans with age 55', (done) => {
            request(app)
                .get('/user')
                .expect(200)
                .end(done);
        });

    });
});
