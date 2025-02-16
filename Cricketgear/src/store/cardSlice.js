import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
    name: 'card',
    initialState: [],
    reducers: {
        addState(state, action) {
            state.push(action.payload);  // ✅ Adds new item to the array
        },
        removeState(state, action) {
            return state.filter(item => item.id !== action.payload);  // ✅ Removes item by ID
        }
    }
});

export default cardSlice.reducer;
export const { addState, removeState } = cardSlice.actions;
