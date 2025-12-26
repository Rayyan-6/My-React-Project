import { useState } from "react"
import Die from "./Die"
import {nanoid} from 'nanoid'


function DiceGame(){
    const [dice, setDice] = useState(generateAllDice())


    function generateAllDice(){
        console.log("Generate All Dice ran")
        return new Array(10)
        .fill(0)
        .map(() =>({
            value: Math.ceil(Math.random()*6),
            isHeld: false,
            id: nanoid()
        } ))
    }

    function rollDice(){
        return(generateAllDice())
    }

    function hold(id: string) {
  setDice(oldDice =>
    oldDice.map(die =>
      die.id === id
        ? { ...die, isHeld: !die.isHeld }
        : die
    )
  )
}


    const diceElements = dice.map(dieObj=>{
      return  <Die 

        key={dieObj.id}
        value={dieObj.value}
        isHeld={dieObj.isHeld}
        hold={() => hold(dieObj.id)}
        
        />
    })

    return(
        <div className="dice-parent">
            <div className="dice-row">
            {diceElements}
            
            </div>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition" 
            onClick={()=>{
                setDice(rollDice())
            }}
            >
                Roll</button>
        </div>
    )
}

export default DiceGame