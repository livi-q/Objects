function tarif(x,n, pe){
    n += 1
    let total = x * n
    let spend = pe.reduce((hi,bye)=> hi + bye,0)

    total -= spend
    return total
}

console.log(tarif(10 , 3, [4, 6 , 2]))

console.log(tarif(10 , 3, [10, 2, 12]))
console.log(tarif(15 , 3, [15, 10, 20]))


function wisard(x, y , z){
    let own = x
    counter = 1
    for (let i=0; i < y; i++){
        if(z[i][2]== own){
            own = z[i][0]
            counter +=1
        }
    }

    return `${own}\n${counter}`
}

console.log(wisard("A", 3, ["B A","C B","D A"]))