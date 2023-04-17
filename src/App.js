import './App.css';
import { Grid, Col, Card, Text, Metric } from '@tremor/react';
import List from './components/List';

function App() {
  return (
    <div className='App'>
      <Grid numCols={2} className='gap-2'>
        <Col numColSpan={1} numColSpanLg={2}>
          <Card>
            <Text>Title</Text>
            <Metric>KPI 1</Metric>
          </Card>
        </Col>
        <Col  numColSpan={1} numColSpanLg={2}>
          <Card>
            <Text>Title</Text>
            <Metric>KPI 2</Metric>
            {/* <Table /> */}
          </Card>
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

      <List />
    </div>
  );
}

export default App;
