import { useState } from 'react';
import DummyDataList from './components/DummyDataList';
import LoadingSpinner from './components/LoadingSpinner';

const App3 = () => {

  const [dummyData, setDummyData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchDummyDataHandler = () => {
    setIsLoading(true)

    const http = new XMLHttpRequest();
    const API_URL = 'https://jsonplaceholder.typicode.com/posts'

    http.onreadystatechange = ()=> {
        if (http.readyState === 4 && http.status === 200){
            const data = JSON.parse(http.responseText)
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
    };
    http.open('GET', API_URL, true);
    http.send();
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

export default App3;