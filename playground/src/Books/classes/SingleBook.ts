interface SingleBookInterface{
    infos: InfosInterface,
    availableCopies: number
}
export class SingleBook {
    infos: Infos
    availableCopies: number

    constructor({infos,availableCopies}:SingleBookInterface) {
        this.infos = new Infos(infos)
        this.availableCopies = availableCopies;
    }
    setAvailableCopies(newAvailableCopiesQuantity:number){
        this.availableCopies=newAvailableCopiesQuantity
}

}

interface InfosInterface{
    title: string
    author: string
}

export class Infos {
    title:string
    author: string

    constructor({title, author}:InfosInterface){
        this.title = title
        this.author= author
    }
    setTitle(newTitle:string) {
        this.title=newTitle
    }
    setAuthor(newAuthor:string) {
        this.author=newAuthor
    }
}
