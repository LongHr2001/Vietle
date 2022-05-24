import { DICTIONARY } from './words.js';

const DICTIONARY_LENGTH = DICTIONARY.length;

export function chooseRandomWord() {
	let randomIndex = Math.floor(Math.random() * DICTIONARY_LENGTH);
	return DICTIONARY[randomIndex];
}

export function checkInDictionary(guess: string) {
	return DICTIONARY.map(word => word.wordNoAccent.toUpperCase()).includes(guess);
}