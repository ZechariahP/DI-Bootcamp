import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
};

export const delayIncrementThunk = createAsyncThunk("counter/delay", () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(5);
    }, 5000);
  });
});

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
        },
        //delayIncrement: (state) => {
        //    setTimeout(() => {
        //        state.count += 5;
        //    }, 5000);
        //},
    },
    extraReducers: (builder) => {
        builder
        .addCase(delayIncrementThunk.fulfilled, (state, action) => {
            state.count += action.payload;
        });
    },
});

export const { increment, decrement, reset, incrementByNum, incrementBy2Nums, incrementWithPrepare, delayIncrement } = counterSlice.actions;
export default counterSlice.reducer;


