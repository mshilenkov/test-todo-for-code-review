/* VENDOR */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

/* APPLICATION */
import { RootState } from "../index";

export interface CategoriesState {
  id: string;
  name: string;
  description: string;
}

const initialState: CategoriesState[] = [
  {
    id: "d485a644-5a24-4f55-b3f7-a083338be879",
    name: "Категория",
    description: "Описание может быть длинным",
  },
  {
    id: "52f7451a-0f06-4ddc-affa-b1d8ed24aee3",
    name: "Категория2",
    description: "Описание может быть длинным",
  },
  {
    id: "36704c57-4575-4112-b962-948b04a20506",
    name: "Категория3",
    description: "Описание может быть длинным",
  },
];

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    categoriesAdded: (state, action) => {
      state.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    categoriesUpdated: (state, action) => {
      const { id, name, description } = action.payload,
        existingCategory = state.find((category) => category.id === id);

      if (existingCategory) {
        existingCategory.name = name;
        existingCategory.description = description;
      }
    },
    categoriesRemoved: (
      state: CategoriesState[],
      action: PayloadAction<string>
    ) => {
      // можно было бы использовать filter например
      // неиспользуемые параметры
      let rm = (el: CategoriesState, i: number, arr: CategoriesState[]) =>
          el.id === action.payload,
        rmTaskIndex = state.findIndex(rm);

      state.splice(rmTaskIndex, 1);
    },
  },
});

export const { categoriesAdded, categoriesUpdated, categoriesRemoved } =
  categoriesSlice.actions;

export const selectAllCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
