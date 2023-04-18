import React, { useContext } from 'react';
import { MultiSelectBox, MultiSelectBoxItem, Flex, Title } from '@tremor/react';
import { CheckedItemsContext } from '../App';
import data from '../utils/bbq.json'

function Filters() {
  const { filteredItems, setFilteredItems } = useContext(CheckedItemsContext);

  const handleBrandChange = (event) => {
    if(filteredItems.length > 0) {
      setFilteredItems(filteredItems => filteredItems.filter(item => event.includes(item.brand)))
    } else {
      setFilteredItems(data.filter(item => event.includes(item.brand)))
    }
  }

  const handleDeviceChange = (event) => {
    if (filteredItems.length > 0) {
      setFilteredItems(filteredItems => filteredItems.filter(item => event.includes(item.device_type)))
    } else {
      setFilteredItems(data.filter(item => event.includes(item.device_type)))
    }
  }


  return (
    <Flex className='justify-start gap-2.5'>
      <div>
        <Title className='filter-title'>Brand</Title>
        <MultiSelectBox onValueChange={event => handleBrandChange(event)}>
          <MultiSelectBoxItem value='Algon' text='Algon' />
          <MultiSelectBoxItem value='Tepro' text='Tepro' />
          <MultiSelectBoxItem value='Weber' text='Weber' />
          <MultiSelectBoxItem value='Bosch' text='Bosch' />
          <MultiSelectBoxItem value='Coleman' text='Coleman' />
        </MultiSelectBox>
      </div>
      <div>
        <Title className='filter-title'>Device Type</Title>
        <MultiSelectBox onValueChange={event => handleDeviceChange(event)}>
          <MultiSelectBoxItem value='Electric Grill' text='Electric Grill' />
          <MultiSelectBoxItem value='Gas Grill' text='Gas Grill' />
          <MultiSelectBoxItem value='Charcoal Grill' text='Charcoal Grill' />
          <MultiSelectBoxItem value='Pellet Grill' text='Pellet Grill' />
        </MultiSelectBox>
      </div>
      <div>
        <Title className='filter-title'>Price</Title>
        <MultiSelectBox disabled>
          <MultiSelectBoxItem value='1' text='$300 - $800' />
          <MultiSelectBoxItem value='2' text='$801 - $1300' />
          <MultiSelectBoxItem value='3' text='> $1300' />
        </MultiSelectBox>
      </div>
    </Flex>
  );
}

export default Filters;
