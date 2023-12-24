
let dan = {
    //Zadatak 1
    nizTemp: [10, 14, 17, 25, -6],
    nizVreme: ["Sunce", "Kisa", "Oblaci"],

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
    neuobicajenDan: function() {
        let neuobicajen = false;
        this.nizVreme.forEach(t => {
            if(t == "Kisa"){
                this.nizTemp.forEach(t => {
                    if(t < -5){
                        neuobicajen = true;
                    }
                });
            }
            if(t == "Oblaci"){
                this.nizTemp.forEach(t => {
                    if(t > 25){
                        neuobicajen = true;
                    }
                });
            }
            if(t == "Kisa" && t == "Sunce" && t == "Oblaci"){
                neuobicajen = true;
           }
        });
        return neuobicajen;
    }
}
console.log(dan.tropskiDan());
console.log(dan.neuobicajenDan());



