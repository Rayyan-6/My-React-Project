import clsx from "clsx"

type DieProps={
    value: number,
    isHeld: boolean,
    hold: ()=>void
}

function Die(props: DieProps){

     function handleClick(){
      console.log(`Die ${props.value} clicked`)  
      props.hold()
}

    return(
        <div onClick={handleClick} 
        
        className={clsx(
        "die mx-2 my-5 p-10 rounded-lg cursor-pointer transition-all",
        props.isHeld ? "bg-green-400 text-white" : "bg-gray-500"
      )}
        >
            {props.value}

        </div>
    )

   
}



export default Die