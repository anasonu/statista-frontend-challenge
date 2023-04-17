// import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { CheckedItemsContext } from '../App';

function Checkbox({ id }) {
  const { checkedItems, setCheckedItems } = useContext(CheckedItemsContext);
  
  const handleChange = (event) => {    
    if(event.target.checked && checkedItems.length < 2) {
      setCheckedItems(checkedItems => [...checkedItems, id]);
    } else {
      event.target.checked = false;
      setCheckedItems(checkedItems => checkedItems.filter(item => item !== id));
    }
  };

  return <input type='checkbox' onChange={event => handleChange(event)} />;
}

export default Checkbox;
