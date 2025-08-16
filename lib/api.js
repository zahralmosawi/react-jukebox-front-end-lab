import axios from "axios"

const base_Url = import.meta.env.VITE_BACK_END_SERVER_URL

const create = async(data) => {
    try{
        const url = `${base_Url}/add-track`
        const res = await axios.post(url, data)
        return res
    }catch(error){
        return error
    }
}

const update = async(trackId, trackData) => {
    try{
        const url = `${base_Url}/edit-track/${trackId}`
        const res = await axios.put(url, trackData)
        return res
    }catch(error){
        return error
    }
}

const deleteTrack = async(trackId) => {
    try{
        const url = `${base_Url}/${trackId}`
        const res = await axios.delete(url)
        return res
    }catch(error){
        return error
    }
}

export {create, update, deleteTrack}