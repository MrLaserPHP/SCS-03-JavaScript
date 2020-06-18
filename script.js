// Declaring variables here
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeLowercaseElement = document.getElementById('includeLowercase')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')

const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(arrayFromLowToHigh(123, 126)
)

characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)


// HERE There needs to be an if statement that...
    // RUN IF statements that sees if all checkboxes are unchecked
        // True = prompt user with an error, OR automatically change the first or all check box to marked.
        // False = if any of the 4 boxes are checked, run the function
form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeLowercase = includeLowercaseElement.checked
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeLowercase, includeUppercase,
includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
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


