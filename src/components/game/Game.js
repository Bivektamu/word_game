import React, { useState, Fragment } from 'react'
import { GameBoard } from './GameBoard'
import { addPlayer } from '../actions/playerAction'

export const Game = () => {

    const [start, setToggleStart] = useState(false)
    const [show, setToggleShow] = useState(false)
    const [numberOfPlayers, setNumberOfPlayers] = useState(2)
    const onClick = () => {
        return <GameBoard />
    }

    const onSubmit = e => {
        e.preventDefault();
        setToggleShow(true)
        addPlayer(numberOfPlayers);

    }
    return (
        <div>
            {!show && <Fragment>
                <form onSubmit={e => onSubmit(e)} >

                    <label htmlFor="">Number of players?</label>
                    <br />
                    <input className="text" type="number" max="4" min="1" value={numberOfPlayers} onChange={e => setNumberOfPlayers(e.target.value)} />
                    <input type="submit" value="Submit" />
                </form>
            </Fragment>}
            {(show && !start) && <Fragment>

                <div>
                    <h2>Lets Start game!</h2>
                    <br />
                    <input type="button" value="Start" onClick={() => onClick(setToggleStart(true))} />
                </div>
            </Fragment>}

            {start && <GameBoard />}
        </div >


    )
}
