// Declaring variables here
// ****Is there a way to decalre a set of common characters without defining each and every one?
// var alphabet = alphabet
// var numbers = numbers 
// var specialcharacters = specialcharacters

// var alphabet = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
var alphabetlow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetup = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
// Need to update the special characters variable list to either utilise unicode or escape sequences in order to have all special characters utilised
// var specialcharacters = [!#%&()*+,-./:;<=>?@[\]^{|}~];
var uppercase = "A";
// OR   
var alphanumerics = 'abcdef123456!@#$%^';
// var alphanumerics = 'abcdef123456!@#$%^' .split
var poorpasword1 = alphabetlow + numbers;
var poorpasword2 = alphabetlow + alphabetup + numbers + alphanumerics;
var randomoption1 = (Math.floor((Math.random() * 3) + 1))
// 
// var generatedpassword = 

// ********* This one below confuses me
var generate = document.querySelector('#generate')
var mytextareatest1 = document.querySelector('#password')
// Variables declared

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

