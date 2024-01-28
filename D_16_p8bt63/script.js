//Domaci broj 16

db.collection("movies").doc("film1")
.set( {
    name: "Moja velika mrsna pravoslavna svadba",
    release_year: 2002,
    director: {
        ime: "Dzoel",
        prezime: "Zvik"
    },
    genres: ["komedija", "romansa"],
    rating: 9.7,
})
.then(() => {
    console.log("Film je uspesno dodat");
})
.catch((e) => {
    console.log(`Greska: ${e}`);
})

db.collection("movies").doc("film2")
.set( {
    name: "Poslednja pesma",
    release_year: 2010,
    director: {
        ime: "Dzuli",
        prezime: "Robinson"
    },
    genres: ["drama", "romansa"],
    rating: 8.5,
})
.then(() => {
    console.log("Film je uspesno dodat");
})
.catch((e) => {
    console.log(`Greska: ${e}`);
})

db.collection("movies").doc("film3")
.set( {
    name: "Beleznica",
    release_year: 2004,
    director: {
        ime: "Nick",
        prezime: "Cassavetes"
    },
    genres: ["romansa", "drama"],
    rating: 9.4,
})
.then(() => {
    console.log("Film je uspesno dodat");
})
.catch((e) => {
    console.log(`Greska: ${e}`);
})

//Menja podatke o nekim filmovima u bazi
db.collection("movies").doc("film1")
.update ({
    rating: 9.9
})
.then(() => {
    console.log("Podaci u filmu su uspesno izmenjeni");
})
.catch((e) => {
    console.log(`Greska: ${e}`);
})


//Dodaje žanr nekom filmu
db.collection("movies").doc("film2")
.update ({
    genres : firebase.firestore.FieldValue.arrayUnion("tinejdz-film")
})
.then(() => {
    console.log("Uspesno je dodat zanr u filmu");
})
.catch((e) => {
    console.log(`Greska: ${e}`);
})

//Briše žanr nekom filmu
db.collection("movies").doc("film2")
.update ({
    genres: firebase.firestore.FieldValue.arrayRemove("romansa")
})
.then(() => {
    console.log("Podaci u filmu su uspesno obrisani");
})
.catch((e) => {
    console.log(`Greska: ${e}`);
})

//Menja ime ili prezime nekom režiseru.
db.collection("movies").doc("film3")
.update ({
    "director.ime": "Pera"
})
.then(() => {
    console.log("Podaci u filmu su uspesno izmenjeni");
})
.catch((e) => {
    console.log(`Greska: ${e}`);
})