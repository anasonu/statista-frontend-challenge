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

        <div className={selectedData?.quality >= 50 ? 'green' : 'orange'}>
          <Text>Quality</Text>
          <Metric>{selectedData?.quality}%</Metric>
        </div>
        <div className={selectedData?.design >= 50 ? 'green' : 'orange'}>
          <Text>Design</Text>
          <Metric>{selectedData?.design}%</Metric>
        </div>
        <div className={selectedData?.cleaning >= 50 ? 'green' : 'orange'}>
          <Text>Cleaning</Text>
          <Metric>{selectedData?.cleaning}%</Metric>
        </div>
      </div>

      <div className='percentage-box'>
        <div className={selectedData?.safety >= 50 ? 'green' : 'orange'}>
          <Text>Safety</Text>
          <Metric>{selectedData?.safety}%</Metric>
        </div>
        <div className={selectedData?.service >= 50 ? 'green' : 'orange'}>
          <Text>Service</Text>
          <Metric>{selectedData?.service}%</Metric>
        </div>
        <div className={selectedData?.food_taste >= 50 ? 'green' : 'orange'}>
          <Text>Food Taste</Text>
          <Metric>{selectedData?.food_taste}%</Metric>
        </div>
      </div>

    </div>
  );
}

export default Percentages;
