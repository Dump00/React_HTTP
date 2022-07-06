import { useState } from 'react';
import DummyDataList from './components/DummyDataList';

const App = () => {

  const [dummyData, setDummyData] = useState([])

  const fetchDummyDataHandler = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      return response.json()
    }).then(data => {
      const dataPack = data.map(d => {
        return {
          id: d.id,
          title: d.title,
          body: d.body
        }
      })
      setDummyData(dataPack)
    })
  }

  const clearDataHandler = () => {
    setDummyData([])
  }

  return (
    <div className="container">
      <button onClick={fetchDummyDataHandler} type="button" className="btn btn-warning m-5">Fetch Dummy Data</button>
      <button onClick={clearDataHandler} type="button" className="btn btn-danger m-5">Clear Data</button>
      <DummyDataList dataList={dummyData}/>
    </div>
  );
}

export default App;
