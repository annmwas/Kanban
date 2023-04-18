import { useState } from 'react';
import Swal from "sweetalert2";
const AddTask = ({ onSave }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your task!'
            })
        } else {
            onSave({ text});
        }
        setText('');
        
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Name</label>
                <input type="text" placeholder="add task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            
            <input type="submit" className="btn btn-block" value="Add" />
        </form>
    )
}
export default AddTask;