import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
// import BookList from "./Booklist";
import Input from './input'

// let books:any = localStorage.getItem("books");
// if(!books){
//     books=[];
// }
// else{
//     books=JSON.parse(books);
// }

  function AddBook(){
  
    // const [id,setId] = useState("");
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [price,setPrice] = useState("");
    const [rating,setRating] = useState("");
    const [description,setDescription] = useState("");
    const [cover,setCover] = useState("");
    const history = useHistory();

    // function handleIdChange(input:any) {
    //   setId(input);
      
    // }
    function handleTitleChange(input:any) {
      setTitle(input);
    }
    function handleAuthorChange(input:any) {
      setAuthor(input);
    }
    function handlePriceChange(input:any) {
      setPrice(input);
      
    }
    function handleRatingChange(input:any) {
      setRating(input);
      
    }
    function handleDesChange(input:any) {
      setDescription(input);
      
    }
    function handleCoverChange(input:any) {
      setCover(input);
      
    }
  function handleSubmit(event:any){
    // const {id,title,author,price,rating,description,cover} = this.state;
    event.preventDefault();
    const book={
        // id:id,
        title:title,
        author:author,
        price:price,
        rating:rating,
        description:description,
        cover:cover
    }
    // books.push(book);
    // localStorage.setItem("books",JSON.stringify(books));
    fetch("http://localhost:8000/books",{
      method:"POST",
      body:JSON.stringify(book),
      headers:{"Content-Type":"application/json"},
    })
    history.push("/books")
    
}
    return (
      <div className="book-form">
        
  <form className="form-area">
    <h2>ADD NEW BOOK</h2>
        <hr/>
    <div>
        {/* <Input label="Id:" Change={(input:any)=>handleIdChange(input)} required/> */}
        <Input label="Title:" Change={(input:any)=>handleTitleChange(input)} required/>
        <Input label="Author:" Change={(input:any)=>handleAuthorChange(input)} required/>
        <Input label="Price:" Change={(input:any)=>handlePriceChange(input)} required/>
        <Input label="Rating:" Change={(input:any)=>handleRatingChange(input)} required/>
        <Input label="Description:" Change={(input:any)=>handleDesChange(input)} required/>
        <Input label="Cover:" Change={(input:any)=>handleCoverChange(input)} required/>
        
    </div>

    <div>
    <button id="add-button" type="submit" onClick={handleSubmit}>ADD</button>

    </div><br/>
  </form>
      </div>
    );
  }
 
export {AddBook};