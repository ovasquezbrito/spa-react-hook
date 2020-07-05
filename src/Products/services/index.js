import axios from 'axios'

// Servicios 
const baseUrl = process.env.REACT_APP_BASE_URL

export const getProducts = async () => {
    try {
        const response = await axios({
            url: `${baseUrl}/products`,
            method: 'GET'
        })
        return response
    } catch (error) {
        console.log(error)
    }
}

