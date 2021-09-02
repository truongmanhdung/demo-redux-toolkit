import {createSlice} from '@reduxjs/toolkit'

const users = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        login: (state,action) => {
            state.push(action)
        },
        signup: (state,action) => {
            state.push(action)
        }
    },
})

const { reducer, actions } = users;
export const {login,signup} = actions;
export default reducer;