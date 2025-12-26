import { useState } from "react"
import Die from "./Die"

function DiceGame(){
    const [dice, setDice] = useState(generateAllDice())


    function generateAllDice(){
        console.log("Generate All Dice ran")
        return new Array(10)
        .fill(0)
        .map(() =>{
           
            const val=Math.ceil(Math.random()*6)
            return <Die value={val} isHeld={false}/>
        } )
    }

    return(
        <div className="dice-parent">
        <div className="dice-row">
          {dice}
           
        </div>

        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition" 
        onClick={()=>{
            setDice(generateAllDice())
        }}
        >
            Roll</button>
        </div>
    )
}

export default DiceGame