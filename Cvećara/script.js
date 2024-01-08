let cenaRuze = 150;
let cenaLjiljana = 120;
let cenaGerbera = 70;
let brojRuza = document.getElementById("ruze");
let brojLjiljana = document.getElementById("ljiljani");
let brojGerbera = document.getElementById("gerberi");
let cenaDodPoklona = 500;
let brojDodPoklona = document.querySelectorAll("input[name='dodPokloni']");
let btnIzracunaj = document.getElementById("btnIzracunaj");
let btnResetuj = document.getElementById("btnReset");
let placanjeKes = document.getElementById("kes");
let placanjeKart = document.getElementById("kartica");
let div2 = document.getElementsByClassName("grid2");
let slikaRuze = "";
let slikaGerbera = "";
let slikaLjiljana = "";
let s = ``;

btnIzracunaj.addEventListener("click", ()=>{
    s += `<h3>Vaša porudzbina:</h3>`;
    for(let i = 0; i < brojRuza.value; i++){
        slikaRuze += "<img src='slike/ruza.png'>";
    }
    s += `<div>${slikaRuze}</div>`;
    
    for(let i = 0; i < brojLjiljana.value; i++){
        slikaLjiljana += "<img src='slike/ljiljan.png'>";
    }
    s += `<div>${slikaLjiljana}</div>`;

    for(let i = 0; i < brojGerbera.value; i++){
        slikaGerbera += "<img src='slike/gerber.png'>";
    }
    s += `<div>${slikaGerbera}</div>`;

    let br = 0;
    let ukupnaCena = 0;
    for (let i=0; i < brojDodPoklona.length; i++) {
        if (brojDodPoklona[i].checked){
            br++;
            s += `<p>+ ${brojDodPoklona[i].value}</p>`;
        }
    }
    ukupnaCena = br * cenaDodPoklona + brojRuza.value * cenaRuze + brojLjiljana.value * cenaLjiljana + brojGerbera.value * cenaGerbera;
    let ukupCenaSaPopustom = 0;
    if(placanjeKart.checked === true){
        if(ukupnaCena > 2000){
            ukupCenaSaPopustom = ukupnaCena * 0.9;
            s += `<p>Cena bez popusta je: ${ukupnaCena} din.</p><h2>Cena sa popustom je: ${ukupCenaSaPopustom} din.</h2>`;
        } else{
            s += `<h2>Ukupna cena je: ${ukupnaCena} din.</h2>`;
        }
    } else if(placanjeKes.checked === true){
        s += `<h2>Ukupna cena je: ${ukupnaCena} din.</h2>`;
    } 
    let velikiDiv = document.createElement("div");
    velikiDiv.innerHTML = s;
    document.body.appendChild(velikiDiv);
});

btnResetuj.addEventListener("click", ()=> {
    location.reload();
});