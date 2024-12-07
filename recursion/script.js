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


//----------Q.10 ---- Print fibonacci number ----------

// function fibo(n){
//   if(n<=1) return n ;
//   let last = fibo(n-1);
//   let slast = fibo(n-2);
//   return last +slast ;
// }
// console.log(fibo(7));


// ------find the occurance of a number in an array --- (using for loop)

// let arr = [1,2,1,3,2,1,23,4,1]
// let n=4;
// function occurance( n ,arr )
// { 
//     let count = 0;
//     for(let i=0 ; i<arr.length ; i++){
//         if(arr[i] === n){
//           count++;
//         }
//     }
//     return count ;

// }

// let ans = occurance(n ,arr )
// console.log(` number ${n } is present in array ${ans} times`)



// Sample input data


// let n = parseInt(prompt("Enter the number of elements in the array:"));

// Collect array elements
// let arr = [];
// for (let i = 0; i < n; i++) {
//   let num = parseInt(prompt(`Enter element ${i + 1}:`));
//   arr.push(num);
// }

// // Create a hashmap to store occurrences
// let hash = {};  // Equivalent to int hash[13] in C++
// for (let i = 0; i < n; i++) {
//   let currentNumber = arr[i];
//   hash[currentNumber] = (hash[currentNumber] || 0) + 1;
// }

// // Querying the hashmap
// let q = parseInt(prompt("Enter the number of queries:"));
// for (let i = 0; i < q; i++) {
//   let number = parseInt(prompt("Enter the number to query:"));
//   // Fetch the count from the hashmap
//   console.log(`Occurrences of ${number}: ${hash[number] || 0}`);
// }



// ---find the occurance of number in array using (HASHING )------------
// let arr =[1,3,2,1,3,12,1,12]
// let Qarr= [1,4,2,3,12];


// let hashArr = new Array(13).fill(0);


// for (let i = 0 ; i<arr.length ; i++){
//     hashArr[arr[i]]+=1; 
// }

// for (let i=0 ; i< Qarr.length ; i++){
//    console.log( `the number you aasked for is  ${Qarr[i]} and it is present ${hashArr[Qarr[i]]} times in the array `)
// }
// console.log(hashArr)