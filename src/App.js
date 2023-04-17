import './App.css';
import { Grid, Col, Card, Text, Metric } from '@tremor/react';
import List from './components/List';
import { useState, createContext } from 'react';

export const CheckedItemsContext = createContext();

function App() {
  const [checkedItems, setCheckedItems] = useState([]);

  const passedContext = {
    checkedItems,
    setCheckedItems
  }

  return (
    <CheckedItemsContext.Provider value={passedContext}>
      <div className='App'>
        <Grid numCols={2} className='gap-2'>
          <Col numColSpan={1} numColSpanLg={2}>
            <Card>
              <Text>Title</Text>
              <Metric>KPI 1</Metric>
            </Card>
          </Col>
          <Col numColSpan={1} numColSpanLg={2}>
            <List />
          </Col>
          <Col>
            <Card>
              <Text>Title</Text>
              <Metric>KPI 3</Metric>
            </Card>
          </Col>
          <Card>
            <Text>Title</Text>
            <Metric>KPI 4</Metric>
          </Card>
        </Grid>
      </div>
    </CheckedItemsContext.Provider>
  );
}

export default App;
