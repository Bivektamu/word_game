import React, { useState, useEffect, Fragment } from 'react'
import { checkIfWordExistsInDictionary } from '../actions/gameActions'
import { getCurrentPlayerById, updateScoreAndTriesByPlayerId, playerLength } from '../actions/playerAction'

export const GameBoard = () => {


    const [words, setWords] = useState('')
    const [score, setScore] = useState(0)
    const [currentPlayerId, setCurrentPlayerId] = useState(0)
    const [currentPlayer, setCurrentPlayer] = useState([])
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [numberOfPlayers, setNumberOfPlayers] = useState(2)
    const [matched, setToggleMatched] = useState(true)
    const [gameOverCounter, setGameOverCounter] = useState(0)
    const [unmatchedWords, setUnmatchedWords] = useState('')
    const [check, setCheck] = useState(false)

    const [winner, setWinner] = useState({
        "id": 0,
        "score": 0,
        "tries": 0
    })


    useEffect(() => {

        const player = getCurrentPlayerById(currentPlayerId)
        setCurrentPlayer(player[0]);
        setScore(currentPlayer.score);
        setNumberOfPlayers(playerLength())

        if (score > winner.score) {
            const temp = {
                "id": currentPlayerId,
                "score": score,
                "tries": currentPlayer.tries
            }
            setWinner(temp)
        }

        setTimeout(() => { setCheck(false) }, 1000)


    }, [currentPlayer, score, currentPlayerId, numberOfPlayers, gameOverCounter, winner])

    const findAnotherPlayer = (flag) => {
        if (currentPlayerId >= numberOfPlayers - 1) {
            const potentialNewPlayer = getCurrentPlayerById(0)
            const numberOfTries = potentialNewPlayer[0].tries

            if (numberOfTries < 10) {

                setCurrentPlayerId(0)
            }
            else {
                potentialPlayer(0);
            }


        }

        potentialPlayer(currentPlayerId);
    }

    function potentialPlayer(potential_player_id) {
        for (var i = potential_player_id; i < numberOfPlayers - 1; i++) {
            const potentialNewPlayer = getCurrentPlayerById(i + 1) && getCurrentPlayerById(i + 1)

            if (!potentialNewPlayer) {
                break;
            }

            const numberOfTries = potentialNewPlayer[0].tries

            if (numberOfTries < 10) {
                setCurrentPlayerId(i + 1);
                break;
            }
            else {
                const { id } = potentialNewPlayer[0]
                if (gameOverCounter + 1 < numberOfPlayers * 10 && id === numberOfPlayers - 1) {
                    potentialPlayer(-1)
                    break;
                }
            }


        }

    }

    const onSubmit = e => {
        e.preventDefault();

        setBtnDisabled(true)

        checkIfWordExistsInDictionary(words)
            .then(
                result => {
                    setCheck(true)
                    setUnmatchedWords('')
                    setToggleMatched(true)
                    setScore(currentPlayer.score)
                    setTimeout(function () {
                        setBtnDisabled(false)
                        findAnotherPlayer(true)
                    }, 1000);

                    updateScoreAndTriesByPlayerId(currentPlayerId, result)

                },
                error => {
                    setCheck(false)
                    setUnmatchedWords(error)
                    updateScoreAndTriesByPlayerId(currentPlayerId, 0)

                    setTimeout(function () {
                        if (matched && currentPlayer.tries < 10) {
                            setBtnDisabled(false)
                            // THIS IS TO GIVE PLAYER ONE MORE TRY
                            setToggleMatched(false)
                            return
                        }

                        setUnmatchedWords('')
                        findAnotherPlayer(false)
                        setBtnDisabled(false)

                        // THIS IS TO SKIP PLAYER, SINCE PLAYER ALREADY TRIED ONE TIME
                        setToggleMatched(true)
                    }, 1000);
                }
            )
            .finally(() => {
                setGameOverCounter(gameOverCounter + 1)
            })
    }

    return (
        <div>
            {gameOverCounter < numberOfPlayers * 10 ? <Fragment>
                <div>
                    <div className="flex">
                        <h3>Player <span>{currentPlayerId + 1}</span></h3>
                        <h3>Score: <span>{score}</span></h3>
                    </div>

                    <br /><br />

                    <form id="form" onSubmit={e => onSubmit(e)}>
                        <label>Please input words separated by comma</label>
                        <br />

                        {/* console.log(unmatchedWords) */}

                        {check && <span className="check">&#10004;</span>}

                        {unmatchedWords && unmatchedWords.length > 0 && (<div className="alert">
                            <p>
                                {unmatchedWords.map((error, index) => <span key={index} className="unmatched">{error}</span>)}
                            </p>
                        </div>
                        )}

                        <textarea name="words" id="words" type="text" required value={words} onChange={e => setWords(e.target.value)} />

                        <input type="submit" disabled={btnDisabled} value="Submit" />
                    </form>
                </div>
            </Fragment> : <Fragment>
                <div>
                    <h2>winner</h2>
                    <br />

                    <h3 className="flex">
                        <span>Player {winner.id + 1}</span>
                        <span>Score: {winner.score}</span>
                    </h3>
                </div>
            </Fragment>}
        </div>
    )

}
