import {deleteTrack} from '../../../lib/api'

const DeleteTrackButton = ({trackId, getAllTracks}) => {

    const handleDelete = async () => {
        await deleteTrack(trackId)
        getAllTracks()
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default DeleteTrackButton