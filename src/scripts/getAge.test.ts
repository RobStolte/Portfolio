const assert = require('assert');
const getAge = require('./getAge');

describe('getAge', () => {
  it('should return the correct age when given a birthdate', () => {
    const birthdate = new Date('1990-01-01');
    const age = getAge(birthdate);
    assert.strictEqual(age, 31);
  });

  it('should return 0 when given a birthdate that is today', () => {
    const birthdate = new Date();
    const age = getAge(birthdate);
    assert.strictEqual(age, 0);
  });

  it('should return the correct age when given a birthdate in a leap year', () => {
    const birthdate = new Date('2000-02-29');
    const age = getAge(birthdate);
    assert.strictEqual(age, 21);
  });

  it('should return the correct age when given a birthdate in a non-leap year', () => {
    const birthdate = new Date('2001-02-28');
    const age = getAge(birthdate);
    assert.strictEqual(age, 20);
  });
});