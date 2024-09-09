type SN = string | number
//tipo custom

const cose:SN[] = [12,"Chiara",7,"Manfredi"]

export function TestFilter(){
    const numbers =cose.filter((element)=> {
        //element è l'elemento che lui man mano controlla singolarmente dentro l'array (vale per tutti i metodi degli array)
        return typeof element === "number"
    } )

    cose.filter((element,i)=> {
        return i>=2
    })
    //element e i sono la "firma del metodo"
    cose.slice(2)
    //questo metodo mi prende TUTTI gli elementi dall' indice due in poi
    //slice accetta anche un secondo parametro, l'indice dove finire il taglio
    //l'elemento all'indice del secondo parametro NON è incluso
}