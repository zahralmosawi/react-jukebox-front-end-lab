import { useState } from "react"

import {create} from '../../lib/api'

const TrackForm = ({setFormIsShown}) => {

    const [formData, setFormData] = useState({
        title: '',
        artist: ''
    })

    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    async function handleSubmit(event){
        event.preventDefault()
    }

    return(
        <>
        <h2>Add New Track</h2>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="tilte" value={formData.title} onChange={handleChange}/>
            
            <label htmlFor="artist">Artist:</label>
            <input type="text" id="artist" name="artist" value={formData.artist} onChange={handleChange}/>

            <button type="submit">Submit</button>
        </form>
        </>
    )    
}

export default TrackForm