import { useState } from "react"

import {create} from '../../lib/api'

const TrackForm = ({setFormIsShown}) => {
    const [formData, setFormData] = useState({
        title: '',
        artist: ''
    })

    return(
        <>
        <h2>Add New Track</h2>
        
        <form>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="tilte" value={formData.title}/>
            
            <label htmlFor="artist">Artist:</label>
            <input type="text" id="artist" name="artist" value={formData.artist}/>

            <button type="submit">Submit</button>
        </form>
        </>
    )    
}

export default TrackForm