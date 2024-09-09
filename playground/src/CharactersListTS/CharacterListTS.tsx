import React from "react";
import {useEffect, useState} from "react";
import {SWGetPeopleInterface, SWPerson} from "../api/SWGetPeopleInterface";
import Table from "react-bootstrap/Table";
import {Button} from "react-bootstrap";
import PersonDisplayer from "../PersonDisplayer/PersonDisplayer";



function CharactersListTS() {

    const [tableData,setTableData]=useState <SWPerson[]> ([])
    const [selectedPerson,setSelectedPerson]=useState<SWPerson|undefined>()
    const [page,setPage]=useState(1)

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/?page=${page}`)
            .then((res) => res.json())
            .then((data:SWGetPeopleInterface) => {
                setTableData(data.results);
            });
    }, [page]);

    const onHandleClick = (person:SWPerson) => {
        setSelectedPerson(selectedPerson===person ? undefined : person)
    }

    const onClickPrevious = () => {if (page>=1){setPage(page-1)}}

    const males = tableData.filter((person)=> person.gender==="male").length
    //filter accetta un handler che ritorna un booleano, se non glielo dò automaticamente lui farà il controllo di esistenza (che ritorna comunque un booleano)
    const tallest = tableData.filter((person)=>parseInt(person.height) > 150).length
    const firstFemale = tableData.find((person)=> person.gender === "female")
    //ritorna o un elemento o undefined
    const femaleIndex = tableData.findIndex((person)=>person.gender==="female")
    //se non trova un elemento corrispondente alla mia condizione findIndex mi restituisce -1
    if(firstFemale) {
        //con l'if a monte viene esclusa la possibilità di avere undefined, dò la condizione di esistenza
        let includeFemale= tableData.includes(firstFemale)
    }
    //includes ritorna un booleano

    return (
        <div className="App">


            {tableData.length > 0 && (
                <Table >
                    <thead>
                       <tr>
                           <th>Name</th>
                           <th>Height</th>
                           <th>Gender</th>
                           <th></th>
                       </tr>
                    </thead>
                    <tbody>
                       {tableData.map((el, i) => <PersonDisplayer key={i} condition={selectedPerson === el} onClick={()=>onHandleClick(el)} person={el} />)}
                    </tbody>
                </Table>
            )}

            <Button disabled={page===1} onClick={onClickPrevious} >Previous</Button>
            <span>{page}</span>
            <Button disabled={tableData.length<10} onClick={()=>setPage(page+1)}>Next</Button>
            <div>Males: {males}</div>
            <div>Tallest: {tallest}</div>


        </div>
    );
}

export default CharactersListTS;
