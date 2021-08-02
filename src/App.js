import React, { useState, Fragment } from 'react'

import Dictionary from "./components/Dictionary";
import { Game } from "./components/game/Game";

import { GlobalStyles } from './styles'

function App() {


  const [next, setToggleNext] = useState(false)

  return (
    <div className="app">


      <GlobalStyles />


      <header className="App-header">
        <h1>Word Game</h1>
      </header>


      <section>

        {!next && (
          <Fragment>

            <Dictionary />
            <br /><br />
            <button onClick={() => setToggleNext(true)}>Next</button>
          </Fragment>
        )}


        {next && <Game />}
      </section>

    </div>
  );
}

export default App;
