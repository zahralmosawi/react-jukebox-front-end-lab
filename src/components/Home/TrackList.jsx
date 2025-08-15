import axios from 'axios'
import { useState, useEffect } from 'react'

const TrackList = () => {
    const [tracks, setTracks] = useState([])

    const getAllTracks = async () => {
        const url = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`
        const res = await axios.get(url) 
        setTracks(res.data)
    }

    useEffect(() => {
        getAllTracks()
    }, [])

    return(
        <>
        {
            <ol>
                {
                    tracks.map(track => {
                        return(
                          <p>{track.title} by {track.artist}</p>  
                        )
                    })
                }
            </ol>
        }
        </>
    )

}
export default TrackList