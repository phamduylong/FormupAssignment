import { ok, fail } from 'assert';
import playersByScore from './index.js';
const test_arr = await playersByScore();
describe('Array', () => {
    describe('Array', () => {
        it('Array size must be less than or equal to 8', () => {
            ok(test_arr.length <= 8, "Leaderboard contains more names than the amount of players");
        });

        it('Array should not contains duplicates', () => {
            const uniques = new Set(test_arr);
            ok(uniques.size === test_arr.length, "Duplicates players name on the leaderboard!");
        });
    });
});
