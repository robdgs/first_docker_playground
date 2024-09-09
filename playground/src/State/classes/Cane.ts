interface CaneInterface{
    nome:string,
    osso:Osso,
}

export class Cane{
    nome:string;
    osso: Osso

    constructor({nome,osso}:CaneInterface) {
        this.nome = nome;
        this.osso = osso;
    }

    setOsso(lunghezza:number){
        this.osso = new Osso({lunghezza})
    }
    setLunghezza(lunghezza:number){
        this.osso.lunghezza =lunghezza;
    }

}

interface OssoInterface{
    lunghezza:number
}

export class Osso{
    lunghezza:number

    constructor({lunghezza}:OssoInterface) {
        this.lunghezza = lunghezza
    }
}
