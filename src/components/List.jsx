// import { StatusOnlineIcon } from '@heroicons/react/outline';
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
  // Badge,
} from '@tremor/react';
import data from '../utils/bbq.json'

function List() {
  return (
    <Card>
      <Title>List of Available BBQs</Title>
      <Table className='mt-5'>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Brand</TableHeaderCell>
            <TableHeaderCell>Device Type</TableHeaderCell>
            <TableHeaderCell>Date Introduced</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
          <TableRow key={index}>
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
            {/* <TableCell>
              <Badge color="emerald" icon={StatusOnlineIcon}>
                {item.status}
              </Badge>
            </TableCell> */}
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export default List;