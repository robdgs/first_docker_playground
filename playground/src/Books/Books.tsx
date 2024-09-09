import {Infos,SingleBook} from "./classes/SingleBook";
import {useEffect, useState} from "react";
import OneBook from "../SingleBook/SingleBook";

const singleBook = new SingleBook ({
    infos: new Infos({title:"",author:""}),
    availableCopies: 0
})
export default function Books () {
    const [book,setBook]=useState(singleBook)
    const [list,setList]=useState<SingleBook[]>([])
    const changeTitle = (title:string)=>{
        book.infos.setTitle(title);
        const newBook = new SingleBook(book)
        setBook(newBook)
    }
    const changeAuthor = (author:string)=>{
        book.infos.setAuthor(author);
        const newAuthor = new SingleBook(book)
        setBook(newAuthor)
    }
    const changeCopiesQuantity=(availableCopies:number)=>{
        book.setAvailableCopies(availableCopies);
        const newQuantity = new SingleBook(book)
        setBook(newQuantity)
    }
    const onHandleClick = () => {
        //list.push(book)
        //se qui sotto non destrutturo non c'è il display dell'array, per mostrarlo devo creare un nuovo array in un nuovo
        //indirizzo di memoria e chiamarmi quello. lo faccio destrutturando (come con gli oggetti)
        //setList([...list])
        setList([...list, new SingleBook(book)]) // <--- soluzione migliore

    }

/*    useEffect(()=>{
        console.log("lista",list)
    },[list])

    useEffect(()=>{
        console.log("book",book)
    },[book])*/


    return (
    <>
        <form onSubmit={(e)=>e.preventDefault()}>
            <input placeholder="Title " type="text" onChange={(e)=>changeTitle(e.target.value)} value={book.infos.title}/>
            <br/>
            <input placeholder="Number of Copies" type="number" min="0" onChange={(e)=>changeCopiesQuantity(parseInt(e.target.value))} value={book.availableCopies}/>
            <br/>
            <input  placeholder="Author" type="text"  onChange={(e)=>changeAuthor(e.target.value)} value={book.infos.author}/>
            <br/>
            <button onClick={onHandleClick}> Submit </button>
        </form>
        <div>
            <p>MyBook</p>
            {list.map((listbook,index)=> <OneBook key={index} title={listbook.infos.title} author={listbook.infos.author} availableCopies={listbook.availableCopies}/>)}
            </div>
        <button onClick={()=>setList([])}>Delete</button>
        <button onClick={()=>console.log("list",list)}>Show list</button>
    </>
);
}
