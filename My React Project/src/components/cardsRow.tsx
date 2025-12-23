
import Card from './card';
import type { CardType } from '../App';
import '../App.css'

type CardsRowProps = {
  cards: CardType[];
};

function CardsRow({ cards }: CardsRowProps) {
  return (
    <div className="cards-row" >
      {cards.map((card) => (
        <Card key={card.id} 
        
        {...card}
        />
      ))}
    </div>
  );
}

export default CardsRow;
