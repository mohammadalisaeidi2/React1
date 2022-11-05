import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [unis , setUnis] = useState([
    {name:'sharif' , id:1},
    {name:'tehran' ,id:2},
    {name:'elmof' ,id:3}
  ])
  const [showEvents , setShowEvents] = useState(true)
  const handleClick = (id) =>{
    console.log('clicked on buttin')
    setUnis(unis.filter((uni) => {
      return id !== uni.id
    }))
  }
  return (
    <div className="App">
      {showEvents && unis.map((uni, index) => (
        <div key={uni.id}>
          <h2> shomare {index+1} - {uni.name}</h2>
          <button onClick={() => handleClick(uni.id)}> delete {uni.name}</button>
        </div>
      ))}
    </div>
  );
}


export default App;



