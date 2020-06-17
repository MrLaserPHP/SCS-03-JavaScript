https://codegolf.stackexchange.com/questions/71613/generating-the-alphabet-in-javascript


I'm pretty sure there's not a better way to do this but figured it couldn't hurt to ask.

I'm tired of typing out a='abcdefghijklmnopqrstuvwxyz'.

Cool languages have Range('a'..'z') or similar

What can we come up with with JS that's as short as possible??

for(i=97,a='';i<123;){a+=String.fromCharCode(i++)}
is longer than just the alphabet - but guarantees I don't screw up somewhere.

I'm hoping there's a nasty bit-shifty way to produce a-z in less than 50 characters.

I messed around with i=97;Array(26).map(x=>String.fromChar....i++

but it was always way longer by the time I joined then split the array(26) to be useable

Edit: I've gotten it down to

[...Array(26)].reduce(a=>a+String.fromCharCode(i++),'',i=97)




@muddyfish, LuisMendo: This is on-topic per meta. – Doorknob♦ Feb 9 '16 at 21:11
1
[...Array(26)].map((q,w)=>String.fromCharCode(w+97)) is 52 bytes and add another 7 for the .join`` – andlrc Feb 9 '16 at 21:13 
Related: stackoverflow.com/questions/3895478/… – Digital Trauma Feb 9 '16 at 21:19 
@dev-null a='';i=97;[...Array(26)].map(b=>a+=String.fromCharCode(i++)) is 60 but takes care of the join how are you doing join in 7 without getting commas in the result? – Charlie Wynn Feb 9 '16 at 21:19
1
@CharlieWynn [...Array(26)].map((q,w)=>String.fromCharCode(w+97)).join`` – andlrc Feb 9 '16 at 21:23





... if you are happy with a lowercase only alphabet.

for(i=9,a='';++i<36;)a+=i.toString(36) // 38, cannot be used in an expression
[...Array(26)].map(_=>(++i).toString(36),i=9).join`` // 52 directly returnig the string desired
[...Array(26)].map(_=>a+=(++i).toString(36),a='',i=9) // 53 assign to a variable
(i=9,[for(_ of Array(26))(++i).toString(36)].join``) // 52 ES7 direct return
i=9,a='',[for(_ of Array(26))a+=(++i).toString(36)] // 51 ES7 assign to a variable







https://stackoverflow.com/questions/24597634/how-to-generate-an-array-of-alphabet-in-jquery

You can easily make a function to do this for you if you'll need it a lot

function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}
genCharArray('a', 'z'); // ["a", ..., "z"]


function to_a(c1 = 'a', c2 = 'z') {
    a = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return (a.slice(a.indexOf(c1), a.indexOf(c2) + 1)); 
}



// var tonysObject1 = {
//     name: 'Tony'
// }

// items/text/etc. in curly braces {} are objects!
// var myobject = {
//     name: "Tony Facciolo",
//     hobby: "Coding...have no life otherwise"
// }

// document.write("Example written text to html")

// Great Youtube reference is: https://www.youtube.com/watch?v=iKo9pDKKHnc&list=WL&index=12&t=0s
// right-click 'format document'...finally tfound it, thanks Luis
//THIS ...'.value' is...
//whatever comes after a '.' dot is an element. 
//After parentheses are attributes. 
// generatedpassword.value
// Square brackets [] mean array, {} is an object
// # is......