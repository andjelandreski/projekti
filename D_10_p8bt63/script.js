//Zadatak 1
let spisak = ["Mleko", "Brašno", "Ulje", "Voda", "Piletina", "Kafa", "Hleb", "Banane", "Limun"];
let nabavka = niz => {
    let lista = `<ul>`;
    for (i = 0; i < niz.length; i++){
    lista += `<li>${niz[i]}</li>`;
    }
lista += `</ul>`;
document.body.innerHTML += lista;
}
nabavka(spisak);


//Zadatak 2
let KosKlubovi = ["Crvena zvezda", "Borac", "Dunav", "Dynamic", "Kolubara", "Metalac", "Partizan"];
let kosarka = niz => {
    let tabela = `<table>`;
    for (i = 0; i < niz.length; i++){
        tabela += `<tr><td>${niz[i]}</td></tr>`;
    }
    tabela += `</table>`;
    document.body.innerHTML += tabela;
}
kosarka(KosKlubovi);


//Zadatak 3
let nizSlika = ["1.jpg", "2.jpg", "3.jpg"];
let fotografije = niz => {
    for(i = 0; i < niz.length; i++){
        let fotografija = `<img src="${niz[i]}">`;
        document.body.innerHTML += fotografija; 
    }
}
fotografije(nizSlika);

