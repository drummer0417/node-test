const expect = require('expect');
const rewire = require('rewire');


var app = rewire('./app');
// var app = require('./app');

describe('App', () => {
    describe('#db.saveUser is called', () => {
        it('should call handleSignup with email and pw', () => {
            var mockDb = {
                saveUser: expect.createSpy()
            }
            app.__set__('db', mockDb);

            // var email = 'hans@bla.nl';
            // var password = '3324';

            app.handleSignup('hans@bla.nl', '3324');
            expect(mockDb.saveUser).toHaveBeenCalledWith({
                email: 'hans@bla.nl',
                password: '3324'
            })
        })
    })
    // it('should create and test a spy', () => {
    //   var spy = expect.createSpy();
    //   spy('hans@bla.nl', '3324');
    //   expect(spy).toHaveBeenCalledWith('hans@bla.nl', '3324');
    // });
})
