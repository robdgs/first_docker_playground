import {useState} from "react";
import {Cane, Osso} from "./classes/Cane";


const cane = new Cane({
    nome:"Pedrito",
    osso: new Osso({lunghezza:30})
})

export default function (){

    const [a,setA] = useState(cane)


    const cambiaNomeCane = ()=>{
        console.log("a", a)
        //const b = {...a}
        const b = new Cane(a);
        console.log("b",b)
        b.nome = "Fuffi"
        setA(b)
    }

    const cambiaLunghezza = () => {
        a.setOsso(10);
        console.log("a",a)

        const newCane = new Cane(a)
        setA(newCane)
    }


    return <>
        <div>{a.nome}</div>
        <div>{`La lunghezza dell'osso è ${a.osso.lunghezza}`}</div>
        <div>{(a instanceof Cane).toString()}</div>
        <button onClick={cambiaNomeCane}>Cambia Nome</button>
        <button onClick={cambiaLunghezza}>Cambia Lunghezza</button>
        </>
}
