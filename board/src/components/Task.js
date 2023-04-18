import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css";
import AddNewCard from './AddNewCard';
import AddCard from './AddCard';
import Cards from './Cards';
import {Container ,Card, Col, Button} from 'react-bootstrap';  
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";
const Task = ({showForm, changeTextAndColor, task, onDelete, onEdit }) => {
    
    const [showAddCard, setShowAddCard] = useState(false); // To reveal add card form
    const [cards, setCards] = useState([]); // Task State
     // Add Card
     const addCard = (card) => {
        const id = uuidv4();
        const newCard = { id, ...card }
        setCards([...cards, newCard]);
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'You have successfully added a new task!'
        })
        localStorage.setItem("CardAdded", JSON.stringify([...cards, newCard]));
    }
    // Edit Task
    const editCard = (id) => {
        const text = prompt("Card Name");
        
        let data = JSON.parse(localStorage.getItem('cardAdded'));
        const myData = data.map(x => {
            if (x.id === id) {
                return {
                    ...x,
                    text: text,
                   
                    id: uuidv4()
                }
            }
            return x;
        })
        Swal.fire({
            icon: 'success',
            title: 'Yay...',
            text: 'You have successfully edited an existing task!'
        })
        localStorage.setItem("cardAdded", JSON.stringify(myData));
        window.location.reload();
    }
    // Delete Task
    const deleteCard = (id) => {
        const deleteCard = cards.filter((card) => card.id !== id);
        setCards(deleteCard);
        Swal.fire({
            icon: 'success',
            title: 'Oops...',
            text: 'You have successfully deleted a task!'
        })
        localStorage.setItem("cardAdded", JSON.stringify(deleteCard));
    }
    return (
      <div className="cardsize">
        
        <Card  >  
        <Card.Header>{task.text} <FaTimes onClick={() => onDelete(task.id)} className="delIcon" />
        <FaPencilAlt onClick={() => onEdit(task.id)} className="editIcon" /></Card.Header>
        <Card.Body>              
            <Card.Text>  
            
            {/* Revealing of Add Card Form */}
            {showAddCard && <AddCard onSave={addCard} />}
                        
                        {
                            cards.length > 0 ?
                                (<Cards cards={cards} onDelete={deleteCard} onEdit={editCard} />) :
                                ('No Task Found!')
                        }
            </Card.Text>  
             
            
        </Card.Body>
        <Card.Footer>
        <AddNewCard showCardForm={() => setShowAddCard(!showAddCard)} changeTextAndColor={showAddCard} /> 
        </Card.Footer>  
        </Card>  
       
               
      </div>
    )
}
export default Task;