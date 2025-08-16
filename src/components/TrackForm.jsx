import { useState, useEffect } from "react"
import {create, update} from '../../lib/api'

const TrackForm = ({setFormIsShown, trackData}) => {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        artist: ''
    })

    useEffect(()=>{
        if(trackData){
            setFormData({
                _id: trackData._id,
                title: trackData.title,
                artist: trackData.artist
            })
        }else{
            setFormData({
                title: '',
                artist: ''
            }, [trackData])
        }
    },[trackData])

    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    async function handleSubmit(event){
        event.preventDefault()

        if(isSubmitting) return 
        setIsSubmitting(true)

        const trackId = formData._id
        const trackData = {
            title: formData.title,
            artist: formData.artist
        }

        let res
        if(trackId){
            res = await update(trackId, trackData)
        } else{
            res = await create(trackData)
        }

        if(res.status === 201 || res.status === 200){
            setFormIsShown(false)
        }
        setIsSubmitting(false)

    }

    return(
        <>
        <h2>{formData._id ? 'Edit Track' : 'Add New Track'}</h2>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
            
            <label htmlFor="artist">Artist:</label>
            <input type="text" id="artist" name="artist" value={formData.artist} onChange={handleChange}/>

            <button type="submit">Submit</button>
        </form>
        </>
    )    
}

export default TrackForm