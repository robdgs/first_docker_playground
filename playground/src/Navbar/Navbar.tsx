import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";


export default function Navbar() {
return(
    <div>
        <NavLink to={"/"}>
            <Button>Home</Button>
        </NavLink>
        <NavLink to={"/fondi"}>
            <Button>Fondi</Button>
        </NavLink>
        <NavLink to={"/personaggi"}>
            <Button>Personaggi</Button>
        </NavLink>
        <NavLink to={"/libri"}>
            <Button>Libri</Button>
        </NavLink>
        <NavLink to={"/login"}>
            <Button>Login</Button>
        </NavLink>
    </div>
);
}