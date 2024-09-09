import {useParams} from "react-router-dom";

export default function (){
    const params = useParams();

    return <div>Documento {params.id}</div>
}
