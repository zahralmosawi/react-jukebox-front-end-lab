import {useState} from 'react'

import TrackList from './components/Home/TrackList'
import TrackForm from './components/TrackForm'
import NowPlaying from './components/Home/NowPlaying'

const App = () => {
  const [formIsShown, setFormIsShown] = useState(false)
  const [editTrack, setEditTrack] = useState(null)
  const [currentPlaying, setCurrentPlaying] = useState(null)

  function handleShowFormClick(){
    setFormIsShown(true)
  }

  function handleEdit(track){
    setEditTrack(track)
    setFormIsShown(true)
  }

  return(
    <>
    <button onClick={handleShowFormClick}>Add New Track</button>
    {formIsShown ?
     <TrackForm setFormIsShown = {setFormIsShown} trackData = {editTrack}/> 
     : <> <TrackList editedTrack={handleEdit} onPlay={(track) => setCurrentPlaying(track)}/> 
     <NowPlaying track={currentPlaying}/> </> }
    </>
  )
}

export default App