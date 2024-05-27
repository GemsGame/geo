import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import termo from "../../assets/json/termo_response.json";
import { Query } from "../../services/Query";

const query = new Query();

interface IState {
  [key: number | string]: {};
}
export const initialState: IState = {};

export const getData = createAsyncThunk<{
  data: any; name: string
}, {name: string}>(
  "data/getData",
  async ({ name }: {name: string}, { rejectWithValue }) => {
    try {
      const filters = query.getQueryFilters();

     
      if (filters.from && filters.to) {
       
       
        const data = termo.data?.filter((item: { time: string | number | Date; }) => {

          if (
            new Date(item.time) >= new Date(filters.from) &&
            new Date(item.time) <= new Date(filters.to)
          ) {
            return item;
          }
        });

        const result = {...termo};
        result['data'] = data;
  
        return { name, data: result };
      }

      return { name, data: termo };
    } catch (err) {
      const error = err as Error;
      return rejectWithValue(error.message);
    }
  }
);

const measurementsSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state[action.payload.name] = action.payload.data;
    });
  },
});

export default measurementsSlice.reducer;
