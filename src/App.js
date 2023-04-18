import './App.css';
import { Grid, Col, Card } from '@tremor/react';
import List from './components/List';
import Reviews from './components/Reviews';
import { useState, createContext } from 'react';
import Percentages from './components/Percentages';
import Filters from './components/Filters';
// import data from './utils/bbq.json';

export const CheckedItemsContext = createContext();

function App() {
  const [checkedItems, setCheckedItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const passedContext = {
    checkedItems,
    setCheckedItems,
    filteredItems,
    setFilteredItems
  };

  return (
    <CheckedItemsContext.Provider value={passedContext}>
      <div className='App'>
        <Grid numCols={2} className='gap-2'>
          <Col numColSpan={1} numColSpanLg={2}>
            <Card>
              {/* <Text>Title</Text> */}
              <Filters />
            </Card>
          </Col>
          <Col numColSpan={1} numColSpanLg={1}>
            <List />
          </Col>
          <Col numColSpan={1} numColSpanLg={1}>
            <Card className='reviews-container'>
              <div>
                <Reviews />
              </div>
              <div>
                <Percentages />
              </div>
            </Card>
          </Col>
          {/* <Col numColSpan={1} numColSpanLg={1}>
            <Card>
              <Percentages />
            </Card>
          </Col> */}
        </Grid>
      </div>
    </CheckedItemsContext.Provider>
  );
}

export default App;
