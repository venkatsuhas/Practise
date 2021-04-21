import React from 'react';

function Cell(props) {
    //let value='_';

    let style={
        color:props.value?'black':'transparent'
    }
let value=props.value|| '@' ;

    return (
        <button onClick={()=>props.onCellClick(props.id)}
         style={style} className='cell'>{value}</button> 
 );
   
}; 

export default Cell