// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.


let vowels = ['a', 'e', 'i', 'o', 'u'];

function vowelsCount(word){
    let count = 0;
    word = word.toLowerCase(); 

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count += 1;
        }
    }

    console.log(`Vowels count: ${count}`);

}

vowelsCount("The quick brown fox jumps over the lazy dog.")

