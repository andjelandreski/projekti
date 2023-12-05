//Zadatak 1
let v = 30;
let n = 15;

if(v/n >= 3){
    document.write("<h1 style='color:green;'>DA</h1>");
} else {
    document.write("<h1 style='color:red;'>NE</h1>");
    document.write('Potrebno je da napusti lokal: ' + (n-v/3));
}

//Zadatak 2
let stanovnici = 1000;
let testirani = 700;
let pozitivni = 500;

if(pozitivni > stanovnici*0.1 && pozitivni > testirani*0.3){
    document.write("<h1 style='color:red;'>VANREDNO STANJE</h1>");
}