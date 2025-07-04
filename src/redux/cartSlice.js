import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
    address: [{}],
  },
  reducers: {
    addItem: (state, action) => {
      let item = state.items.find((item) => item.id == action.payload.id);
      const data = { ...action.payload, quantity: 1 };
      if (!item) {
        state.items.push(data);
      } else {
        item.quantity++;
      }
    },
    emptyItems: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
              state.items = state.items.filter((item) => item.id !== action.payload);
    },
    incrementItem: (state, action) => {
      let item = state.items.find((item) => item.id == action.payload.id);
      if (item) {
        item.quantity++;
      }
    },
    couneInc: (state) => {
      state.count++;
    },
    couneDec: (state,action) => {
        if(action.payload){
            state.count -= action.payload;
            return;
        }
      state.count--;
    },
    emptyCount: (state) => {
      state.count = 0;
    },
    addaddress: (state, action) => {
      state.address = action.payload;
    },
    decrementItem: (state, action) => {
      console.log("Action", action);
      let item = state.items.find((item) => item.id == action.payload.id);
      console.log("item", item);
      item.quantity--;
      if (item.quantity == 0) {
        let newItem = state.items.filter((item) => {
          if (item.id != action.payload.id) {
            return true;
          }
        });
        state.items = newItem;
      }
    },
  },
});

export const { addItem, incrementItem, decrementItem,couneInc ,couneDec, removeItem,addaddress,emptyCount ,emptyItems} = cartSlice.actions;

export default cartSlice.reducer;
