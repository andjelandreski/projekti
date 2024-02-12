import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

//DOM
let ul = document.querySelector("ul");
let unosPoruke = document.getElementById("unosPoruke");
let btnSlanjePor = document.getElementById("btnSlanjePor");
let inpKorisIme = document.getElementById("korisnickoIme");
let btnKorisIme = document.getElementById("btnKorisIme");
let btnGeneral = document.getElementById("btnGeneral");
let btnJs= document.getElementById("btnJs");
let btnHomeworks = document.getElementById("btnHomeworks");
let btnTests = document.getElementById("btnTests");
let notification = document.getElementById("notification");
let trenutniBtn = document.getElementById("btnGeneral");
let inpColor =  document.getElementById("inpColor");
let btnMenjanjeBoje = document.getElementById("btnMenjanjeBoje");
let section = document.getElementById("prikazPoruka");

//Lokalna memorija
let username = "anonymus";
if(localStorage.username){
    username = localStorage.username;
}

let backgroundColor = localStorage.getItem("color");
section.style.backgroundColor = backgroundColor;
document.body.style.backgroundColor = backgroundColor;
let sobaUkojojSeNalazim = "#general";
//Objekti
let chatroom = new Chatroom(sobaUkojojSeNalazim, username);
//chatroom.username = "Pera"; //Testiram seter za usernmae
let chatui = new ChatUI(ul);

//Prikaz poruka na stranici
chatroom.getChats(data => {
    chatui.list.innerHTML += chatui.templateLi(data, username);
    //templateLi(data);
});

//chatroom.addChat("Dobro nam dosli");

btnSlanjePor.addEventListener("click", (e)=> {
    e.preventDefault();
    if(!unosPoruke.value.trim()){
        alert("Unesite sadržaj poruke!");
        return;
    }
    chatroom.addChat(unosPoruke.value);
    unosPoruke.value = "";
});

btnKorisIme.addEventListener("click", ()=> {
    //e.preventDefault();
    if(!inpKorisIme.value.trim()){
        alert("Unesi ispravno korisničko ime!");
        return;
    }
    if(inpKorisIme.value.length < 2 || inpKorisIme.value.length > 10){
        alert("Unesi ispravno korisničko ime! Dužina korisničkog imena mora imati između 2 i 10 karaktera.");
        return;
    }
    let novoKorisIme = inpKorisIme.value;
    chatroom.username = novoKorisIme;
    notification.innerHTML = `<p id="notificationPar">Korisnicko ime: ${novoKorisIme}</p>`;
    setTimeout(function() {
        notification.innerHTML = "";
        location.reload();
    }, 3000)
    localStorage.setItem("username", novoKorisIme);
    inpKorisIme.value = "";
});
 

btnGeneral.addEventListener("click", (e)=> {
    e.preventDefault();
    chatui.delete();
    chatui.changeColor(btnGeneral, trenutniBtn);
    trenutniBtn = btnGeneral;
    sobaUkojojSeNalazim = "#general";
    localStorage.setItem("room", sobaUkojojSeNalazim);
    chatroom.room = sobaUkojojSeNalazim;
    chatroom.getChats(data => {
        chatui.list.innerHTML += chatui.templateLi(data, chatroom.username);
    });
});

btnJs.addEventListener("click", (e)=> {
    e.preventDefault();
    chatui.delete();
    chatui.changeColor(btnJs, trenutniBtn);
    trenutniBtn = btnJs;
    sobaUkojojSeNalazim = "#js";
    localStorage.setItem("room", sobaUkojojSeNalazim);
    chatroom.room = sobaUkojojSeNalazim;
    chatroom.getChats(data => {
        chatui.list.innerHTML += chatui.templateLi(data, chatroom.username);
    });
});

btnHomeworks.addEventListener("click", (e)=> {
    e.preventDefault();
    chatui.delete();
    chatui.changeColor(btnHomeworks, trenutniBtn);
    trenutniBtn = btnHomeworks;
    sobaUkojojSeNalazim = "#homeworks";
    localStorage.setItem("room", sobaUkojojSeNalazim);
    chatroom.room = sobaUkojojSeNalazim;
    chatroom.getChats(data => {
        chatui.list.innerHTML += chatui.templateLi(data, chatroom.username);
    });
});

btnTests.addEventListener("click", (e)=> {
    e.preventDefault();
    chatui.delete();
    chatui.changeColor(btnTests, trenutniBtn);
    trenutniBtn = btnTests;
    sobaUkojojSeNalazim = "#tests";
    localStorage.setItem("room", sobaUkojojSeNalazim);
    chatroom.room = sobaUkojojSeNalazim;
    chatroom.getChats(data => {
        chatui.list.innerHTML += chatui.templateLi(data, chatroom.username);
    });
});


btnMenjanjeBoje.addEventListener("click", (e)=>{
    e.preventDefault();
    backgroundColor = inpColor.value
    section.style.backgroundColor = backgroundColor;
    document.body.style.backgroundColor = backgroundColor;

    localStorage.setItem("color", backgroundColor);
});

/*console.log(ul);
console.log(ul.lastChild);
let li = document.getElementsByTagName("li");
console.log(li);
console.log(li.lastElementChild);
/*kanta.addEventListener("click", (e)=> {
    console.log(`kliknuo si`);
    /*if (confirm('Da li ste sigurni da želite da obrišete ovu poruku?')) {
        console.log(`stisnuto je ok`);
        } else {
        console.log(`nije ok`);
    }
});*/
