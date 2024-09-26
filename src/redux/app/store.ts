import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../features/Api/baseApi";
import carReducer from "../features/Car/CarSlice";
import loginReducer from "../features/auth/authSlice";
import bookReducer from "../features/book/bookSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// ...
const persistConfig = {
  key: "root",
  storage,
};
const persistAuthReducer = persistReducer(persistConfig, loginReducer);

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistAuthReducer,
    cars: carReducer,
    booked: bookReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
