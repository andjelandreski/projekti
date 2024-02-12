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
        if(vreme.getDate() == new Date().getDate()){
            return `${vreme.getHours().toString().padStart(2, '0')}:${vreme.getMinutes().toString().padStart(2, '0')}`;
        } else {
            return `${vreme.getDate().toString().padStart(2, '0')}.${(vreme.getMonth()+1).toString().padStart(2, '0')}.${vreme.getFullYear().toString().padStart(2, '0')}. - ${vreme.getHours().toString().padStart(2, '0')}:${vreme.getMinutes().toString().padStart(2, '0')}`;
        }
        
    }

    templateLi(data, trenutni){
        if (data.username === trenutni) {
            return `<li class="liRight">${data.username}: ${data.message}<br>${this.formatDate(data.created_at.toDate())}
            <br><i class="fa fa-trash"></i></li>`;
        }
        return `<li>${data.username}: ${data.message}<br>${this.formatDate(data.created_at.toDate())}<br><i class="fa fa-trash"></i></li>`;
    }

    delete() {
        this.list.innerHTML = "";
    }

    changeColor(btn, trenutni){
        btn.classList.remove('buttons');
        btn.classList.add('color-plum');
        
        trenutni.classList.remove('color-plum');
        trenutni.classList.add('buttons');
    }
}
