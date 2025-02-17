import { createSlice } from '@reduxjs/toolkit';

let dataFromLocalStorage =JSON.parse(localStorage.getItem("praveen"));

const cardSlice = createSlice({
    name: 'card',
    initialState: dataFromLocalStorage,
    reducers: {
        addState(state, action) {
            state.push(action.payload);  // ✅ Adds new item to the array
            localStorage.setItem("praveen",JSON.stringify([...state]))
            
        },
        removeState(state, action) {
            let newstate= state.filter(item => item.id !== action.payload);  // ✅ Removes item by ID
            localStorage.setItem("praveen",JSON.stringify([...newstate]))
            return newstate;
        }
    }
});

export default cardSlice.reducer;
export const { addState, removeState } = cardSlice.actions;