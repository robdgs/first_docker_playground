
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import {Button, FormSelect} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


export default function Login (){
    const navigate = useNavigate()
    const [formValue, setFormValue] = useState({name:"", role:""})
const onSubmit = (e:any)=>{
        localStorage.setItem('key', JSON.stringify({name:formValue, role:formValue}));
        navigate("/");
    }

    return(
        <div>
            <Form onSubmit={onSubmit}>
                <Form.Group  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={formValue.name} onChange={(e)=>setFormValue({name:e.target.value, role:formValue.role})}  placeholder="name" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Role</Form.Label>
                    <Form.Select value={formValue.role}  onChange={(e)=>setFormValue({...formValue,role:e.target.value})} placeholder="role">
                        <option value={"admin"}>admin</option>
                        <option value={"inutile"}>inutile</option>
                    </Form.Select>
                </Form.Group>
                <Button onClick={()=>console.log(formValue)}>Submit</Button>
                <Button type="submit" >Storage</Button>
            </Form>
        </div>
    );
}
