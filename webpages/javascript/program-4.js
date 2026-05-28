//check for palindrome

let text = "131";
function ispalindrome(str){
    let rev = str.split("").reverse().join("");
    console.log('rev value',rev);
    return rev == text;
}
console.log("output is",ispalindrome(text))