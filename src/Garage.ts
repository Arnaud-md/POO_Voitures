import { Vehicule } from "./Vehicule";

export class Garage {
    private _nom:string
    //private _listeVoitures:Voiture[];
    private _listeVehicules:Vehicule[];


    //constructor(nom:string,listeVoitures:Voiture[]) {
        constructor(nom:string,listeVehicules:Vehicule[]) {
        this._nom=nom;
        this._listeVehicules=listeVehicules;
    }
    public listeVehiculesParSorte(typeVehicule:string):Vehicule[] {
        let liste:Vehicule[]
        liste=[];
        for (let i=0;i<this._listeVehicules.length;i++) {
            if(this._listeVehicules[i].typeVehicule==typeVehicule) {
                liste.push(this._listeVehicules[i]);
            }
        }
        return liste;
    }

    // public cheapestCar():Voiture {
    //     let cheapestCar:Voiture;
    //     cheapestCar=this._listeVoitures[0];
    //     for (let i=0;i<this._listeVoitures.length;i++) {
    //         if (this._listeVoitures[i].prix<cheapestCar.prix) {
    //             cheapestCar=this._listeVoitures[i];
    //         }
    //     }
    //     return cheapestCar;
    // }
    // public sameColor(color:string):Voiture[] {
    //     let sameColorList:Voiture[];
    //     sameColorList=[];
    //     for (let i=0;i<this._listeVoitures.length;i++) {
    //         if (this._listeVoitures[i].couleur==color) {
    //             sameColorList.push(this._listeVoitures[i]);
    //         }
    //     }
    //     return sameColorList;
    // }
    // public cheapestCar():Voiture {
    //     let cheapestCar:Voiture;
    //     cheapestCar=this._listeVoitures[0];
    //     for (let i=0;i<this._listeVoitures.length;i++) {
    //         if (this._listeVoitures[i].prix<cheapestCar.prix) {
    //             cheapestCar=this._listeVoitures[i];
    //         }
    //     }
    //     return cheapestCar;
    // }
    // public sameColor(color:string):Voiture[] {
    //     let sameColorList:Voiture[];
    //     sameColorList=[];
    //     for (let i=0;i<this._listeVoitures.length;i++) {
    //         if (this._listeVoitures[i].couleur==color) {
    //             sameColorList.push(this._listeVoitures[i]);
    //         }
    //     }
    //     return sameColorList;
    // }
}