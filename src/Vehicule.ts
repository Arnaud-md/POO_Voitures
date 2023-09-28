export abstract class Vehicule {
    private _marque: string
    private _modele: string
    private _imatriculation: string
    private _couleur: string
    private _kilometrage: number
    private _prix: number
    private _anneeCirculation: number
    private _typeVehicule: string



    //constructor(marque:string, modele:string, immatriculation:string, couleur:string, kilometrage:number, prix:number, anneeCirculation:number) {
    constructor(marque:string, modele:string, immatriculation:string, couleur:string, kilometrage:number, prix:number, anneeCirculation:number, typeVehicule:string) {
        this._marque=marque;
        this._modele=modele;
        this._imatriculation=immatriculation;
        this._couleur=couleur;
        this._kilometrage=kilometrage;
        this._prix=prix;
        this._anneeCirculation=anneeCirculation;
        this._typeVehicule=typeVehicule;
    }

    public get marque(): string {
        return this._marque
    }
    public set marque(value: string) {
        this._marque = value
    }
    public get modele(): string {
        return this._modele
    }
    public set modele(value: string) {
        this._modele = value
    }
    public get imatriculation(): string {
        return this._imatriculation
    }
    public set imatriculation(value: string) {
        this._imatriculation = value
    }
    public get couleur(): string {
        return this._couleur
    }
    public set couleur(value: string) {
        this._couleur = value
    }
    public get kilometrage(): number {
        return this._kilometrage
    }
    public set kilometrage(value: number) {
        this._kilometrage = value
    }
    public get prix(): number {
        return this._prix
    }
    public set prix(value: number) {
        this._prix = value
    }
    public get anneeCirculation(): number {
        return this._anneeCirculation
    }
    public set anneeCirculation(value: number) {
        this._anneeCirculation = value
    }
    public get typeVehicule(): string {
        return this._typeVehicule
    }
    public set typeVehicule(value: string) {
        this._typeVehicule = value
    }
}