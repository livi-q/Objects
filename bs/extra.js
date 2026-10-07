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

function die(h, a){
    let count =0
    for (let i =0 ; i < h; i++){
        if(!(a[i][0] >= 120)){
            console.log("height")
            continue;
            
        }
        if(!(a[i][1] >= 12 || a[i][2] === "Y")){
            console.log("age")
            continue;
        }
        count += 1
        console.log(count)
    }

    return count
}

console.log(die(h=6, [
[130, 14, "N"],
[125, 9, "Y"],
[125, 9, "N"],
[110, 15, "Y"],
[120, 12, "N"],
[119, 13, "Y"],
]))