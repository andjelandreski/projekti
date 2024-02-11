export class ChatUI {
    constructor(l){
        this.list = l;
    }

    set list(l){
        this._list = l;
    }

    get list() {
        return this._list;
    }

    formatDate(vreme) {
        return `${vreme.getDate()}.${vreme.getMonth()+1}.${vreme.getFullYear()}. - ${vreme.getHours()}:${vreme.getMinutes()}`;
    }
    
    templateLi(data){
        return `<li>${data.username}: ${data.message}<br>${this.formatDate(data.created_at.toDate())}</li>`;
    }

    delete() {
        this.list.innerHTML = "";
    }

}
