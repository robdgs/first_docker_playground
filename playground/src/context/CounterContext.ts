import React from "react";

//questo è il prototipo del contesto

const counterValue = {
    counter: 0,
    setCounter: (counter:number) => {
        console.log(counter)
    }
}
//queste sono le chiavi di default che devo passare


const CounterContext = React.createContext(counterValue)
export default CounterContext

//React.createContext mi fa definire una tipologia di spazio facendomi selezionare i valori (con i rispettivi tipi) che quel tipo
//di spazio può accettare (la roba dentro counterValue (già counter lo setto a zero, gli dò il valore di default))

//finchè la tengo qui, non ho effettivamente creato la box, si va a creare quando io attribuisco il Provider a CounterContext.

//CounterContext.Provider diventa una "funzione" che poi vado a richiamare in  const context = useContext(CounterContext)
// (nel componente che usa il mio context CounterContext per settare i SUOI dati, in cui vado a fare il render finale ) per
//passarmi e settarmi i value che ho definito QUI in counterValue

//useContext mi fa leggere i valori dentro il context

//SE io non uso il provider, ma chiamo comunque il context mi vengono ritornati i valori di default
//(tipo se monto in app DisplayCounter)