import React from "react";
import {useEffect, useState} from "react";
function CharactersListJS() {

    const [tableData,setTableData]=useState([])

    useEffect(() => {
        fetch(`https://swapi.dev/api/people`)
            .then((res) => res.json())
            .then((data) => {
                setTableData(data.results);

            });
    }, []);

    return (
        <div className="App">
           {tableData.length > 0 && (
                <table className="full_table">
                    <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Height</th>

                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((el, i) => {
                        return (
                            <tr key={i} >

                                <td>{el.name}</td>
                                <td>{el.height}</td>

                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            )}

        </div>
    );
}

export default CharactersListJS;