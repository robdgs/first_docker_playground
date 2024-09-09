import Navbar from "../Navbar/Navbar";

interface DashboardInterface{
    children:any
}

export default function Dashboard (props:DashboardInterface){
    return(
        <>
            <Navbar/>
            {props.children}
        </>
    );

}