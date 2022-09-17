import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import houseService from './houseService'



const initialState = {
    homes: [],
    isError: false,
    isSuccess:false,
    isLoading: false, 
    message: ''
}

// Create new home
export const createHome = createAsyncThunk('houses/create', async(homeData,thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await houseService.createHome(homeData, token)
    } catch (error) {
        const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
    }
})

// Get Homes
export const getHomes = createAsyncThunk('houses/getAll', async(params,thunkAPI) => {
    try {
        return await houseService.getHomes(params)
    } catch (error) {
        const message =
        console.log(error)
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
    }
})

// Get a single Home
export const showHome = createAsyncThunk('houses/showHome', async(id,thunkAPI) => {
    try {
        return await houseService.showHome(id)
    } catch (error) {
        const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
    }
})


//update Home
export const updateHome = createAsyncThunk('houses/updateHome', async(id,thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await houseService.updateHome(id,token)
    } catch (error) {
        console.log(error.response.data)
        const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
    }
})

// Delete home
export const deleteHome = createAsyncThunk('houses/delete', async(id,thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await houseService.deleteHome(id, token)
    } catch (error) {
        const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
    }
})

export const houseSlice = createSlice({
    name: 'homes',
    initialState, 
    reducers: {
        reset:(state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(createHome.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createHome.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.homes.push(action.payload)
        })
        .addCase(createHome.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = (action.payload)
        })
        .addCase(getHomes.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getHomes.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.homes = (action.payload)
        })
        .addCase(getHomes.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(updateHome.pending, (state) => {
            state.isLoading = true
        })
        .addCase(updateHome.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.homes  = [...state.homes.filter(home => home._id !== action.payload.id), action.payload] 
           
        })
        .addCase(updateHome.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteHome.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteHome.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.homes = state.homes.filter((home) => home._id !== action.payload.id)
        })
        .addCase(deleteHome.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(showHome.pending, (state) => {
            state.isLoading = true
        })
        .addCase(showHome.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.homes = [...state.homes.filter(home => home._id !== action.payload._id), action.payload]
        })
        .addCase(showHome.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        
    }
}) 

export const selectAllHomes = (state) => state.homes


export const {reset} = houseSlice.actions
export default houseSlice.reducer