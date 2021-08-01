import React, { useState } from 'react'

export const Player = () => {


    const [numberOfPlayers, setNumberOfPlayers] = useState(2);

    const onSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div>

            <form onSubmit={(e) => onSubmit(e)}>
                <label htmlFor="">Number  of Players</label>
                <input type="text" name="numer_of_players" id="" value={numberOfPlayers} onChange={(e) => setNumberOfPlayers(e.target.value)} />
            </form>





        </div>
    )
}
