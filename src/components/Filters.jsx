import React, { useContext, useState } from 'react';
import { MultiSelectBox, MultiSelectBoxItem, Flex, Title } from '@tremor/react';
import { CheckedItemsContext } from '../App';
import data from '../utils/bbq.json'

function Filters() {
  const { filteredItems, setFilteredItems } = useContext(CheckedItemsContext);
  const [ value, setValue ] = useState([""]);

  const handleChange = (event) => {
    setFilteredItems(data.filter(item => event.includes(item.brand)))
  }


  return (
    <Flex className='justify-start gap-2.5'>
      <div>
        <Title className='filter-title'>Brand</Title>
        <MultiSelectBox onValueChange={event => handleChange(event)}>
          <MultiSelectBoxItem value='Algon' text='Algon' />
          <MultiSelectBoxItem value='Tepro' text='Tepro' />
          <MultiSelectBoxItem value='Weber' text='Weber' />
          <MultiSelectBoxItem value='Bosch' text='Bosch' />
          <MultiSelectBoxItem value='Coleman' text='Coleman' />
        </MultiSelectBox>
      </div>
      <div>
        <Title className='filter-title'>Device Type</Title>
        <MultiSelectBox onValueChange={handleChange}>
          <MultiSelectBoxItem value='Electric Grill' text='Electric Grill' />
          <MultiSelectBoxItem value='Gas Grill' text='Gas Grill' />
          <MultiSelectBoxItem value='Charcoal Grill' text='Charcoal Grill' />
          <MultiSelectBoxItem value='Pellet Grill' text='Pellet Grill' />
        </MultiSelectBox>
      </div>
      <div>
        <Title className='filter-title'>Price</Title>
        <MultiSelectBox onValueChange={handleChange}>
          <MultiSelectBoxItem value='1' text='$300 - $800' />
          <MultiSelectBoxItem value='2' text='$801 - $1300' />
          <MultiSelectBoxItem value='3' text='> $1300' />
        </MultiSelectBox>
      </div>
    </Flex>
  );
}

export default Filters;
