import axios from 'axios'
import { useState, useEffect } from 'react'
import DeleteTrackButton from './DeleteTrackButton'

const TrackList = ({editedTrack, onPlay}) => {
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
        <div>
        {
            <ol>
                {
                    tracks.map(track => {
                        return(
                            <>
                            <li key={track._id}>
                             <p>{track.title} by {track.artist}</p> 
                             <button onClick={() => onPlay(track)}>Play</button>
                             <button onClick={() => editedTrack(track)}>Edit</button>
                             <DeleteTrackButton trackId= {track._id} getAllTracks = {getAllTracks}/>
                            </li>
                            </> 
                        )
                    })
                }
            </ol>
        }
        </div>
    )

}
export default TrackList