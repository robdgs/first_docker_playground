import {Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import useDataFetchFromSWAPI from "../CustomHook/useDataFetchFromSWAPI";
import {SWPerson} from "../api/SWGetPeopleInterface";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useLocation, useNavigate} from "react-router-dom";

export default function CustomFetchedCharacters () {
    const [selectedPerson,setSelectedPerson]=useState<SWPerson|undefined>()
    const {tableData,fetchHandler,page,onClickPrevious,setPage} = useDataFetchFromSWAPI();
    useEffect(()=> {fetchHandler()},[page])
    const onHandleClick = (person:SWPerson) => {
        setSelectedPerson(selectedPerson===person ? undefined : person)
    }

    const navigate = useNavigate();
    //const history = useHistory() React-router 5

    const location = useLocation();


    return (
        <>
            <div>
                <Button onClick={()=>{
                    navigate("/")
                    //history.push("/")
                }}>Vai a /</Button>
                <Button onClick={()=>{
                    navigate("/main")
                    //history.push("main")
                }}>Vai a /main</Button>
            </div>
            <div>Mi trovo in {location.pathname} con hash {location.hash}</div>
            {tableData.length > 0 && (
                <Container>

                    <Row>
                        <Col xs={3} md={3}>Name</Col>
                        <Col xs={3} md={3}>Height</Col>
                        <Col xs={3} md={3}>Gender</Col>
                        <Col xs={3} md={3}></Col>
                    </Row>
                        {tableData.map((el, i) => {
                        return (
                            <Row className={selectedPerson===el?"bg-secondary":""} key={i} style={{
                                //   backgroundColor: selectedPerson === el ? 'salmon' : ''
                                //    color: selectedPerson === el ? 'white' : '',
                            }} >
                                <Col xs={3} md={3}>{el.name} </Col>
                                <Col xs={3} md={3}>{el.height}</Col>
                                <Col xs={3} md={3}>{el.gender}</Col>
                                <Col xs={3} md={3}> <Button onClick={()=>onHandleClick(el)}>Highlight</Button></Col>
                            </Row>
                        );
                    })}

                </Container>
            )}
            <Button disabled={page===1} onClick={onClickPrevious} >Previous</Button>
            <span>{page}</span>
            <Button onClick={()=>setPage(page+1)}>Next</Button>



        </>
    );
}
