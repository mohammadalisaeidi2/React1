import './Modal.css'
import ReactDOM from 'react-dom'


export default function Modal({children , handleClose}) {
  //create portal used for render component in somewherer else 
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
        <div className="modal">
            {children}
            <button onClick={handleClose}>Close</button>
        </div>
      
    </div>
  ), document.body)
}
