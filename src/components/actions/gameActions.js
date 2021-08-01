import { dictionary } from "../api";
export function getDictionary() {
    return dictionary;
}

export const addWordsToDictionary = (wordToAdd) => new Promise((resolve, reject) => {

    wordToAdd = wordToAdd.split(",");

    const word_already_exists = []

    for (var i = 0; i < wordToAdd.length; i++) {
        wordToAdd[i] = wordToAdd[i].replace(/\s/g, '');

        if (wordToAdd[i] !== "" && dictionary.length < 100 && dictionary.length > 0) {
            const check_if_already_exists = dictionary.filter((word) => word === wordToAdd[i])
            if (check_if_already_exists.length > 0) {
                console.log(check_if_already_exists)
                word_already_exists.push(check_if_already_exists)
            }
            else {
                dictionary.push(wordToAdd[i])
            }

        }
    }

    if (word_already_exists) {
        reject(word_already_exists)
    }

})

export const checkIfWordExistsInDictionary = (word) => new Promise((resolve, reject) => {

    word = word.split(",");

    var word_not_in_dictionary = [];

    for (var i = 0; i < word.length; i++) {
        word[i] = word[i].replace(/\s/g, '');
        let check_if_word_exists = (dictionary.includes(word[i]));

        if (!check_if_word_exists) {
            word_not_in_dictionary.push(word[i])
        }

    }


    if (word_not_in_dictionary.length < 1) {


        setTimeout(resolve(word.length), 2000)
    }
    else {
        setTimeout(reject(word_not_in_dictionary), 2000)

    }

})