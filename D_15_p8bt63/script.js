const request = new XMLHttpRequest();
request.addEventListener("readystatechange", function() {
    if(request.readyState == 4 && request.status == 200){
        let data = JSON.parse(request.responseText);
        console.log(data);

        //3.Ispisati prosečnu visinu svih sportista.
        let suma = 0;
        data.forEach(element => {
            suma += element.visina;
        });
        let prosek = suma / data.length;
        console.log(`Prosecna visina svih sportista je: ${prosek}`);

        //4.Ispisati ime i prezime sportiste sa najmanje transfera (bilo kog ako ima više takvih sportista).
        let najmTransf = data[0].timovi.length;
        let br = 0;
        for(let i = 0; i < data.length; i++){
            if(najmTransf > data[i].timovi.length){
                najmTransf = data[i].timovi.length;
                br = i;
            }
        }
        console.log(`Sportista sa najmanje transfera je: ${data[br].imePrezime}`);

        //5.Ispisati imena i prezimena svih sportista koji su igrali za „Lakers“-e.
        let nizLakersa = [];
        data.forEach(element => {
            if(element.timovi.includes("Lakers")){
                nizLakersa.push(element.imePrezime);
            }
        });
        console.log(nizLakersa);
    } else if(request.readyState == 4){
        console.log("Desila se greska");
    }
});
request.open("GET", "sportisti.json");
request.send();