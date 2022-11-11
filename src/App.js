import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Title from './components/Title.js';
import Modal from './components/Modal.js'
import Uni from './components/Unis';
import NewUniForm from './components/NewUniForm';
function App() {
  const [unis , setUnis] = useState([])
  const [showEvents , setShowEvents] = useState(true)
  const [showModal , setShowModal] = useState(false)

  const addUni = (uni) =>{
    setUnis ((prevUnis) => {
      return [...prevUnis,uni]
    })
    setShowModal(false)
  }


  const handleClick = (id) =>{
    console.log('clicked on button')
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

      <button onClick={handleOpen}>Add new uni</button>

      {showEvents && <Uni unis={unis} handleClick = {handleClick}/> }

      {showModal && <Modal handleClose = {handleClose}>
        <NewUniForm addUni={addUni}/>
      </Modal>}
    </div>
  );
}


export default App;



