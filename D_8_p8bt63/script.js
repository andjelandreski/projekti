//Zadatak 1

let lista = `<ul>`;
let br = 1;
for(i = 1; i <= 10; i++){
    if(br % 2 == 1){
        lista += `<li>Element ${i}</li>`;
    } 
    if (br % 2 == 0){
        lista += 
        `<li>Element ${i++}
            <ul>
                <li class="ljubicasto">Element ${i}</li>
            </ul>
        </li>`;
    }    
    br++;
}
lista += `</ul>`;
document.body.innerHTML += lista;

//Zadatak 2
let span = ``;
let red = 1;
for (i = 1; i <= 64; i++){
    if (red % 2 == 1){
        if (i % 2 == 1) {
            span = `<span class="bela"> ${i} </span>`;
        }
        if (i % 2 == 0){
            span =`<span class="crna"> ${i} </span>`;
        }
    }
    if (red % 2 == 0){
        if (i % 2 == 1) {
            span = `<span class="crna"> ${i} </span>`;
        }
        if (i % 2 == 0){
            span =`<span class="bela"> ${i} </span>`;
        }
    }
    document.body.innerHTML += span;
    if (i % 8 == 0) {
    document.body.innerHTML += `<br><br><br>`;
    red++;
    }
}
