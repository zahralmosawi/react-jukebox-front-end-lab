import axios from "axios"

const base_Url = import.meta.env.VITE_BACK_END_SERVER_URL

const create = async(data) => {
    try{
        const url = `${base_Url}/tracks/add-track`
        const res = await axios.post(url, data)
        return res
    }catch(error){
        return error
    }
}

export {create}