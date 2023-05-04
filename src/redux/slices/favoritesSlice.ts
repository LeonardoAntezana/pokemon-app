import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Pokemon from "../../models/pokemon";

interface FavoritesState {
  value: Pokemon[]
}

const initialState: FavoritesState = {
  value: []
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Pokemon>) => {
      return {
        value: [...state.value, action.payload]
      }
    },
    deleteFavorite: (state, action: PayloadAction<number>) => {
      const filter = state.value.filter(poke => poke.id !== action.payload);
      return {
        value: filter
      }
    }
  }
})

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;