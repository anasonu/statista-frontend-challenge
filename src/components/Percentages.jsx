import React, { useContext } from 'react';
import { Metric, Text } from '@tremor/react';
import { CheckedItemsContext } from '../App';
import data from '../utils/bbq.json'

function Percentages() {
  const { checkedItems } = useContext(CheckedItemsContext);

  const selectedData = data.find(item => checkedItems.includes(item.id));
  // const dataSelected = selectedData?.reviews;

  return (
    <div className='percentage-flex'>
      <div className='percentage-box'>

        <div>
          <Text>Quality</Text>
          <Metric>{selectedData?.quality}%</Metric>
        </div>
        <div>
          <Text>Design</Text>
          <Metric>{selectedData?.design}%</Metric>
        </div>
        <div>
          <Text>Cleaning</Text>
          <Metric>{selectedData?.cleaning}%</Metric>
        </div>
      </div>

      <div className='percentage-box'>
        <div>
          <Text>Safety</Text>
          <Metric>{selectedData?.safety}%</Metric>
        </div>
        <div>
          <Text>Service</Text>
          <Metric>{selectedData?.service}%</Metric>
        </div>
        <div>
          <Text>Food Taste</Text>
          <Metric>{selectedData?.food_taste}%</Metric>
        </div>
      </div>

    </div>
  );
}

export default Percentages;
