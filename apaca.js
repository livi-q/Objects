 
function apaca(n, x){
    let kys=0
    let put = []
    for(let i = 0; i< n/2; i++) {put.push(1); put.push(0)} //init ouytpit
    let stupidhappy= (put[0]+put.at(-1) %2===0)? 1 : 0;

    hi: while (true){stupidhappy=0
        for(let i = 1; i<n; i++) { //counting
            
            flag = (put[i]+put[i-1]) % 2 === 0 //is it hapuy
            flag?  stupidhappy+=1 : null; //if not happy increaes it
            
            
        }
        
        if(stupidhappy===x){ //break the while
            
            let letsAllDieRightnow = 0
            put.forEach(x=> {
                
                if(isNaN(x)){
                    letsAllDieRightnow = 1
                } 
            })
            
            if(letsAllDieRightnow){ return -1}else{ return put}
            break hi;
        }

        else{
            i = Math.floor(Math.random()*6)
            //change

                flag = (put[i]+put[i-1]) % 2 === 0 //is it hapuy
                
                flag?  null : put[i]+=1 ; //if not happy increaes it
                //break
            
        
        }
        
        if(kys>2000|| NaN in put){
            return -1
        }
        kys+=1
        
    }
}

console.log(apaca(6,4))
console.log(apaca(2,1))