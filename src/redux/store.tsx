import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
import filtersSlice from "./slices/filtersSlice";
import filterAction from "./middleware/filterMiddleware";

const rootReducer = combineReducers({
  data: dataReducer,
  filters: filtersSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) => gDM().concat(filterAction),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
