let pitanje1 = {
    tekst: "Koliko žica ima violina?",
    odgovori: ["Četiri", "Osam", "Pet", "Šest"],
    indexKorekOdg: 0
}
let pitanje2 = {
    tekst: "Šta je korona u muzici?",
    odgovori: ["Oznaka koja služi za kraće trajanje note", "Oznaka koja služi za duže trajanje note", "Nota", "Pauza"],
    indexKorekOdg: 1
}
let pitanje3 = {
    tekst: "Koliko osmina staje u jedan takt koji ima trajanje četiri četvrtine?",
    odgovori: ["Pet", "Deset", "Dve", "Osam"],
    indexKorekOdg: 3
}
let pitanje4 = {
    tekst: "Ko je napisao Čarobnu frulu?",
    odgovori: ["Petar Iljič Čajkovski", "Stevan Mokranjac", "Volfgang Amadeus Mocart", "Ludvig van Betoven"],
    indexKorekOdg: 2
}
let pitanje5 = {
    tekst: "Šta je suprotno od dura?",
    odgovori: ["Mol", "Harmonija", "Melodija", "Kancona"],
    indexKorekOdg: 0
}
let pitanje6 = {
    tekst: "Koliko simfonija je napisao Betoven?",
    odgovori: ["Tri", "Dvanaest", "Sedam", "Devet"],
    indexKorekOdg: 3
}
let pitanje7 = {
    tekst: "Kako je napisao Rukoveti?",
    odgovori: ["Stanislav Binički", "Josip Slavenski", "Stevan Mokranjac", "Franc List"],
    indexKorekOdg: 2
}
let pitanje8 = {
    tekst: "Koji takt od ponuđenih je najtipičniji takt za muziku u južnoj Srbiji?",
    odgovori: ["Četiri četvrtine", "Sedam osmina", "Dve četvrtine", "Alabreve"],
    indexKorekOdg: 1
}
let pitanje9 = {
    tekst: "Ko je napisao balet 'Labudovo jezero'?",
    odgovori: ["Petar Iljič Čajkovski", "Nikolaj Rimski-Korsakov", "Johan Sebastijan Bah", "Stevan Mokranjac"],
    indexKorekOdg: 0
}
let pitanje10 = {
    tekst: "Kom muzičkom razdoblju je Čajkovski pripadao?",
    odgovori: ["Barok", "Klasicizam", "Romantizam", "Renesansa"],
    indexKorekOdg: 2
}
let pitanje11 = {
    tekst: "Ko je napisao muziku za himnu 'Bože pravde'?",
    odgovori: ["Stevan Mokranjac", "Davorin Jenko", "Josip Slavenski", "Kosta Manojlolvić"],
    indexKorekOdg: 1
}
let pitanje12 = {
    tekst: "Šta od ponuđenih spada u ples?",
    odgovori: ["Arija", "Simfonija", "Sonata", "Valcer"],
    indexKorekOdg: 3
}
let svaPitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10, pitanje11, pitanje12];
let btnPosalji = document.createElement("input");
btnPosalji.type = "button";
btnPosalji.value = "Posalji odgovore";
let btnNovaPitanja = document.createElement("input");
btnNovaPitanja.type = "button";
btnNovaPitanja.value = "Nova pitanja";
let pitanjKojaPrikazujem = [];

for(let i = 0; i < svaPitanja.length; i++){
    let randomNumber = Math.floor(Math.random() * svaPitanja.length);
    let pom = svaPitanja[i];
    svaPitanja[i] = svaPitanja[randomNumber];
    svaPitanja[randomNumber] = pom;
}

let redBr = 1;

for(let i = 0; i < 5; i++){
    pitanjKojaPrikazujem[i] = svaPitanja[i];
    document.body.innerHTML += `<h4>${redBr}. ${svaPitanja[i].tekst}</h4>`;
    let br = 0;
    let odgovorHTML = ``;
    while(br < 4){
        odgovorHTML = `<input type="radio" name="radioBtn${i}" value="${br}" class="radio"`;        
        if(br == 0){
            odgovorHTML += ` checked>${svaPitanja[i].odgovori[br]}<br>`; 
        } else { 
            odgovorHTML += `>${svaPitanja[i].odgovori[br]}<br>`;
        }
        
        document.body.innerHTML += odgovorHTML;
        br++;
    }
    
    redBr++;
}


redBr = 0;
btnPosalji.addEventListener("click", (e) =>{
    let s = ``;
    for(let i = 0; i < 5; i++){
        redBr = 0;
        while(redBr < 4)
        {
            document.getElementsByName(`radioBtn${i}`)[redBr].disabled = true;
            redBr++;
        }
    }

    for(let i = 0; i < 5; i++){
        let checkedOdg = document.querySelector(`input[name='radioBtn${i}']:checked`);
        if(parseInt(pitanjKojaPrikazujem[i].indexKorekOdg) == parseInt(checkedOdg.value)){
                    s += `<p style="color:green">Odgovorili ste tačno na ${i + 1}. pitanje.</p>`;
                } else {
                    s += `<p style="color:red">Niste odgovorili tačno na ${i + 1}. pitanje.</p>`;
                }
    }
    let div = document.createElement("div");
    div.innerHTML = s;
    document.body.appendChild(div);

    e.preventDefault();
});

btnNovaPitanja.addEventListener("click", () =>{
    window.location.reload();
});
document.body.appendChild(btnPosalji);
document.body.appendChild(btnNovaPitanja);

