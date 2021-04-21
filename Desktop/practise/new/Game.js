import React from 'react'
import Board from './Board'

function Game() {
    return <Board/>
}
function GetWinner(cellArray){
    let array=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(let entry of array){
        if(cellArray[entry[0]] &&
            cellArray[entry[1]]===cellArray[entry[0]]&&
            cellArray[entry[1]]===cellArray[entry[2]]){
                return {status : cellArray[entry[0]],array:entry};
            }
    }
}
let values = {Game,GetWinner}
export default values;