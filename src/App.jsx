import {useState} from 'react'
import TrackList from './components/Home/TrackList'
import TrackForm from './components/TrackForm'

const App = () => {
  const [formIsShown, setFormIsShown] = useState(false)

  function handleShowFormClick (){
    setFormIsShown(true)
  }

  return(
    <>
    <button onClick={handleShowFormClick}>Add New Track</button>
    {formIsShown ? <TrackForm setFormIsShown = {setFormIsShown}/> : null }
    <TrackList/>
    </>
  )
}

export default App