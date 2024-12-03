let str = "madas";
function ispalin(str, i) {
    if (i >= str.length / 2) {  
        console.log("Palindrome");
        return;  // Stop further recursion
    }

    if (str[i] !== str[str.length - 1 - i]) {
        console.log("Not a palindrome");
        return;  // Stop recursion after detecting a mismatch
    }

    ispalin(str, i + 1);  // Recursive call to check the next pair
}
ispalin(str, 0);  // St