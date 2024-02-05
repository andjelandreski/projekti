//nivo tezine igre - broj prikazanih slicica
let nizSlika = ["images/img1.png", "images/img2.png", "images/img3.png", "images/img4.png", "images/img5.png", "images/img6.png", "images/img7.png", "images/img8.png", "images/img9.png", "images/img10.png", "images/img11.png", "images/img12.png", "images/img13.png", "images/img14.png", "images/img15.png", "images/img16.png", "images/img17.png", "images/img18.png", "images/img19.png", "images/img20.png", "images/img21.png", "images/img22.png", "images/img23.png", "images/img24.png", "images/img25.png", "images/img26.png", "images/img27.png", "images/img28.png", "images/img29.png", "images/img30.png", "images/img31.png", "images/img32.png", "images/img33.png", "images/img34.png", "images/img35.png", "images/img36.png", "images/img37.png", "images/img38.png", "images/img39.png", "images/img40.png", "images/img41.png", "images/img42.png", "images/img43.png", "images/img44.png", "images/img45.png", "images/img46.png", "images/img47.png", "images/img48.png", "images/img49.png", "images/img50.png"];

//Pozivam radio inpute koji odredjuju nivo igrice:
let inpLako = document.getElementById("lako");
let inpSrednje = document.getElementById("srednje");
let inpTesko = document.getElementById("tesko");
let inpEkspert = document.getElementById("ekspert");
//Pozivam input gde korisnik unosi ime:
let inpName = document.getElementById("name");
//zovem div cards
let divCards = document.getElementById("cards");
let brojacKorisnika = 0;
let aktivnaIgra = false;
let images = ``;
let totalSeconds = 0;
let timer = null;

let brojacOtvorenih = 0;
let otvorenaKart1 = null;
let otvorenaKart2 = null;

let nizUspesnih = [];
let nizKorisnika = [];
let nizVremena = [];
let nizNivoa =[];
let rezultati = [];
let trenutniNivo = null;



 //Mesanje niza slika
 function mesanjeNizaSlika(nizSlika) {
    for(let i = 0; i < nizSlika.length; i++){
        let randomNumber = Math.floor(Math.random() * nizSlika.length);
        let pom = nizSlika[i];
        nizSlika[i] = nizSlika[randomNumber];
        nizSlika[randomNumber] = pom;
    }
    return nizSlika;
}

 function uspesanPogodak(nizUspesnih, id) {
    for(let i = 0; i < nizUspesnih.length; i++) {
        if (nizUspesnih[i] === id) return true;
    }
    return false;
}

function setujTajmer() {
    timer = setInterval(countTimer, 1000);

    function countTimer(){
        ++totalSeconds;
        let hour = Math.floor(totalSeconds/3600);
        let minute = Math.floor((totalSeconds - hour*3600)/60);
        let seconds = totalSeconds - (hour *3600 + minute* 60);
        let pTimer = document.getElementById("count-up-timer");
        pTimer.style.border = "4px solid gold";
        pTimer.style.backgroundColor = "beige";
        pTimer.innerText = hour + ":" + minute + ":" + seconds;
    }
}

function pokreniIgru() {
    setujTajmer();
    brojacOtvorenih = 0;
    otvorenaKart1 = null;
    tvorenaKart2 = null;
    nizUspesnih = [];
    aktivnaIgra = true;
    brojacKorisnika++;
    
    nizSlika = mesanjeNizaSlika(nizSlika);
}

function nizOdabranogNivoa(brojNivoa) {
    let niz = [];
    if (inpLako.checked == true) {
        for(let i = 0; i < 8; i++){
            niz.push(nizSlika[i]);
        }
    }
    return niz;
}

function kreiranjeNizaZaOdabraniNivo(nizSlika, brojNivoa, brojSlikaURedu){
    let niz1 = [];
    let niz2 = [];
    let nizImg = [];
    images = ``;
    for(let i = 0; i < brojNivoa; i++){
        niz1.push(nizSlika[i]);
        niz2.push(nizSlika[i]);
    }

    let konacniNiz = niz1.concat(niz2);
    konacniNiz = mesanjeNizaSlika(konacniNiz);

    for(let i = 0; i < konacniNiz.length; i++){
        nizImg[i] = `<img src="images/img_card.png" id="${i}" >`;
    }
    for(let i = 0; i < nizImg.length; i++){
        images += `${nizImg[i]}`;
        if((i + 1) % brojSlikaURedu == 0){
            //dodajem break za zadat broj slika kao u zadatku
            images += `<br>`;
        }
    }
    divCards.innerHTML = images;
    return konacniNiz;
}

function rezultatIgre () {
    for(let i = 0; i < 100; i++){
        let korisnikVrednost = '';
        let vremeVrednost = '';
        let nivoVrednost = '';
        nivoVrednost = localStorage.getItem((i+1) + "nivo");
        if (nivoVrednost === null || nivoVrednost === '') break;
        korisnikVrednost = localStorage.getItem((i+1) + "korisnik");
        vremeVrednost = localStorage.getItem((i+1) + "vreme");
        if (trenutniNivo === nivoVrednost) {
           let rezultat = {
            korisnik: korisnikVrednost,
            nivo: nivoVrednost,
            vreme: vremeVrednost
           };
           rezultati.push(rezultat);
        }
    }
    rezultati.sort((a, b) => parseFloat(a.vreme) - parseFloat(b.vreme));

}

function addTable(rezultati) {
    var myTableDiv = document.getElementById("container-right");
    var h3 = document.createElement("h3");
    h3.innerText = "Najbolji rezultati";
    myTableDiv.appendChild(h3);
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");
    table.appendChild(tableBody);
    let nasloviUtabeli = ["Mesto", "Korisnicko ime", "Vreme"];
    let brojac = 0;
    for (var i = 0; i < 3; i++) {
        var tr = document.createElement("tr");
        tableBody.appendChild(tr);
        if(i == 0){
            //kada je i = 0 ti meni ispisi th
            for (var j = 0; j < 3; j++) {
                var th = document.createElement("th");
                th.appendChild(document.createTextNode(nasloviUtabeli[j]));
                tr.appendChild(th);
            }
        } else {
            //kada je i sve sem 0 ispisuj mi td
            for (var j = 0; j < 3; j++) {
                var td = document.createElement("td");
                if(j == 0){
                    td.appendChild(document.createTextNode(`${i}.`));
                }
                if(j == 1){
                    td.appendChild(document.createTextNode(`${rezultati[i - 1].korisnik}`));
                }
                if(j == 2){
                    td.appendChild(document.createTextNode(`${rezultati[i - 1].vreme}`));
                }
                tr.appendChild(td);
            }
        }
        brojac++;
    }
    myTableDiv.appendChild(table);
}

function proveravanjeZavrsetkaIgre (br, nivo){
    if (nizUspesnih.length == br) {
        localStorage.setItem(brojacKorisnika +  "korisnik", inpName.value);
        localStorage.setItem(brojacKorisnika +  "vreme", totalSeconds);
        localStorage.setItem(brojacKorisnika + "nivo", nivo);
        /*nizKorisnika.push(brojacKorisnika + "korisnik");
        nizVremena.push(brojacKorisnika + "vreme");
        nizNivoa.push(brojacKorisnika + "nivo");*/
        //petlja da prodjes kroz niz 
        if (confirm('Igra je završena. Da li želite da ponovo otpočete svoju igru?')) {
            totalSeconds = 0;
            clearInterval(timer);
            pokreniIgru();
            nizLako = kreiranjeNizaZaOdabraniNivo(nizSlika, 8, 4);
            aktivnaIgra = false;
            } else {
            rezultatIgre();
            addTable(rezultati);
            console.log(rezultati);
            clearInterval(timer);
        }
    }
}

function igra(e, br, nivo) {
    if(e.target.tagName == "IMG"){
        if (uspesanPogodak(nizUspesnih, e.target.id) || (otvorenaKart1 !== null && otvorenaKart1.id === e.target.id)) return;

        if (brojacOtvorenih === 0) {
            e.target.src = nizLako[e.target.id]
            otvorenaKart1 = e.target;
            brojacOtvorenih++;
            return;
        }
        if (brojacOtvorenih === 1) {
            e.target.src = nizLako[e.target.id]
            otvorenaKart2 = e.target;
            if(otvorenaKart1.src === otvorenaKart2.src){
                nizUspesnih.push(otvorenaKart1.id);
                nizUspesnih.push(otvorenaKart2.id);
                otvorenaKart1 = null;
                otvorenaKart2 = null;
                brojacOtvorenih = 0;
                proveravanjeZavrsetkaIgre(br, nivo);   
            } else {
                brojacOtvorenih++; //ovde ga povecavam na 3ojku da ne bi nista mogao da izvrsava dok ne istekne ovaj tajmer(tj. da se ne bi vratio na 0 i opet krenuo u if-ove)
                //ovde vracam karte jer nisu slike iste  
                setTimeout(() => {
                    otvorenaKart1.src = "images/img_card.png";
                    otvorenaKart2.src = "images/img_card.png";
                    brojacOtvorenih = 0;
                }, 1200);
            }
            return;
        }
        
    }
}

//Aktiviram enter na inpName polju
inpName.addEventListener("keypress", e => {
    if(e.key == "Enter") {
        if(aktivnaIgra) return;
        e.preventDefault();
        //Pisem uslov da inpName ne sme biti prazan ili null
        if(!inpName.value.trim()){
            alert("Upisi korisnicko ime!");
            return;
        }
        pokreniIgru();

        //ako je cekirano .... onda mi prikazi taj level slika
        if(inpLako.checked == true){
            trenutniNivo = 'Lako';
            nizLako = kreiranjeNizaZaOdabraniNivo(nizSlika, 8, 4);

            divCards.addEventListener("click", e => {
                igra(e, 16, "Lako");
            });
        }

        if(inpSrednje.checked == true){
            //kreiranje za level SREDNJE (18*18 slika)
            trenutniNivo = 'Srednje';
            nizLako = kreiranjeNizaZaOdabraniNivo(nizSlika, 18, 6);
            divCards.addEventListener("click", e => {
                igra(e, 36, "Srednje");
            });
        }

        if(inpTesko.checked == true){
            //kreiranje za level TESKO (32*32)
            trenutniNivo = 'Tesko';
            nizLako = kreiranjeNizaZaOdabraniNivo(nizSlika, 32, 8);

            divCards.addEventListener("click", e => {
                igra(e, 64, "Tesko");
            });
        }

        if(inpEkspert.checked == true){
            //kreiranje za level TESKO (50*50)
            trenutniNivo = 'Ekspert';
            nizLako = kreiranjeNizaZaOdabraniNivo(nizSlika, 50, 10);

            divCards.addEventListener("click", e => {
                igra(e, 100, "Ekspert");
            });
        }
    }
});

