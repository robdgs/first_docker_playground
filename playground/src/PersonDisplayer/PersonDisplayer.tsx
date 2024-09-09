import {Button} from "react-bootstrap";
import React from "react";
import {SWPerson} from "../api/SWGetPeopleInterface";

interface Person {
    person:SWPerson,
    onClick: ()=>void,
    // qui sopra dichiaro che la funziona non ha un return
    condition?: boolean,
    // con il ? specifico che è opzionale, non è obbligatorio passare questa prop (se io non lo metto e poi non richiamo la prop avrò errore)
   //di base se io non dò un valore alla prop di default sarà undefined
    //qui sotto rimpiazzo il valore di default con false (booleano, d'accordo come scritto sopra)
}
export default function PersonDisplayer ({person,onClick,condition=false}:Person) {
//ricorda le graffe entro cui mettere person, person è un OGGETTO, come se scrivessi il generico props
    return (
        <>
            <tr  style={{
                 backgroundColor: condition ? 'salmon' : '',
                 color: condition ? 'white' : '',
                 }}>
                    <td>{person.name} </td>
                    <td>{person.height}</td>
                    <td>{person.gender}</td>
                    <td> <Button onClick={()=>onClick()}>Highlight</Button></td>
            </tr>
        </>
    );
}
