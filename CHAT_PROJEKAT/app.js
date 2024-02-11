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

//Lokalna memorija
let username = "anonymus";
if(localStorage.username){
    username = localStorage.username;
}

let sobaUkojojSeNalazim = "#general";
//Objekti
let chatroom = new Chatroom(sobaUkojojSeNalazim, username);
//chatroom.username = "Pera"; //Testiram seter za usernmae
let chatui = new ChatUI(ul);

//Prikaz poruka na stranici
chatroom.getChats(data => {
    chatui.list.innerHTML += chatui.templateLi(data);
    //templateLi(data);
});

//chatroom.addChat("Dobro nam dosli");

btnSlanjePor.addEventListener("click", (e)=> {
    e.preventDefault();
    chatroom.addChat(unosPoruke.value);
    unosPoruke.value = "";
});

btnKorisIme.addEventListener("click", (e)=> {
    e.preventDefault();
    let novoKorisIme = inpKorisIme.value;
    chatroom.username = novoKorisIme;
    localStorage.setItem("username", novoKorisIme);
    inpKorisIme.value = "";
});

btnGeneral.addEventListener("click", (e)=> {
    e.preventDefault();
    chatui.delete();
    sobaUkojojSeNalazim = "#general";
    localStorage.setItem("room", sobaUkojojSeNalazim);
    chatroom.room = sobaUkojojSeNalazim;
    chatroom.getChats(data => {
        chatui.list.innerHTML += chatui.templateLi(data);
    });
    
});

btnJs.addEventListener("click", (e)=> {
    e.preventDefault();
    chatui.delete();
    sobaUkojojSeNalazim = "#js";
    localStorage.setItem("room", sobaUkojojSeNalazim);
    chatroom.room = sobaUkojojSeNalazim;
    chatroom.getChats(data => {
        chatui.list.innerHTML += chatui.templateLi(data);
    });
});

btnHomeworks.addEventListener("click", (e)=> {
    e.preventDefault();
    chatui.delete();
    sobaUkojojSeNalazim = "#homeworks";
    localStorage.setItem("room", sobaUkojojSeNalazim);
    chatroom.room = sobaUkojojSeNalazim;
    chatroom.getChats(data => {
        chatui.list.innerHTML += chatui.templateLi(data);
    });
});

btnTests.addEventListener("click", (e)=> {
    e.preventDefault();
    chatui.delete();
    sobaUkojojSeNalazim = "#tests";
    localStorage.setItem("room", sobaUkojojSeNalazim);
    chatroom.room = sobaUkojojSeNalazim;
    chatroom.getChats(data => {
        chatui.list.innerHTML += chatui.templateLi(data);
    });
});