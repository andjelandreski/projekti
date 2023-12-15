//Zadatak 1
function ispisParagrafa (a, s){
    let paragraf = `<p style= "font-size: ${a}px">${s}</p>`;
    document.body.innerHTML += paragraf;
}
ispisParagrafa(31, "hello");

//Zadatak 2
function dodajSliku(n, b, c, d){
    let slika = ``;
    for(i = 1; i <= n; i++){
        if(i % 2 == 0){
            slika += `<img src="${d}" style="border: 10px solid ${b}">`;
            
        } else {
            slika += `<img src="${d}" style= "border: 10px solid ${c}">`;
        }
    }
    document.body.innerHTML += slika;
}
dodajSliku(10, "red", "blue", "1.jpg");