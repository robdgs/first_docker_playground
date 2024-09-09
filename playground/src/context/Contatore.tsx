import CounterContext from "./CounterContext";
import {useState} from "react";

interface ContatatoreInterface{
    children:any
}
export default function Contatore ({children}:ContatatoreInterface){
    const [counter, setCounter] = useState(15)

    const handleCounter = (counter:number) => {
        setCounter(counter)
    }

    return <CounterContext.Provider value={{counter: counter, setCounter:handleCounter}}>
        {children}
    </CounterContext.Provider>

}
