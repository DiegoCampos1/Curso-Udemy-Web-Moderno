const assert = require('assert');

const plus = (a,b) => a+b;
const mult = (a,b) => a*b;
const expected = plus(1, 2);
const expected2 = mult(5, 5)

assert(expected === 3, 'one plus two is three' )
assert(expected2 === 25, '5 multiplication 5 is 25')