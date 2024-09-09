import { useState} from "react";
import {SWGetPeopleInterface, SWPerson} from "../api/SWGetPeopleInterface";

export default function useDataFetchFromSWAPI() {

    const [tableData, setTableData] = useState<SWPerson[]>([])
    const [page,setPage]=useState(1)

    const fetchHandler = () => {
        fetch(`https://swapi.dev/api/people/?page=${page}`)
            .then((res) => res.json())
            .then((data: SWGetPeopleInterface) => {
                setTableData(data.results);
            });
    }

    const onClickPrevious = () => {if (page>=1){setPage(page-1)}}

    return {tableData,fetchHandler,page,onClickPrevious,setPage};
}