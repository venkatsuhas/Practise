import React from 'react'
import Cell from './Cells';
import values from './Game';
class Board extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             next:'X',
             cells:[null,null,null,null,null,null,null,null,null]
        }
    }
    handleCellClick=(id)=>{
        let currentValue=this.state.cells[id];
        if(values.GetWinner(this.state.cells)||currentValue) return ;
        
        if(currentValue)
        return;

        let newCells=[...this.state.cells];
        newCells[id]=this.state.next;

        let newNext=this.state.next==='O'?'X':'O';

        this.setState({cells:newCells,next:newNext})
    }
    

    reset=()=>{
        this.setState({
            next:"X",
            cells:[null,null,null,null,null,null,null,null,null],
        });
    }
    
    render(){
        let status;
        let obj;
        if(
            this.state.cells.filter((cell)=>cell!==null).length === this.state.cells.length && 
            !values.GetWinner(this.state.cells)
        ){
            status = "Stale Mute";
        }
        else{
            obj=values.GetWinner(this.state.cells);
            if(obj)
            status = "Winner "+ obj.status;
        }
        return (
            <>
            <h1>{status}</h1>
            <div className='board'>
                {this.state.cells.map((value,index)=>(
                    <Cell id={index} value={value} onCellClick={this.handleCellClick}/>
                ))}
            </div>
            <button onClick={this.reset}>Reset</button>
            </>
        )
    }
}

export default Board
