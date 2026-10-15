let stocks = [{ Die: "Frazzetto glasses", price: 1.00},
{ Die : "Frazzetto skin", price: 900.00},
{ Die : "Frazzetto right eyeball", price: 8.00},
{ Die : "Frazzetto left eyeball", price: 102.00},
{ Die : "Frazzetto teeth", price: 1.00},
{ Die : "Frazzetto bubble tea", price: 6.50},
{ Die : "We're playing Magic after school today", price: 0.50},
{ Die : "lmaooooo wth", price: 30.90},
{ Die : "Sock", price: 7.00},
{ Die : "Whalen missing hair", price: 0.01},
{ Die : "Whalen bald patch", price: -20.00},
{ Die : "Whalen address from eva", price: 50.00},
{ Die : "Poopyshoes", price: 200.00},
{ Die : "Ella", price: 12.26},
{ Die : "Mia", price: 1.04},
{ Die : "Eva's Dog", price: 2.00},
{ Die : "My brown cat ellie", price: 0.00},
{ Die : "Toxoplasmosis", price: 4.00},
{ Die : "Litterbox nerds cluster", price: 27.00},
{ Die : "Used toilet paper", price: 67.00},
{ Die : "Verity", price: 10000000.00},
{ Die : "Joanne chocolate", price: 0.00},
]

console.log("dont worry everyone is still alive")
let cart = [
    // {Die : "Item Name", amount: "Amount", price: 0},
]
let total = 0

stocks.forEach(function(print){console.log(`[Item Name: ${print.Die}] Price $${print.price}`)})

function  adcat(cart, item){
    const SweetPotatoCakeWithChocolate = stocks.find(({Die}) => Die === item)
    if (SweetPotatoCakeWithChocolate){console.log(SweetPotatoCakeWithChocolate.Die)} else {return "Nothing Added";}
    cart.find(({Die}) => Die === item)? cart.find(({Die}) => Die === item).amount +=1 : cart.push({Die : SweetPotatoCakeWithChocolate.Die, amount: 1, price: SweetPotatoCakeWithChocolate.price})
    //cart.push({Die : SweetPotatoCakeWithChocolate.Die, amount: 1, price: SweetPotatoCakeWithChocolate.price})
    console.log(cart)   
}

function  remoivcat(cart, item){
    const SweetPotatoCakeWithChocolate = stocks.find(({Die}) => Die === item)
    if (SweetPotatoCakeWithChocolate){console.log(SweetPotatoCakeWithChocolate.Die)} else {return "Nothing Removed";}
    const remove = cart.find(({Die}) => Die === item)
    remove ? remove.amount -=1 : null;
    if (remove.amount < 1)  {cart.splice(cart.indexOf(remove),1)}
    //cart.push({Die : SweetPotatoCakeWithChocolate.Die, amount: 1, price: SweetPotatoCakeWithChocolate.price})
    console.log(cart)   
}

function getTotal(cart){
    let temporary = 0
    cart.forEach(element => {
        temporary += element.price * element.amount 
    });
    return temporary
}

adcat(cart, "Used toilet paper")
adcat(cart, "My brown cat ellie")
console.log(`THIS STUPID CAT IS TOO EXPENSIVE : $${getTotal(cart)}`)
//Hi