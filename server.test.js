const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

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

it('should return user hans with age 55', (done) => {
  request(app)
    .get('/user')
    .expect(200)
    .end(done);
});
