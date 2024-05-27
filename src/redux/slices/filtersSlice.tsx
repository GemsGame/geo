import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilter {
  name: string;
  data: string;
  value: string;
}

interface IState {
  [key: string | number]: {
    [key: string | number]: IFilter;
  };
}

export const initialState: IState = {};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    add(state, action: PayloadAction<IFilter>) {
      if (!state[action.payload.data]) {
        state[action.payload.data] = {};
      }
      state[action.payload.data][action.payload.name] = action.payload;
    },
  },
});

export const { add } = filtersSlice.actions;
export default filtersSlice.reducer;
