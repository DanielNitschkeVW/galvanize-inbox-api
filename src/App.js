import './App.css';
import { mockData } from './components/Misc/mockData'
import { useState, useEffect } from 'react'

import { MessageList } from './components/Messages/MessageList'
import { Toolbar } from './components/Tooolbar/Toolbar'

export const App = () => {

  const [data, setData] = useState([])


  const changeHandler = ({id, property, value}) => 
    setData([...data.map(entry => entry.id === id ? { ...entry, [property]: value } : entry)])

  useEffect(() => {
    setData(mockData)
  }, [])

  return (
    <div className="App">
      <Toolbar data={data} setData={setData} />
      <MessageList data={data} changeHandler={changeHandler} />
    </div>
  );
}