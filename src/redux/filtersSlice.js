import { createSlice } from "@reduxjs/toolkit";

// Створюємо початковий стан для фільтра
const initialState = {
  name: "", // фільтр по імені контакту
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // Редуктор для оновлення фільтру
    setFilter: (state, action) => {
      state.name = action.payload; // Оновлюємо фільтр
    },
  },
});

export const { setFilter } = filtersSlice.actions;

// Експортуємо редюсер для підключення до store
export default filtersSlice.reducer;
