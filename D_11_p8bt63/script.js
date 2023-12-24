//Zadatak 1

let nizTemp = [1, 10, 42, 54, 12];

let najblizaProsecnoj = niz => {
    let suma = 0;
    let prosecnaTemp = 0;
    let najblizaVrednost = nizTemp[0];
    niz.forEach(t => {
        suma += t;
    });
    prosecnaTemp = suma / niz.length;
    niz.forEach(t => {
        if(Math.abs(t - prosecnaTemp) < Math.abs(t - najblizaVrednost))
        {
            najblizaVrednost = t;
        }
    });
    return najblizaVrednost;
}
console.log(najblizaProsecnoj(nizTemp));

//Zadatak 2
let ispisFunkcije = niz => {
    let maxVred = niz[0];
    let minVred = niz[0];
    niz.forEach(t => {
        if(maxVred < t){
            maxVred = t;
        }
        if(minVred > t){
            minVred = t;
        }
    });
    let najblizaProsecnaVred = najblizaProsecnoj(niz);
    let ispis = ``;
    niz.forEach(t => {
        if(maxVred == t){
            ispis += `<h3 style="color: red">${t}</h3>`;
        }
        if(minVred == t){
            ispis += `<h3 style="color: blue">${t}</h3>`;
        }
        if(najblizaProsecnaVred == t){
            ispis += `<h3 style="color: yellow">${t}</h3>`;
        } 
        if (t != maxVred && t != minVred && t != najblizaProsecnaVred) {
            ispis += `<h3 style="color: black">${t}</h3>`;
        }
    
    });
    document.body.innerHTML += ispis;
}
ispisFunkcije(nizTemp);