import { Vehicule } from "./Vehicule";
export class Moto extends Vehicule {
    constructor(marque:string, modele:string, immatriculation:string, couleur:string, kilometrage:number, prix:number, anneeCirculation:number){
        super(marque,modele,immatriculation,couleur,kilometrage,prix,anneeCirculation,"Moto");
    }
}