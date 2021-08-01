import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import landingImg from '../landing.svg'
export const GlobalStyles = createGlobalStyle`

${normalize}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background:#5e42a6;
    color:#000;
  &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        background: url(${landingImg}) center no-repeat;
        background-size: cover;
        z-index: -1;


    }
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
}

.app {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
}

.flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

h1 {
    text-align: center;
    color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    top: 40px;
    text-transform: uppercase;
    letter-spacing: 2px;
}

section {
    width: 700px;
    max-width: calc(100% - 40px);
    margin: auto;
    background:#fff;
    padding: 40px;
    border-radius: 20px;
    box-shadow: -7px 13px 16px -1px rgb(0 0 0 / 66%);
    margin: 140px 0;
}

h2 {
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1px;

}

.word {
    display: inline-block;
    padding: 5px 10px;
    margin: 10px;
    text-transform: capitalize;
    background: #5e42a6;
    color: #fff;
    border-radius: 10px;

}

.word__wrapper {
    text-align: left;
    /* tex */
}

label {
    /* font-size: 1.1rem; */
    text-align: center;
    display: block;
}

textarea {
    display: block;
    border-radius: 5px;
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    outline: none;
    /* border: 1px solid #5e42a6; */
}


 input, button {
    text-transform: capitalize;
    background: #5e42a6;
    color: #fff;
    border-radius: 10px;
    padding: 10px 0;
    margin:0;
    width:150px;
    outline:none;
    border:none;
    appearance: none;
    line-height:1;
    text-transform: uppercase;
    text-align:center;
    margin:20px auto 0;
    display:block;
}

input.text {
    border: 1px solid #5e42a6;
    background:none;
    color:#000;
}


.alert {
    text-align: center;
    margin-bottom: 20px;
    color: red;
    span {
        text-transform: capitalize;
        &.unmatched {
            background: red;
            color: #fff;
            border-radius: 10px;
            padding: 10px 15px;
            line-height: 1;
            text-align: center;
            margin: 0 10px 10px;
            display: inline-block;
        }
    }
}


    span.check {
            width: 30px;
            height: 30px;
            margin: 0 auto 20px;
            display: block;
            border-radius: 100%;
            color:#fff;
            background:#00d363;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
        }

@media screen and (max-width: 760px) {
    section {
        padding:40px 20px;
    }
}

`