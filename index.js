import getPlayerScores from "./playerScores.js";

/**
 * Sort players by each player amount of wins accumulated
 * @async-function
 * @returns Array
 */
export default async function playersByScore() {
    const winner_list = [];
    const win_counts = [];
    const matches = await getPlayerScores();
    for (let i = 0; i < matches.length; ++i) {
        //players and scores stored in arrays in respective orders
        const players = Object.keys(matches[i]);
        const res = Object.values(matches[i]);
        //count a game only if there's a winner, ignore tie matches
        if (res[0] !== res[1]) winner_list.push((res[0] > res[1] ? players[0] : players[1]));
    }

    //accumulate total number of wins for each player
    for (const num of winner_list) {
        win_counts[num] = win_counts[num] ? win_counts[num] + 1 : 1;
    }

    //sorting and keeping players name only
    return Object.keys(win_counts).sort((a, b) => {
        return win_counts[b] - win_counts[a];
    });
}