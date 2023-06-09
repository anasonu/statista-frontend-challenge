import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
} from '@tremor/react';
import { useContext } from 'react';
import { CheckedItemsContext } from '../App';
import Checkbox from './Checkbox';
import data from '../utils/bbq.json';

function List() {
  const { checkedItems, filteredItems } = useContext(CheckedItemsContext);

  const tableData = filteredItems.length > 0 ? filteredItems : data;

  return (
    <Card className='table-container'>
      <Title>List of Available BBQs</Title>
      <Table className='mt-5'>
        <TableHead>
          <TableRow>
            <TableHeaderCell></TableHeaderCell>
            <TableHeaderCell>Brand</TableHeaderCell>
            <TableHeaderCell>Device Type</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((item, index) => (
            <TableRow key={index} className={checkedItems.includes(item.id) ? 'row hover selected' : 'row hover'}>
              <TableHeaderCell>
                <Checkbox id={item.id} />
              </TableHeaderCell>
              <TableCell>{item.brand}</TableCell>
              <TableCell>
                <Text>{item.device_type}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.date_introduced}</Text>
              </TableCell>
              <TableCell>
                <Text>${item.price}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export default List;
