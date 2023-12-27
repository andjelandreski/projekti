
let dan = {
    //Zadatak 1
    nizTemp: [10, 14, 17, 25, -2],
    kisa: true,
    sunce: false,
    oblacno: true,

    tropskiDan: function() {
        let topaoDan = false;
        this.nizTemp.forEach(t => {
            if(t > 24){
                topaoDan = true;
            }
        });
        return topaoDan;
    },

    //Zadatak 2
    //Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
    neuobicajenDan: function() {
        let neuobicajen = false;
            if(this.kisa == true){
                this.nizTemp.forEach(t => {
                    if(t < -5){
                        neuobicajen = true;
                    }
                });
            }
            if(this.oblacno == true){
                this.nizTemp.forEach(t => {
                    if(t > 25){
                        neuobicajen = true;
                    }
                });
            }
            if(this.kisa == true && this.sunce == true && this.oblacno == true){
                neuobicajen = true;
           }
        return neuobicajen;
    }
}
console.log(dan.tropskiDan());
console.log(dan.neuobicajenDan());
