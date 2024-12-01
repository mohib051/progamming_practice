function print(i,n){
        if(i<1){
            return
        }
        console.log(i);
        print(i-1, n)
}

print(4,4)