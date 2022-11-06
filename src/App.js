import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Title from './components/Title.js';
import Modal from './components/Modal.js'
function App() {
  const [unis , setUnis] = useState([
    {name:'sharif' , id:1},
    {name:'tehran' ,id:2},
    {name:'elmof' ,id:3}
  ])
  const [showEvents , setShowEvents] = useState(true)
  const [showModal , setShowModal] = useState(false)

  const handleClick = (id) =>{
    console.log('clicked on buttin')
    setUnis(unis.filter((uni) => {
      return id !== uni.id
    }))
  }

  const handleClose = () =>{
    setShowModal(false)
  }

  const handleOpen = () =>{
    setShowModal(true)
  }

  console.log(showModal)

  return (
    <div className="App">
      <Title onvan="this is Onvan" zironvan="this is zironvan" />
      <button onClick={handleOpen}>Show Modal</button>
      {showEvents && unis.map((uni, index) => (
        <div key={uni.id}>
          <h2> shomare {index+1} - {uni.name}</h2>
          <button onClick={() => handleClick(uni.id)}> delete {uni.name}</button>
        </div>
      ))}

      {showModal && <Modal handleClose = {handleClose}>
        <h2>10% OFF !!</h2>
        <p>use this code to get 10% OFF</p>
      
      </Modal>}
    </div>
  );
}


export default App;



