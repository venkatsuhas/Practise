// import {useState} from 'react';
 

export default function Input(props:any){
    // const [input,setInput] = useState("");

    // function handleChange(e:any) {
    //       setInput(e.target.value);
          
    // }

    return(
        <div className="book-form">
        
  <form className="form-area">
    <div>
        <label >{props.label}</label>
        <input type="text"  onChange={(e)=>props.Change(e.target.value)}   required/>
        {/* <button onClick={()=>props.Change(input)}>Add</button> */}
    </div><br/>
  </form>
      </div>
    )
}