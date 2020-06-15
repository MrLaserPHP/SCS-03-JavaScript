// Declaring variables here
// var charCodesASCII = (String.fromCharCode[1,2,3,4,5,6,7,8,9,10]);
var alphaLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var alphaUppercase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",")
var numbers = 'eleven!@#$#'
var tonysObject1 = {
    name: 'Tony'
}

// Square brackets [] mean array, {} is an object
// # is......
var characterAmountRange = 32;
var randomoption1 = (Math.floor((Math.random() * 3) + 1));
var generatedpassword = "12345654321qwerty";
var generate = document.querySelector('#generate');
var mytextareatest1 = document.querySelector('#password');
// Variables declared

const form = document.getElementById('passworpasswordGeneratorForm')

// form.addEventListener('generate', e => {
//     e.preventDefault()
//     const characterAmountRange = characterAmountRange.value
//     const password = generatePassword(characterAmountRange, )
// })

// Event listers...
generate.addEventListener("click", function (event) 
    {
    event.preventDefault();
    console.log('ACTIVATED Generate Button! Woohoo.');
    generatedpassword = "i'm changing this value to nullllllllllllll";
})

// console trial
console.log("Tony's Console Trial Log like an ECHO Starts here for testing only!. Here we go!")
// console.log("var charCodesASCII:");
// console.log(charCodesASCII);
console.log("generatedpassword:");
console.log(generatedpassword);
console.log("randomoption1");
console.log(randomoption1);
console.log("Math.floor((Math.random() * 10) + 0):");
console.log(Math.floor((Math.random() * 10) + 0));
console.log("Math.floor((Math.random() * 26) + 0):");
console.log(Math.floor((Math.random() * 26) + 0));
console.log("Math.floor((Math.random() * 4) + 0):");
console.log(Math.floor((Math.random() * 4) + 0));

console.log("alphaLowercase");
console.log(alphaLowercase);

// console.log("charCodesASCII:");
// console.log(charCodesASCII);

// document.write("Example written text to html")

// items/text/etc. in curly braces {} are objects!
var myobject = {
    name: "Tony Facciolo",
    hobby: "Coding...have no life otherwise"
}

// Great Youtube reference is: https://www.youtube.com/watch?v=iKo9pDKKHnc&list=WL&index=12&t=0s
// right-click 'format document'...finally tfound it, thanks Luis
//THIS ...'.value' is...
//whatever comes after a '.' dot is an element. 
//After parentheses are attributes. 
// generatedpassword.value