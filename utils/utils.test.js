//
//
// for docu about expect library see: https://github.com/mjackson/expect
//
//
const expect = require('expect');
const Mailgun = require('mailgun').Mailgun;

const utils = require('./utils');

describe('utils', () => {

    it('should add 2 numbers', () => {
        var testResult = utils.add(297, 120);
        expect(testResult).toBe(417);
    });

    it('should square a number', () => {
        var testValue = 9;
        var expected = 81;
        var result = utils.square(testValue);
        expect(result).toBeA('number').toBe(81);
    })

    it('should devide two numbers', () => {
        var x = 54;
        var y = 4;
        var expected = 13.5;
        var result = utils.devide(x, y);
        expect(result).toBeA('number').toBe(expected);
    });

    it('Should split fullName into firstName and lastName', () => {
        var user = utils.setName({
            "age": 56,
            "address": "FB 511",
            "kids": ['Cas', 'Anouk']
        }, 'Hans vanMeurs');

        expect(user).toInclude({
            firstName: 'Hans',
            lastName: 'vanMeurs'
        });
        expect(user).toInclude({
            kids: ['Cas', 'Anouk']
        })
        expect(user.kids).toInclude("Cas");
        expect(user.kids).toExclude('Pietje');
    });

});

describe('utils-async', () => {

    describe('#addAsync', () => {

        it('should add two numbers async', (done) => {
            utils.asyncAdd(4, 5, (sum) => {
                expect(sum).toBe(9); //return a + b;
                done();
            });
        });
    });


    describe('#squareAsync', () => {

        it('should call squareAsync on square x', (done) => {
            utils.squareAsync(4, (result) => {
                expect(result).toBeA('number').toEqual(16);
                done();
            });
        });
    });


    // it('should send an email', (done) => {
    //   utils.sendMail("this is the bodytext, fantastic!!", (result) => {
    //     expect(result).toEqual('Mail sent successful');
    //     done();
    //   });
    // });
});
