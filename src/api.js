import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID dZ505VLsRJWxsaIwNUyJ7uWsGjDLivRhrpf3BA9cK6Y'
        },
        params: {
            query: 'porsche'
        }
    })

    console.log(response)
    
    return response
}

export default searchImages