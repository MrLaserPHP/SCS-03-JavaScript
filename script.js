// Declaring variables here
// var alphaUppercase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",")
// var alphaLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
// var numbers = "0123456789".split("")
// var symbols = "~,!,@,#,%,^,&,*,+,=".split(",")

const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeLowercaseElement = document.getElementById('includeLowercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')

const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(arrayFromLowToHigh(123, 126)
)

characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeLowercase = includeLowercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeLowercase,
includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    
    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}


function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountRange.value = value
    characterAmountNumber.value = value
}


// console trial
// console.log("generatedpassword:");
// console.log(generatedpassword);
// console.log("randomoption1");
// console.log(randomoption1);
// console.log("Math.floor((Math.random() * 26) + 0):");
// console.log(Math.floor((Math.random() * 26) + 0));
// console.log("alphaLowercase");
// console.log(alphaLowercase);
// console.log("numbers");
// console.log(numbers);

// var charCodesASCII = (String.fromCharCode[1,2,3,4,5,6,7,8,9,10]); <---Couldn't get this function to work

// form.addEventListener('generate', e => {
//     e.preventDefault()
//     const characterAmountRange = characterAmountRange.value
//     const password = generatePassword(characterAmountRange, )
// })

// var symbols  could include more symbols ideally

// return 'Array' and 'array' have very different result.