import { createApi } from '@reduxjs/toolkit/query/react'


const initialState = {
    value: [],
}

export const apiSlice = createSlice({
    name: 'apiConnect',
    initialState, 
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer