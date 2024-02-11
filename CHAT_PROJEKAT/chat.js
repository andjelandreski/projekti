class Chatroom {
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chats = db.collection("chats");
        this.unsub = false;
    }

    set room(r) {
        this._room = r;
        if(this.unsub){
            this.unsub();
        }
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
        try{
            //Kreiranje dokumenta koji zelimo da upisemo u bazu
            let docChat = {
                message: message,
                username: this.username,
                room: this.room,
                created_at: new Date()
            };
            let response = await this.chats.add(docChat); //pamti dokument u bazi
            return response; //vraca promis, na koji moze da se zakaci .then i .catch(.try i .catch)
        }
        catch {
            console.error(`Doslo je do greske`, error);
        }
    }

    //Metod za ispis dodatnih cetova/dokumenata
    getChats(callback) {
        this.unsub = this.chats
        .where("room", "==", this.room)
        .orderBy("created_at")
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                //console.log("----- ", change.type);
                if(change.type == "added"){
                    callback(change.doc.data()); //prosledili smo callback funkciji change.doc.data i kada dole pozivam getChats prosledjujem nju - to se radi zato sto zelim da svaki put drugacije pozovem getChats (nekad na stranici, nekad u konzoli, itd.) => zato koristimo callback ovde
                }
            });
        });
    }
}

export{ Chatroom };