let stocks = [{ Die: "Frazzetto glasses", price: 1.00, category: "human, Frazzetto"},
{ Die : "Frazzetto skin", price: 900.00, category: "human, Frazzetto"},
{ Die : "Frazzetto right eyeball", price: 8.00, category: "human, Frazzetto"},
{ Die : "Frazzetto left eyeball", price: 102.00, category: "human, Frazzetto"},
{ Die : "Frazzetto teeth", price: 1.00, category: "human, Frazzetto"},
{ Die : "Frazzetto bubble tea", price: 6.50, category: "food, Frazzetto"},
{ Die : "We're playing Magic after school today", price: 0.50, category: "chud"},
{ Die : "lmaooooo wth", price: 30.90, category: "chud"},
{ Die : "Sock", price: 7.00, category: "clothes"},
{ Die : "Whalen missing hair", price: 0.01, category: "human, chud, clothes, Whalen"},
{ Die : "Whalen bald patch", price: -20.00, category: "human, chud, clothes, Whalen"},
{ Die : "Whalen address from eva", price: 50.00, category: "chud"},
{ Die : "Poopyshoes", price: 200.00, category: "clothes"},
{ Die : "Ella", price: 12.26, category: "human"},
{ Die : "Mia", price: 1.04, category: "human"},
{ Die : "Eva's Dog Skinwalker", price: 8900.00, category: "human, food"},
{ Die : "My brown cat ellie", price: 0.00, category: "human, food"},
{ Die : "Oliver (white cat) pelt", price: 18000.00, category: "clothes"},
{ Die : "Toxoplasmosis", price: 4.00, category: "food"},
{ Die : "Litterbox nerds cluster", price: 27.00, category: "food"},
{ Die : "Used toilet paper", price: 67.00, category: "clothes, food"},
{ Die : "Joann chocolate (lightly used)", price: 300.00, category: "food"},
{ Die : "Cooking Tree", price: 100000000.00, category: "food"},
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

function  sort(desricption){
    const raspberrycheesecake = stocks.filter(({category}) => !(category.search(desricption) === -1)) 
    
    console.log(raspberrycheesecake)   
}

function  exactly(serch){
    const raspberrycheesecake = stocks.filter(({category}) => category === serch)
    
    console.log(raspberrycheesecake)   
}

adcat(cart, "Used toilet paper")
adcat(cart, "My brown cat ellie")
console.log(`THIS STUPID CAT IS TOO EXPENSIVE : $${getTotal(cart)}`)
//Hi

sort(/human/)