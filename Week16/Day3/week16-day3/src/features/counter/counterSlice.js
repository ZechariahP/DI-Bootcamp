import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByNum: (state, action) => {
            state.count += action.payload;
        },
        incrementBy2Nums: (state, action) => {
            state.count += action.payload.num1 + action.payload.num2;
        },
        incrementWithPrepare: {
            reducer: (state, action) => {
                state.count += action.payload;
            },
            prepare: (param1, param2) => {
                return {
                    payload: param1 + param2,
                };
            },
        }
    },
});

export const { increment, decrement, reset, incrementByNum, incrementBy2Nums, incrementWithPrepare } = counterSlice.actions;
export default counterSlice.reducer;


