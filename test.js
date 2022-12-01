import { ok } from 'assert';
import { assert } from 'chai';
import playersByScore from './index.js';
const test_arr = await playersByScore();
describe('Array', () => {
    describe('Return value from function', () => {
        it('Return value should be an array', () => {
            assert(Array.isArray(test_arr), "Function successfully return an array");
        });

        it('Should not be undefined', () => {
            assert.notStrictEqual(test_arr, undefined, "Array is defined");
        });
    });
    describe('Array contents', () => {
        it('Array size must be less than or equal to 8', () => {
            assert.isAtMost(test_arr.length, 8, "Array size is 8 at most");
            //below is an assertion test that does the same with node's assert module
            //ok(test_arr.length <= 8, "Leaderboard contains more names than the amount of players");
        });

        it('Array should not contains duplicates', () => {
            //creating a set from array to eliminate all duplicated members
            const uniques = new Set(test_arr);
            assert.strictEqual(uniques.size, test_arr.length, "Set and array sizes are the same (no duplicates)");
            //below is an assertion test that does the same with node's assert module
            //ok(uniques.size === test_arr.length, "Duplicates players name on the leaderboard!");
        });
    });
});
