
import { useState } from "react";
import {useHistory } from "react-router-dom";
// import {books} from "./Addbook"
import Star from './star-component'
// import BookList from "./Booklist"
function Details(props:any){
    const [book,setbooks] = useState({
        _id:"",title:"",author:"",price:"",rating:"",description:"",cover:""
    })
    const history = useHistory();
    const id=props.match.params.id;
    const uri="http://localhost:8000/books/"+id;
    async function handleClick(index:any){
        // books.splice(index,1);
        // localStorage.setItem("books",JSON.stringify(books));
        await fetch(uri,{
            method:"DELETE"
        })
        history.push("/books");
    }
    fetch(uri)
    .then(response=>{
        if(response.ok){
        return response.json();
        }
        throw response;
      })
    .then(data=>{
        setbooks(data)
    })
      .catch(err=>{console.log(err);
      })
        return(
            <div>
               {/* {books.map((book:any,index:any) =>{
                   if(book.id===id){
                       return( */}
                        <div className="card">
                        <img id="imgDetails" src={book.cover} alt={book.title}/>
                        <p><strong>Author:{book.author}</strong></p> 
                        {/* <p><strong>Rating:{book.rating}</strong></p> */}
                        <Star value={book.rating}></Star>
                        <p><strong>Price :₹{book.price}</strong></p>
                        <h2>{book.title}</h2>
                        <p><strong>{book.description}</strong></p>
                        <button id='del-button' onClick={handleClick}>Delete</button>
                        </div>
                       {/* ); */}
                   {/* }
               })} */}
            </div>
        );
}
export default Details;