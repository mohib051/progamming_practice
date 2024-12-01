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

function print(i, n) {
    if (i>n) {
      return;
    }
    // console.log(i);
    print(i+1, n);
    process.stdout.write(i + " ");
    
  }
  print(1,10);
