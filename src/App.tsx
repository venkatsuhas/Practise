import {useState} from 'react';
import {Route,Link,HashRouter} from 'react-router-dom';
import Home from './components/home'
import BookList from './components/Booklist'
import {AddBook} from './components/Addbook'
import Details from './components/Details'
import Register from './components/register'
import Login from './components/login'
import './App.css'
function App(){
  const [user,setUser]=useState(false)


  const authentication=async (loginUser:any)=>{
    let auth=await fetch(`http://localhost:8000/users/login/?username=${loginUser.username}&password=${loginUser.password}`)
    let valid=await auth.json(); 
    console.log(valid);
    if(valid===true){
      setUser(true);
      // setWindow(true);
      // setUserFailed("pass");

    }else{
      setUser(false);
     
      // setUserFailed("error");
    }
  }
  const handleNewUser=async(newUser:any)=>{
    console.log("reg")
    await fetch("http://localhost:8000/users/registration",{
    method:"POST",
    body:JSON.stringify(newUser),
    headers:{"Content-Type":"application/json"}
    
    })
    // setUser(true);
    // setWindow(true);
  }
    return(
      <HashRouter>
        <div>
        <h1>Book Management System</h1>
        <ul className="header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Book List</Link></li>
          <li>{user?<Link to="/addbook">Add Books</Link>:null}</li>
          <li>{user?null:<Link to="/register">Register</Link>}</li>
          <li>{user?null:<Link to="/login">Login</Link>}</li>
          <li>{user?<Link to="/">LogOut</Link>:null}</li>
        </ul>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/books" component={BookList}></Route>
        <Route exact path="/addbook" component={AddBook}></Route>
        <Route exact path="/details/:id?" component={Details}></Route>
        <Route exact path="/register">
          <Register handleregistration={(newUser:any)=>{handleNewUser(newUser)}}></Register>
        </Route>
        <Route exact path="/login">
        <Login handlelogin={(loginUser:any)=>authentication(loginUser)}></Login>
        </Route>
        </div>
      </HashRouter>
    )
}
export default App;
