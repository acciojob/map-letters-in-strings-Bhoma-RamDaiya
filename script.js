//your JS code here. If required.
// Function to create an object mapping letters to their indices
function mapLetters(word) {
    // Initialize an empty object to store the result
    const result = {};

    // Iterate through each character in the word
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];

        // Check if the letter is already a key in the result object
        if (result.hasOwnProperty(letter)) {
            // If yes, push the current index to the existing array
            result[letter].push(i);
        } else {
            // If no, create a new key with the letter and set its value as an array with the current index
            result[letter] = [i];
        }
    }

    return result;
}

// Examples
console.log(mapLetters("dodo"));    // { d: [0, 2], o: [1, 3] }
console.log(mapLetters("froggy"));  // { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
console.log(mapLetters("grapes"));  // { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
