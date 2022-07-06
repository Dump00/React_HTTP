import { useState } from 'react';
import DummyDataList from './components/DummyDataList';
import LoadingSpinner from './components/LoadingSpinner';

const App1 = () => {

  const [dummyData, setDummyData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchDummyDataHandler = async () => {
    setIsLoading(true)
      const respose = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await respose.json()
      const dataPack = data.map(d => {
        return {
          id: d.id,
          title: d.title,
          body: d.body
        }
      })
      setDummyData(dataPack)
    setIsLoading(false)
  }

  const clearDataHandler = () => {
    setDummyData([])
  }

  return (
    <div className="container">
      <button onClick={fetchDummyDataHandler} type="button" className="btn btn-warning m-5">Fetch Dummy Data</button>
      <button onClick={clearDataHandler} type="button" className="btn btn-danger m-5">Clear Data</button>
      <div>
        {!isLoading && <DummyDataList dataList={dummyData}/>}
        {isLoading && <LoadingSpinner />}
      </div>
    </div>
  );
}

export default App1;
