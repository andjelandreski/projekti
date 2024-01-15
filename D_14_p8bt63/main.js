import Knjiga from "./knjiga.js";

let knjiga1 = new Knjiga("Trajan", "Andjelko Krstic", 1932, 800, 1500);
let knjiga2 = new Knjiga("Secanja", "Andjelko Krstic", 2021, 174, 770);
let knjiga3 = new Knjiga("Zlocin i kazna", "Fjodor Mihajlovic Dostojevski", 2019, 714, 1600);
let knjige = [knjiga1, knjiga2, knjiga3];

knjige.forEach(k => {
    k.stampaj();
});

knjige.forEach(k => {
    if(k.dugackoIme() == true){
        console.log(`Ime je dugacko autoru: ${k.autor}`);
    }
});

knjige.forEach(k => {
    if(k.skupa() == true && k.obimna() == true){
        k.stampaj();
    }
});

let ukupnaCena = niz => {
    let suma = 0;
    niz.forEach(k => {
        suma += k.cena;
    });
    return suma;
}
console.log(ukupnaCena(knjige));

let prosecnaCena = niz => {
    let prosecnaCena = ukupnaCena(niz) / niz.length;
    return prosecnaCena;
}
console.log(prosecnaCena(knjige));

let prosecnaStranica = niz => {
    let sumaSvihCena = ukupnaCena(niz);
    let brStranicaSvih = 0;
    let rezultat = 0;
    niz.forEach(k => {
        brStranicaSvih += k.brojStrana;
    });
    rezultat = brStranicaSvih / sumaSvihCena;
    console.log(brStranicaSvih);
    return rezultat;
}
console.log(prosecnaStranica(knjige)); 