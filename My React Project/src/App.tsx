import './App.css'
import NavBar from './components/navBar'
import CardsRow from './components/cardsRow.tsx'
import AddCard from './components/addCard.tsx'
import { useState } from 'react';
import defaultCards from '../cards.ts'
import Toggle from './components/toggle.tsx';


export type CardType = {
  id: number;
  title: string;
  description: string;
};


function App() {
  const [cards, setCards] = useState<CardType[]>(
    defaultCards.map(
      (card, index) => ({
        id: index + 1,
        title: card.title,
        description: card.description
      })
    )
  );
    const [showCards, setShowCards] = useState(true);

  return (
    <>
      <NavBar />
      <AddCard setCards={setCards} />

      <Toggle showCards={showCards} setShowCards={setShowCards} />
      {/* <CardsRow cards={cards} /> */}

{showCards && <CardsRow cards={cards} />}
    </>
  )
}

export default App
