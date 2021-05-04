import React, { useState } from 'react';
import {Route,Link,HashRouter} from 'react-router-dom';
import Home from './home'
import {Button, Form, Col } from 'react-bootstrap';
interface Iprops {
  handleregistration: (newUser: any) => void
}
const Register = (Iprops: any) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  function inputusername(e: any) {
    setUserName(e.target.value)
  }
  function inputpassword(e: any) {
    setPassword(e.target.value)
  }
  function inputphonenumber(e: any) {
    setPhonenumber(e.target.value)
  }
  function inputaddress(e: any) {
    setAddress(e.target.value)
  }



  return (<>
    {/* <div className="login"><h3>Register</h3>
        <p>Enter UserName:<input type="text"></input><br/><br/>
        Enter Password:<input type="text"></input><br/><br/>
        Confirm Password:<input type="text"></input></p> */}
    <Form>

      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={inputusername}/>
      </Form.Group>
      <Form.Row>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={inputpassword} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="email" placeholder="Phone number" onChange={inputphonenumber}/>
        </Form.Group>
      </Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="email" placeholder="Enter Address" onChange={inputaddress} />
      </Form.Group>
      
    </Form>
      <Button className="style" variant="success" type="button" onClick={() => Iprops.handleregistration({username:username,password:password,phonenumber:phonenumber,address:address})}>
            <HashRouter>
                <Link to="/">Register</Link>
                <Route exact path="/" component={Home}></Route>
            </HashRouter>
          </Button>

      {/* </div> */}

  </>

  )
}
export default Register
