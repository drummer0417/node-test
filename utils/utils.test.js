//
//
// for docu about expect library see: https://github.com/mjackson/expect
//
//
const expect = require('expect');

const utils = require('./utils');

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

  console.log(`User is: ${utils.setName('', 'Hans vanMeurs')}`);
})
// it('should expect some values', () => {
//     expect(12).toEqual(12);
//     expect([3, 4, 5]).toInclude(5);
//     expect([3, 4, 5]).toExclude(6);
//
// });
