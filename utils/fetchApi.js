import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '17d9c2a2dcmsh07d6c2987d1a2acp1bd111jsn3d0269b32e45',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data
}