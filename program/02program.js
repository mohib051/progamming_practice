function repeatElement(arr){
    let resArray=[];
     arr.sort((a,b)=> a-b)
     let cu=50
     for(let i=0 ; i<arr.length ;i++){
        
        if( arr[i] !== arr[i+1] ){
             if(cu>50){
                resArray.push(arr[i])
                
             }

            cu=50
         } 
         else if(arr[i] == arr[i+1]  ){
             cu++
         }
     }
     return resArray;
}
let arr= [1,3,4,3,4,4,3,3,6,99,7,6,2];
 console.log( repeatElement(arr)) 