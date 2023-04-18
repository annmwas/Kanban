import Card from './Card';
import "../index.css"
const Cards = ({ cards, onDelete, onEdit }) => {
  return (
    <>
      {
        cards.map((card) => (
          <Card key={card.id} card={card} onDelete={onDelete} onEdit={onEdit} />
        ))
      }
    </>
    )
}
export default Cards;