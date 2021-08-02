import { dictionary } from "../api";

export function getDictionary() {
    return dictionary;
}


export const addWordsToDictionary = (wordToAdd) => new Promise((resolve, reject) => {
    wordToAdd = wordToAdd.split(",");
    var word_already_exists = []
    var check_if_already_exists = ''

    // GETTING WORD ONE BY ONE FROM SET OF INPUTED WORDS AND CHECKING IF EXISTS IN DICTIONARY OR NOT
    for (var i = 0; i < wordToAdd.length; i++) {
        wordToAdd[i] = wordToAdd[i].replace(/\s/g, '');

        if (wordToAdd[i] !== "" && dictionary.length <= 100 && dictionary.length > 0) {

            // Below comment is for neglecting warning so that this project can be pushed live
            //eslint-disable-next-line 
            check_if_already_exists = dictionary.filter((word) => word === wordToAdd[i])

            if (check_if_already_exists.length > 0) {
                word_already_exists.push(check_if_already_exists)
            }
            else {
                dictionary.push(wordToAdd[i])
            }

        }
    }

    // SENDING BACK WORDS WHICH ALREADY EXISTS IN DICTIONARY AS AN ERROR
    if (word_already_exists) {
        reject(word_already_exists)
    }
    else {
        word_already_exists = ''
        resolve("Words added")
    }

})

export const checkIfWordExistsInDictionary = (word) => new Promise((resolve, reject) => {

    word = word.split(",");

    var word_not_in_dictionary = [];

    let check_if_word_exists = 0;
    for (var i = 0; i < word.length; i++) {
        word[i] = word[i].replace(/\s/g, '');

        if (word[i].length > 0) { check_if_word_exists = dictionary.includes(word[i]) }

        if (!check_if_word_exists) {
            word_not_in_dictionary.push(word[i])
        }

    }


    if (word_not_in_dictionary.length < 1) {
        resolve(word.length)
    }
    else {
        reject(word_not_in_dictionary)

    }

})