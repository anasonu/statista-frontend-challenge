import { Bold, Flex, Text, Title, BarList } from '@tremor/react';
import React, { useContext } from 'react';
import { CheckedItemsContext } from '../App';
import data from '../utils/bbq.json';

function Reviews() {
  const { checkedItems } = useContext(CheckedItemsContext);

  const selectedData = data.find(item => checkedItems.includes(item.id));
  const reviewsSelected = selectedData?.reviews;

  return (
    <div>
      <Title>Reviews</Title>
      <Flex className='mt-4'>
        <Text></Text>
        <Text>
          <Bold>Reviews</Bold>
        </Text>
      </Flex>
      <BarList data={reviewsSelected} className='mt-2' />
    </div>
  );
}

export default Reviews;
