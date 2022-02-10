import './App.css';
import { useState, useEffect } from 'react'

import { MessageList } from './components/Messages/MessageList'
import { Toolbar } from './components/Tooolbar/Toolbar'

export const App = () => {

  const [data, setData] = useState([])
  const [apiURL, setApiURL] = useState("http://localhost:8082/api/messages")

  useEffect(() => {
    const fetchMessages = async () => fetch(apiURL)
      .then(res => res.json())
      .then(json => [...json.map(msg => ({ selected: false, ...msg }))])
      .then(data => setData(data))
    fetchMessages()
  }, [])


  const patchMessages = async ({ ids, property, value }) => {
    if (property === "selected") {
      setData([...data.map(msg => ids.includes(msg.id) ? { ...msg, selected: value } : msg)])
      return;
    }
    const command = propertyToCommandMap.get(property)
    fetch(apiURL, {
      method: 'PATCH',
      body: JSON.stringify({
        "messageIds": ids,
        "command": command.cmd,
        [command.prop]: value
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => mergeData(json))
  }

  const propertyToCommandMap = new Map([
    ["starred", { cmd: "star", prop: "star" }],
    ["addLabel", { cmd: "addLabel", prop: "label" }],
    ["removeLabel", { cmd: "removeLabel", prop: "label" }],
    ["read", { cmd: "read", prop: "read" }],
    ["delete", { cmd: "delete", prop: "delete" }]
  ])

  const mergeData = (json) => {
    if (json.error || !Array.isArray(json)) {
      return;
    }
    const newData = json.map(msg => ({ ...msg, selected: !!data.find(m => m.id === msg.id)?.selected }))
    setData(newData)
  }

  return (
    <div className="App">
      <div className="url-container">API URL: <input type="text" className="url input" value={apiURL} onChange={(e) => setApiURL(e.target.value)} /></div>
      <Toolbar data={data} changeHandler={patchMessages} />
      <MessageList data={data} changeHandler={patchMessages} />
    </div>
  );
}