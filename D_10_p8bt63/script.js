//Zadatak 1
let spisak = ["Mleko", "Brašno", "Ulje", "Voda", "Piletina", "Kafa", "Hleb", "Banane", "Limun"];
let lista = `<ul>`;
for (i = 0; i < spisak.length; i++){
    lista += `<li>${spisak[i]}</li>`;
}
lista += `</ul>`;
document.body.innerHTML += lista;

//Zadatak 2
let KosKlubovi = ["Crvena zvezda", "Borac", "Dunav", "Dynamic", "Kolubara", "Metalac", "Partizan"];
let tabela = `<table>`;
for (i = 0; i < KosKlubovi.length; i++){
    tabela += `<tr><td>${KosKlubovi[i]}</td></tr>`;
}
tabela += `</table>`;
document.body.innerHTML += tabela;


//Zadatak 3
let nizSlika = ["1.jpg", "2.jpg", "3.jpg"];

for(i = 0; i < nizSlika.length; i++){
    let fotografija = `<img src="${nizSlika[i]}">`;
    document.body.innerHTML += fotografija;    
}

