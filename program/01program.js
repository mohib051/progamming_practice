
/// brout foced
function duplicateElement(arr){
    let resArray=[];
    let map = new Map()
   
    for(let i=0;i<arr.length;i++){
        let flag =true;
              for(let j=i+1;j<arr.length;j++){
                 if( arr[i] ==arr[j]){
                    flag=false;
                    break;
                 }
              }
              if(flag){
                resArray.push(arr[i])
              }
        }

    return resArray
}
/// optimal
// function duplicateElement(arr){
//     let resArray=[];
//     arr.sort((a,b)=>a-b)
//     for(let i=0;i<arr.length;i++){
//                  if( arr[i] !==arr[i+1]){
//                     resArray.push(arr[i])
//                  }

//               }

//     return resArray
// }
/// most optimal
function duplicateElement(arr){
    let resArray=[];
    let map =new Map()
    for(let i=0;i<arr.length;i++){
                 if( !map.has(arr[i])){
                    map.set(arr[i],1)
                    resArray.push(arr[i])
                 }

              }

    return resArray
}

let arr =[1,2,3,4,5,2,5,2]
console.log(duplicateElement(arr))