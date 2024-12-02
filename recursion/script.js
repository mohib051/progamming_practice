// Q.1 ---- print  0 to n times globaly declaring variable using recursion-----------

// let n =3 ;
// let count = 0;
//  function print(){
//     if(count>n){
//         return;
//     }
//     // console.log(count);
//     process.stdout.write(count+" ");

//     count++;
//     print();
// }
// print();

// ------------Q.2 print name n-times accept as parameter.

// function print(i,n ){
//         if(i>n){
//             return;
//         }
//         console.log("kazi")
//         print(i+1,n);
// }

// print(1,5);

/// --- Q.3 ----print 1 to N - taking as parameter -------

// function print(i,n){
//     if(i>n){
//         return;
//     }
//     // console.log(i);
//     process.stdout.write(i + " ")
//     print(i+1,n);
// }

// print(1,10);

//--------------Q.4- print N to 1 - taking as parameter

// function print(i,n){
//     if(i>n){
//         return;
//     }
//     // console.log(n);
//     process.stdout.write(n+" ")
//     print(i,n-1);
// }

// print(1,4);

// -----------Another way -- condtion change -----------

// function print(i,n){
//         if(i<1){
//             return
//         }
//         console.log(i);
//         print(i-1, n)
// }

// print(4,4)

// ----- --Q.5 print 1 to N (without using (i+1)) can use (i-1) ---(BACKTRACKING) //

// function print(i, n) {
//   if (i<1) {
//     return;
//   }
//   // console.log(i);
//   print(i - 1, n);
//   process.stdout.write(i + " ");
  
// }
// print(4,4);

// Q.6 print  N to 1 (without using (i-1) can use (i+1))-BACKTRACKING

// function print(i, n) {
//     if (i>n) {
//       return;
//     }
//     // console.log(i);
//     print(i+1, n);
//     process.stdout.write(i + " ");
    
//   }
//   print(1,10);


//**************** Lecutre-3 *************************
  //------------------ Q.7 - Sum of first N numbers--------- (PARAMETERIZED WAY)---
//   let n =5,s=0;
//   function sum(i,s){
//       if(i<1){
//         console.log(`sum of ${n} till 1 is ${s}`)
//         return;
//       }
//       sum(i-1,s+i);
//   }
// sum(n,s)

// -----------------loop think from 1 to n --
// let n =5,s=0 ;
// let i=1;
// function sum(i,n,s){
//     if(i>n){
//       console.log(`sum of ${n} till 1 is ${s}`)
//       return;
//     }
//     sum(i+1,n,s+i);
// }
// sum(i,n,s)


// ************ (FUNCTIONAL WAY) || (RECURSIVE WAY) **********
// let n =3;
// function sum(n){
//       if(n<1){
//         // console.log(`sum of ${n} till 1 is ${s}`)
//         return 0 ;
//       }
//      return (n + sum(n-1));
//   }
//   var ans = sum(n)
// console.log(`sum of n to 1 is ${ans}`);



// *****************Q.8----reverse an array using (two pointer apporoach)*****
// let n=5;
// let arr = [10,20,30,40,50];
// function reverse(arr,l,r){
//     if(l>=r){
//       return;
//     }
    // swap function is directly written here,as In JavaScript, when you pass variables (like a and b) to a function, they are passed by value, not by reference. This means that changes inside the swap() function do not affect the original array elements.
    
//     let temp = arr[l];
//     arr[l] = arr[r];
//     arr[r] = temp;

//     reverse(arr, l+1 , r-1)
// }
// reverse(arr,0,n-1)
// console.log(arr);

// When you call swap(arr[l], arr[r]), the values of arr[l] and arr[r] are copied into a and b. Any changes to a and b inside the swap function don't affect the original array because JavaScript uses pass-by-value for primitive data types.


//-------------- reverse an array (using single variable , one pointer approach )--------
// let n =5 ;
// let arr = [10,35,550,40,335];
// let i =0 ;
// function reverseArray(arr,n,i){
//     if(i>=n/2){
//       return;
//     }
//     // swap[arr[i], arr[n-1-i]]
//     let temp = arr[i];
//     arr[i]= arr[n-1-i];
//     arr[n-1-i]=temp;
//     reverseArray(arr,n,i+1)
// }

// reverseArray(arr,n, i);
// console.log(arr)

// ----------------Q.9*********--check if a string is palindrome or not---*****
// let str = "madas";
// function ispalin(str, i) {
//     if (i >= str.length / 2) {  
//         console.log("Palindrome");
//         return;  // Stop further recursion
//     }
//     if (str[i] !== str[str.length - 1 - i]) {
//         console.log("Not a palindrome");
//         return;  // Stop recursion after detecting a mismatch
//     }
//     ispalin(str, i + 1);  // Recursive call to check the next pair
// }
// ispalin(str, 0);  // Start the function

// -------Another way for printing  ------

// let str = "mom";
// function ispalin(str, i) {
//     if (i >= str.length / 2) {  
//         return true ;  // Stop further recursion
//     }

//     if (str[i] !== str[str.length - 1 - i]) {
//         return false;  // Stop recursion after detecting a mismatch
//     }

//    return ispalin(str, i + 1);  // Recursive call to check the next pair
// }
// var ans = ispalin(str, 0);  // Start the function

// if(ans  === true){
//   console.log("palindrome no")
// }
// else{
//   console.log("not palindrome")
// }

