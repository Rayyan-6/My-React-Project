import './App.css'
import NavBar from './components/navBar'
import CardsRow from './components/cardsRow.tsx'
import AddCard from './components/addCard.tsx'
import { useState  } from 'react';


export type CardType = {
  id: number;
  title: string;
  description: string;
};


function App() {
    const [cards, setCards] = useState<CardType[]>([]);

  return (
    <>
      <NavBar />
      <AddCard setCards={setCards } />
      <CardsRow cards={cards}/>
    </>
  )
}

export default App
