// Declaring variables here
var charCodesASCII = string.charCodesASCII
var characterAmountRange = 32
var randomoption1 = (Math.floor((Math.random() * 3) + 1))
var generatedpassword = "12345654321qwerty"

// ********* This one below confuses me
var generate = document.querySelector('#generate')
var mytextareatest1 = document.querySelector('#password')
// Variables declared


const form = document.getElementById('passwordGeneratorFrom')
form.addEventListener('generate', e => {
    e.preventDefault()
    const characterAmountRange = characterAmountRange.value
    const password = generatePassword(characterAmountRange, )
}



// $(document).ready(function() {

// }



// Event listers...
generate.addEventListener("click", function() 
{console.log('ACTIVATED Generate Button! Woohoo.') 
//THIS ...'.value' is...
//whatever comes after a '.' dot is an element. 
//After parentheses are attributes. 
mytextareatest1.value = "i'm changing this value to nullllllllllllll"
}
)


// console trial
console.log("Tony's Console Trial Log like an ECHO Starts here for testing only!. Here we go!")
console.log("var charCodesASCII:");
console.log(charCodesASCII);
console.log("var alphabetlo:");
console.log(alphabetlow);
console.log("var alphabetup:");
console.log(alphabetup);
console.log("numbers:");
console.log(numbers);
console.log("alphanumerics:");
console.log(alphanumerics);
console.log("poorpasword1:");
console.log(poorpasword1);
console.log("poorpasword2:");
console.log(poorpasword2);
console.log("randomoption1");
console.log(randomoption1);
console.log("Math.floor((Math.random() * 10) + 0):");
console.log(Math.floor((Math.random() * 10) + 0));
console.log("Math.floor((Math.random() * 26) + 0):");
console.log(Math.floor((Math.random() * 26) + 0));
console.log("Random Alphabet Index is " + "A");
console.log( "Alphabet letter #4 is " + alphabetlow[4-1]);
document.write("Example written text to html")

// items/text/etc. in curly braces {} are objects!
var myobject = {
    name: "Tony Facciolo", 
    hobby: "Coding...have no life otherwise"
}


// Great Youtube reference is: https://www.youtube.com/watch?v=iKo9pDKKHnc&list=WL&index=12&t=0s