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