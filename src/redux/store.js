import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import booksReducer from "./books/books-slice";
import filterReducer from "./filter/filter-slice";

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: "books",
  storage,
  whitelist: ["books"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
