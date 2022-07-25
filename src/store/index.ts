import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import tasksReducer from "./slices/tasksSlice";

export const index = configureStore({
  reducer: {
    categories: categoriesReducer,
    tasks: tasksReducer,
  },
});

export type AppDispatch = typeof index.dispatch;
export type RootState = ReturnType<typeof index.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
