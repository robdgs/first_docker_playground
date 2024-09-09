

interface Props {
    title:string,
    author:string,
    availableCopies: number

}
export default function SingleBook({title,author,availableCopies}:Props) {
    return(
        <>
            <p>Title: {title} </p>
            <p>Author: {author}</p>
            <p>Available Copies:{availableCopies}</p>
        </>
    )
}