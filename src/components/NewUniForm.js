import { useState } from 'react'
import './NewUniForm.css'

export default function NewUniForm({addUni}) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    const resetForm = () =>{
        setTitle('')
        setDate('')
    }

    const handleSubmit = (e) =>{ 
        e.preventDefault()

        const uni = {
            title: title,
            date: date,
            id :Math.floor(Math.random() *10000) 
        }
        console.log(uni)
        addUni(uni)
        resetForm()
    }

    return (
        <form className='new-uni-form' onSubmit={handleSubmit}>
            <label>
                <span>Uni title</span>
                <input type="text"onChange={(e) => setTitle(e.target.value)} value={title}/>
            </label>
            <label>
                <span>Uni Date</span>
                <input type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
            </label> 
            <button>Submit</button>
            <p onClick={resetForm}>reset values</p>
        </form>
    )
} 