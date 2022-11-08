import axios from 'axios'


export const multipleFilesUpload = async (data, options) => {
    try {
        const res = await axios.post(`http://localhost:5000/api/auth/upload/mul`, data, options)
        console.log(res.data)
    } catch (error) {

    }
}

export const getMultipleFiles = async () => {
    try {
        const { data } = await axios.get(`http://localhost:5000/api/auth/getfiles`)
        return data;
    } catch (error) {

    }
}



