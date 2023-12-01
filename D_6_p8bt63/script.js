//Zadatak broj 1
let suma = 1000;
let autobuskaKarta = suma / 5;
let namestaj = suma / 3;  
let ostatakNovca = suma - (autobuskaKarta + namestaj);

console.log("Za preostali boravak ostalo je: " + ostatakNovca);

//Zadatak broj 2
let knjiga = 40;
let prviDan = 4;
let drugiDan = prviDan + 2;

let preostalaPoglavlja = knjiga - (prviDan + drugiDan);
console.log("Do kraja knjige ostalo je jos " +preostalaPoglavlja +" poglavlja.");

//Zadatak broj 3 
let pera = 1500;
let mika = 2000;
let kusur = 1100;

let cenaDzempera = (pera + mika - kusur) / 2;
console.log("Pera treba da dobije " + (pera - cenaDzempera) + " dinara kusura.")
console.log("Miki treba da ostane " + (mika - cenaDzempera) + " dinara kusura.")
