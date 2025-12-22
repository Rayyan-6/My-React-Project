
import Card from './card';
import type { CardType } from '../App';

type CardsRowProps = {
  cards: CardType[];
};

function CardsRow({ cards }: CardsRowProps) {
  return (
    <div className="cards-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {cards.map((card) => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </div>
  );
}

export default CardsRow;
