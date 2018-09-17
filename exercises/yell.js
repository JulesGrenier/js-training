'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

function yell(str){
    return str.toUpperCase();
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof yell, 'function');
assert.strictEqual(yell.length, 1);
assert.deepStrictEqual(yell('Bonjour'), 'BONJOUR');
assert.deepStrictEqual(yell('J\'ai fait mes propres tests !'), 'J\'AI FAIT MES PROPRES TESTS !');
// End of tests */
