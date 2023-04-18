import React from 'react';
import Button from './Button';
import "../index.css";
const AddNewCard = ({ showCardForm, changeTextAndColor }) => {
  return (
      
          <Button onClick={showCardForm} color={changeTextAndColor ? 'red' : 'white'} text=     {changeTextAndColor ? 'Close' : 'Add'} />
     
    )
}
export default AddNewCard;