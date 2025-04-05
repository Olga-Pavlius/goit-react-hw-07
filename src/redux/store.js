import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";  // Імпортуємо редуктор фільтру

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,  // Додаємо до редюсера фільтр
  },
});
