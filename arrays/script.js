//Q.1 ---------------find the largest element in the array ---------

// let arr= [2,13,5,1,14,10,25]
// let max = arr[0]
// for(let i =1 ; i<arr.length ; i++){
//     if(arr[i]> max ){
//         max = arr[i]
//     } 
// }
// console.log(max)


// Q.2 ---------- find the secondLargest element in the array------
// -----------Better apporach---------

// let arr = [1,2,4,7,7,5];
// let n = arr.length;

// let largest= arr[0];
// for(let i =0 ; i< n ;i++){
//         if(arr[i]>largest)
//             largest = arr[i]
// }
// let secondLargest = -1;
// for(let j =0 ; j<n ; j++){
//     if(arr[j] > secondLargest && arr[j]!=largest )
//         secondLargest = arr[j]
// }

// console.log(`the lagest element in the ${arr} is ${largest} and the secondlargest is ${secondLargest}`)

//Q.3 --------check if the array is sorted---------- 

// let arr=[1,2,2,3,3,4]
// let isSorted = true ; 
// for(let i =0 ; i<arr.length-1 ; i++){
//     if(arr[i] > arr[i+1]) 
//         {
//             console.log("unsorted")
//             isSorted = false;
//         break;
//     }
// }
// if(isSorted === true ){
//     console.log("sorted")
// }

//---------------Another Process ------

// let arr= [1,2,2,3,3,23,4]

// var Sorted = function(){
//     for(let i=1 ; i<arr.length ; i++){
//         if(arr[i] >= arr[i-1]){
    
//         }
//         else{
//             return false;
//         }
//     }
//     return true;
// }

// var ans = Sorted();

// if(ans== true){
//     console.log("soreted")
// }
// else{
//     console.log("unsorted")
// }

// Q.7. ----------Move all Zero's to the end of the array ------
// let arr= [ 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1,22,3,34,0,9]

// let copy=[];
// for(let i =0 ; i<arr.length ; i++){
//     if(arr[i] != 0){
//        copy.push(arr[i]); 
//     }
// }
//  for(let i = 0;i<copy.length;i++){
//             arr[i]=copy[i]
//  }
//  for(let i=copy.length; i<arr.length ; i++ ){
//     arr[i] = 0;
//  }
//  console.log(arr)


//  Q.8 ------------------- union of 2 sorted arrays------ using set
//  let arr1 = [1,2,3,2,34,4,3,4,5]
// let arr2 = [2,3,4,4,5]

// let unionset = new Set(arr1);
// for(let i =0 ; i<arr2.length ; i++){
//    unionset.add(arr2[i]);
// }

// console.log([...unionset])


// Q.9--- missing element in the array ------------


// let arr= [1,2,3,5]
// let count =1 ; 
// let n= arr.length;
 
// for( let i =0 ; i<n ; i++){
//       if(arr[i]=== count){
//          count++;
//       }
//    }
//    console.log("the number which is missing in array is "+ count);

// brute force way --- by linear search ----

// let arr = [5,3,2,4,1]
// let n =5 ;
// let missingFound = false ;
// for(let i =1 ; i<= n ; i++){
//    let flag = 0 ;
//    for(let j= 0; j<arr.length ; j++){
//          if(arr[j] === i){
//             flag=1;
//             break;
//          }
//    }
//    if(flag === 0) {
//       console.log(i);
//       missingFound= true;
//    }
// }
// if(missingFound === false){
//    console.log("no missing no. is present")
// }

//  optimal way - using Summation ----

// let  n =8; 
// let sum= (n*(n+1))/2;
// let arr= [1,2,3,4,5,6,8]
// let arrSum = 0 ;

// for(let i = 0 ; i<n-1 ; i++){
//    arrSum +=arr[i]; 
// }

// let missingNum = sum-arrSum;
// console.log(missingNum);