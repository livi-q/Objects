let stocks = [{ InputDeviceInfo: "Frazzetto glasses", price: 1.00},
{ Die : "Frazzetto skin", price: 900.00},
{ Die : "Frazzetto right eyeball", price: 8.00},
{ Die : "Frazzetto left eyeball", price: 102.00},
{ Die : "Frazzetto teeth", price: 1.00},
{ Die : "Frazzetto bubble tea", price: 6.50},
{ Die : "We're playing Magic after school today", price: 0.50},
{ Die : "lmaooooo wth", price: 30.90},
{ Die : "sock", price: 7.00},
{ Die : "Whalen missing hair", price: 0.01},
{ Die : "Whalen bald patch", price: -20.00},
{ Die : "Whalen address from eva", price: 50.00},
{ Die : "poopyshoes", price: 200.00},
{ Die : "Ella", price: 12.26},
{ Die : "Mia", price: 1.04},
{ Die : "Eva's Dog", price: 2.00},
{ Die : "My brown cat", price: 0.00},
{ Die : "Toxoplasmosis", price: 4.00},
{ Die : "Litterbox nerds cluster", price: 27.00},
{ Die : "used toilet paper", price: 67.00},
{ Die : "Verity", price: 10000000.00},
{ Die : "Joanne chocolate", price: 0.00},
]

console.log("dont worry everyone is still alive")

Object.entries(stocks).forEach(([key, value]) => {
        stocks.forEach(function(print){console.log(`[Name: ${print.Die}] Price ${print.price}`)})
    })
