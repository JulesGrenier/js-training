'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
function whisper(str){
    return str.toLowerCase();
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper.length, 1);
assert.deepStrictEqual(whisper('BONJOUR'), 'bonjour');
assert.deepStrictEqual(whisper('J\'AI FAIT MES PROPRES TESTS !'), 'j\'ai fait mes propres tests !');
// End of tests */
