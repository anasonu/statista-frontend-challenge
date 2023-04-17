import './App.css';
import { Grid, Col, Card, Text, Metric } from '@tremor/react';
import List from './components/List';
import Reviews from './components/Reviews';
import { useState, createContext } from 'react';
import Percentages from './components/Percentages';
// import data from './utils/bbq.json';

export const CheckedItemsContext = createContext();

function App() {
  const [checkedItems, setCheckedItems] = useState([]);

  const passedContext = {
    checkedItems,
    setCheckedItems,
  };

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
          <Col numColSpan={1} numColSpanLg={1}>
            <Card>
              <Reviews />
            </Card>
          </Col>
          <Card>
            <Percentages />
          </Card>
        </Grid>
      </div>
    </CheckedItemsContext.Provider>
  );
}

export default App;
