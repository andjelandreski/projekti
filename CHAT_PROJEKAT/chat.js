class Chatroom {
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chats = db.collection("chats");
    }

    set room(r) {
        this._room = r;
    } 
    
    set username(u) {
        this._username = u;
    }   

    get room() {
        return this._room;
    }

    get username() {
        return this._username;
    }

    //Metod za dodavanje cetova (asinhrona)
    async addChat(message){
        //Kreiranje dokumenta koji zelimo da upisemo u bazu
        let docChat = {
            message: message,
            username: this.username,
            room: this.room,
            created_at: new Date()
        };
        let response = await this.chats.add(docChat); //pamti dokument u bazi
        return response; //vraca promis, na koji moze da se zakaci .then i .catch
    }

    //Metod za ispis dodatnih cetova/dokumenata
    getChats(callback) {
        this.chats
        .where("room", "==", this.room)
        .orderBy("created_at")
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == "added"){
                    callback(change.doc.data()); //prosledili smo callback funkciji change.doc.data i kada dole pozivam getChats prosledjujem nju - to se radi zato sto zelim da svaki put drugacije pozovem getChats (nekad na stranici, nekad u konzoli, itd.) => zato koristimo callback ovde
                }
            });
        });
    }
}

let chatroom1 = new Chatroom("#js", "Stefan");
let chatroom2 = new Chatroom("#random", "Jelena");
let chatroom3 = new Chatroom("#homeworks", "Andjela");
chatroom1.room = "general"; //Testiram seter za room
chatroom2.username = "Pera"; //Testiram seter za username

/*
chatroom1.addChat(`Zdravo svima!`)
    .then(() => {
console.log("Uspesno dodata poruka");
    })
    .catch(err => {
        console.log(`Doslo je do greske: ${err}`);
    });
*/

chatroom1.getChats(data => {
    console.log(data);
});