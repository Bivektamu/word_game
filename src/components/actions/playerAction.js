import { player } from "../api";

export const playerLength = () => {
    return player.length;
}


export const addPlayer = (numerOfPlayer) => {

    if (player.length > 0) {
        player.length = 0
    }
    for (var i = 0; i < numerOfPlayer; i++) {
        const a = {
            id: i,
            score: 0,
            tries: 0
        }

        player.push(a)
    }

}


export const getCurrentPlayerById = (id) => {
    const currentPlayer = player.filter((item) => item.id === id)
    return currentPlayer;
}

export const updateScoreAndTriesByPlayerId = (id, matched_words) => {

    const currentPlayer = player.filter((item) => item.id === id)
    let score = (currentPlayer[0].score)
    let tries = (currentPlayer[0].tries)

    tries++;

    score = score + matched_words;

    currentPlayer[0].score = score
    currentPlayer[0].tries = tries

}