type DieProps={
    value: number,
    isHeld: boolean
}

function Die(props: DieProps){

     function handleClick(){
    
      console.log(`Die ${props.value} clicked`)

    
}
    return(
        <div className="die mx-2 my-5 p-10" onClick={handleClick}>
            {props.value}

        </div>
    )

   
}



export default Die