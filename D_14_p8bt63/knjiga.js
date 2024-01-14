class Knjiga {
    constructor(n, a, g, br, c){
        this.naslov = n;
        this.autor = a;
        this.godIzdanja = g;
        this.brojStrana = br;
        this.cena = c;
    }

    set naslov(n){
        this._naslov = n;
    }

    set autor(a){
        this._autor = a;
    }

    set godIzdanja(g){
        this._godIzdanja = g;
    }

    set brojStrana(br){
        this._brojStrana = br;
    }

    set cena(c){
        this._cena = c;
    }
    
    get naslov() {
        return this._naslov;
    }

    get autor() {
        return this._autor;
    }

    get godIzdanja() {
        return this._godIzdanja;
    }

    get brojStrana() {
        return this._brojStrana;
    }

    get cena() {
        return this._cena;
    }

    stampaj() {
        console.log(`Svi podaci o knjizi: Naslov: ${this.naslov}, autor: ${this.autor}, godina izdanja: ${this.godIzdanja}, broj strana: ${this.brojStrana}, cena: ${this.cena}`);
    }

    obimna() {
        if(this.brojStrana > 600){
            return true;
        } else {
            return false;
        }
    }

    skupa() {
        if(this.cena > 8000){
            return true;
        } else {
            return false;
        }
    }

    dugackoIme () {
        if(this.autor.length > 18){
            return true;
        } else {
            return false;
        }
    }
}
export default Knjiga;