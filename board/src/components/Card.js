import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css"
const Card = ({ card, onDelete, onEdit }) => {
    return (
      <div>
        <div>
          <div >
            <p className="taskName">
              {card.text}
              <FaTimes onClick={() => onDelete(card.id)} className="delIcon" />
            <FaPencilAlt onClick={() => onEdit(card.id)} className="editIcon" />
            </p>
            
            </div>
            <div>
            
          </div>
        </div>
      </div>
    )
}
export default Card;