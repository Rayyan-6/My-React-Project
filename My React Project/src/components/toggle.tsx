import { useState } from "react"
type ToggleProps = {
  showCards: boolean;
  setShowCards: React.Dispatch<React.SetStateAction<boolean>>;
};

function Toggle({showCards, setShowCards}: ToggleProps){
    const [visible, setVisible ]= useState(true)


//     const handleClick = ()=>{
    
//     setVisible(visible=>!visible)
//     console.log(visible)
// }
const handleClick = () => {
    setShowCards(prev => !prev);
    setVisible(visible=>!visible)
  };


    return(
        <>
        <button onClick={handleClick}>Click to Toggle</button>
        {visible && <p>This area is conditionally rendered</p>}
        </>
    )

}



export default Toggle