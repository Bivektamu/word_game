import React, { useState, useEffect } from 'react'

import { getDictionary, addWordsToDictionary } from './actions/gameActions'

function Dictionary() {

    const [words, setWords] = useState('');
    const [wordsInDictionary, setWordsInDictionary] = useState([]);
    const [errors, setErrors] = useState('')


    useEffect(() => {
        const dictionary_list = (getDictionary());
        setWordsInDictionary(dictionary_list)

    }, [wordsInDictionary])


    const onSubmit = (e) => {
        e.preventDefault();

        addWordsToDictionary(words).then(
            result => {
                console.log("Word added");
            },
            error => {
                setErrors(error)

            }
        );

        setWordsInDictionary([...getDictionary()])
    }

    const wordsList = wordsInDictionary && wordsInDictionary.map((item, index) => {
        return (
            <p className='word' key={index}>{item}</p>
        )
    })


    return (
        <div>
            <h2>Dictionary</h2>
            <div className="word__wrapper">
                {wordsList && wordsList}
            </div>
            <br /><br />

            {/* ERROR FOR ALREDY EXISTING WORD  */}
            {errors && errors.length > 0 && (<div className="alert">
                <p>
                    Word already exists: {errors.map(error => <span>{error}, </span>)}
                </p>
            </div>
            )}

            {/* FORM TO ADD NEW WORDS */}
            <form id="add_words_form" onSubmit={(e) => onSubmit(e)}>
                <label>Wanna Add more words to Dictionary, please type words separated by comma</label><br />
                <textarea type="text" name="word_to_add" id="word_to_add" value={words} onChange={(e) => setWords(e.target.value)} />
                <button type="submit" >Submit</button>
            </form>

        </div >
    )
}

export default Dictionary
