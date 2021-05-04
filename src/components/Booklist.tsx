// import { books } from "./Addbook";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Details from "./Details";
import SearchBar from "./search";
import Star from './star-component'
import { useEffect, useState } from "react";

function BookList() {
  const [books,setbooks] = useState([]);
  // const [flag, setFlag] = useState(true);

  useEffect(()=>{
    fetch("http://localhost:8000/books")
    .then(response=>{
      if(response.ok){
      return response.json();
      }
      throw response;
    })
    .then(data=>{
      setbooks(data)
      // setSearchArray(data)
    })
    .catch(err=>{console.log(err);
    })
  },[])
  async function handleSearchSubmit(searchInput: any) {

    await fetch("http://localhost:8000/books")
    .then(response=>response.json())
    .then(data=>{
      let searchList: any = []
    data.map((book: any) => {
      if (book.title.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1) {
        searchList.push(book);
      } else if (
        book.author.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
      ) {
        searchList.push(book);
      } else if (book.id === searchInput) {
        searchList.push(book);
      }
      return null;
    });
    // setFlag(false)
    setbooks(searchList);
    })
  }

  return (
    <div>
      <SearchBar onSearch={handleSearchSubmit}></SearchBar>
      {books.map(function (book: any, index: any) {
        return (
          <HashRouter>
            <NavLink to={"/details/" + book._id}>
              <div className="book-card" id={book._id}>
                <br />
                <img id="img" src={book.cover} alt={book.title} />
                <h3>{book.title}</h3>
                {/* <p>Rating:{book.rating}</p> */}
                <Star value={book.rating}></Star>
                <p className="price">
                  <strong>₹{book.price}</strong>
                </p>
              </div>
            </NavLink>
            <Route path={"/details/" + book._id} component={Details} />
          </HashRouter>
        );
      })}
            
    </div>
  );
}

export default BookList;