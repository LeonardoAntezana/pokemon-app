import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../../utilities";
import Pokemon from "../../models/pokemon";

interface FavoritesState {
  value: Pokemon[]
}

const initialState: FavoritesState = {
  value: getLocalStorage('favorites', []),
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Pokemon>) => {
      setLocalStorage('favorites', [...state.value, action.payload])
      return {
        value: [...state.value, action.payload]
      }
    },
    deleteFavorite: (state, action: PayloadAction<number>) => {
      const filter = state.value.filter(poke => poke.id !== action.payload);
      setLocalStorage('favorites', filter);
      return {
        value: filter
      }
    }
  }
})

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;