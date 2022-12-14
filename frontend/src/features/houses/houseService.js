import axios from 'axios'



const API_URL = '/api/houses/'

// Create new home

const createHome = async (homeData, token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

    const response = await axios.post(API_URL, homeData, config)

    return response.data
}


// Get all homes

const getHomes = async () => {
    
    const response = await axios.get(API_URL  )

    
    return response.data
}

//Get Homes by search

const getHomesBySearch = async (searchQuery) => {
  const response = await axios.get(API_URL + `search?searchQuery=${searchQuery.search || 'none'}` )
  
  console.log(response)
  
  return response.data
}

// Get a homes

const showHome = async (homeId) => {
    
    const response = await axios.get(API_URL + homeId)

    return response.data
}


// update the home
const updateHome = async (homeData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  
  const response = await axios.put(API_URL + homeData.id,homeData, config)

  return response.data
}

// delete home

const deleteHome = async (homeId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + homeId , config)

  return response.data
}


const houseService = {
    createHome,
    getHomes, 
    updateHome,
    deleteHome,
    showHome,
    getHomesBySearch
}

export default houseService