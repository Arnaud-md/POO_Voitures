import { Garage } from "./Garage";
import { Moto } from "./Moto";
import { Voiture } from "./Voiture";

const voiture1 = new Voiture("renault","Clio","AAA236785BB","bleu",100000,2500,2003);
const voiture2 = new Voiture("citroen","BX","BBB236785CC","rouge",50000,3500,2013);
const voiture3 = new Voiture("peugeot","Coupe","CCC236785DD","bleu",35000,4500,2017);
const voiture4 = new Voiture("renault","Megane","DDD236785EE","jaune",80000,3800,2007);
const voiture5 = new Voiture("audi","A4","EEE236785FF","rouge",60000,4200,2015);
const voiture6 = new Voiture("mercedes","Sport","FFF236785GG","bleu",120000,3100,2002);
const voiture7 = new Voiture("BMW","Coupe","GGG236785HH","bleu",50000,4800,2018);
const moto1 = new Moto("Honda","XZT","HHH26436II","noir",35000,2200,2012);
const moto2 = new Moto("Honda","AWI","III26436JJ","noir",25000,2000,2019);
const monGarage = new Garage("Garage Michel",[voiture1,voiture2,moto1,voiture3,voiture4,voiture5,moto2,voiture6,voiture7]);

console.log("la liste des vehicules de type voiture est : ");
for(let i=0;i<monGarage.listeVehiculesParSorte("Voiture").length;i++) {
    console.log("marque :"+monGarage.listeVehiculesParSorte("Voiture")[i].marque+" ; modele : "+monGarage.listeVehiculesParSorte("Voiture")[i].modele+" ; immatriculation : "+monGarage.listeVehiculesParSorte("Voiture")[i].imatriculation)
}

// console.log("la voiture la moins chere est : marque :"+monGarage.cheapestCar().marque+" ; modele : "+monGarage.cheapestCar().modele+" ; immatriculation : "+monGarage.cheapestCar().imatriculation);

// console.log(" les voitures de couleur bleu sont : ");
// for(let i=0;i<monGarage.sameColor("bleu").length;i++) {
//     console.log("marque :"+monGarage.sameColor("bleu")[i].marque+" ; modele : "+monGarage.sameColor("bleu")[i].modele+" ; immatriculation : "+monGarage.sameColor("bleu")[i].imatriculation)
// }