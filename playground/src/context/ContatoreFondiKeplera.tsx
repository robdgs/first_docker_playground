import Contatore from "./Contatore";
import {useContext} from "react";
import CounterContext from "./CounterContext";

export default function ContatoreFondiKeplera (){

    return <Contatore>
        <DisplayCounter/>
        <DisplayCounter/>
        {/*DisplayCounter è un children, quando in Contatore me lo richiamo parlo proprio di lui */}
    </Contatore>
}

export function DisplayCounter(){

    const context = useContext(CounterContext)

    return <>
        <button onClick={()=>{context.setCounter(11)}}>Diventa 11</button>
        <div>Fondi di Keplera: {context.counter}</div>
    </>
}
