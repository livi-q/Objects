function apaca(n, x){
    let put = []
    for(let i = 0; i<n; i++) {put.push(0)} //init ouytpit

    let stupidhappy= (put[0]%2===0)? 1 : 0;

    while (true){
        if(stupidhappy===x){ //break the while
            return put
        } 
        else{
            die: for(let i = 0; i<n; i++) {
                flag = (put[i]+put[i-1]) % 2 === 0 && !(put[i]+put[i-1]) ===0
                console.log(flag)
                
                if( (put[i]+put[i-1]) % 2 === 0 && !(put[i]+put[i-1]) ===0) {
                    //its even?
                    stupidhappy+=1
                    console.log('ALERT')    
                }
                else{
                    //not even add one to i
                    put[i]+=1
                    console.log(put) 
                    if(stupidhappy===x){ //break the while
                        break die;
                    }   
                }
            }
        }
        
        
    }
}

console.log(apaca(6,4))