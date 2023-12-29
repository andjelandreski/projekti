let knjiga1 = {
    title: "Trajan",
    author: "Andjelko Krstic",
    image: "slike/knjiga1.png",
    procitano: true
}

let knjiga2 = {
    title: "Secanja",
    author: "Andjelko Krstic",
    image: "slike/knjiga2.jpg",
    procitano: false
}

let knjiga3 = {
    title: "Pripovetke",
    author: "Andjelko Krstic",
    image: "slike/knjiga3.jpg",
    procitano: true
}
let nizKnjiga = [knjiga1, knjiga2, knjiga3];

let tabela = "<table>";
let red = "<tr>";
for(let i = 0; i < nizKnjiga.length; i++){
    red += `<td class="col1"></td><td class="col2"></td></tr>`;
}
tabela += red;
document.body.innerHTML += tabela;

let kol1 = document.querySelectorAll(".col1");
let kol2 = document.querySelectorAll(".col2");
let tab = document.getElementsByTagName("tr");
let nizTab = Array.from(tab);

for(let i = 0; i < kol1.length; i++){
    kol1[i].innerHTML += `<img width="150px" src=${nizKnjiga[i].image}>`;

}
for(let i = 0; i < kol2.length; i++){
    if(nizKnjiga[i].procitano == true){
        kol2[i].innerHTML += `<p style="color:blue">${nizKnjiga[i].title}</p><p style="color:blue">${nizKnjiga[i].author}</p>`;
    } else {
        kol2[i].innerHTML += `<p style="color:grey">${nizKnjiga[i].title}</p><p style="color:grey">${nizKnjiga[i].author}</p>`;
    }
}

let br = 0;
nizTab.forEach(el => {
    if(br % 2 == 0){
        el.style.backgroundColor = "yellow";
    } else {
        el.style.backgroundColor = "beige";
    }
    br++;
});