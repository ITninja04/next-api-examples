import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { placeHolderApi} from "@/features/api";
import appReducer from "@/features/app";
import blogReducer from "@/features/blog";
import {fakeUserAPI} from "@/features/mockUsers";
import usersReducer from "@/features/users";
export const store = configureStore({
  reducer: {
    [placeHolderApi.reducerPath]: placeHolderApi.reducer,
    [fakeUserAPI.reducerPath]: fakeUserAPI.reducer,
    users: usersReducer,
    app: appReducer,
    blog: blogReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(placeHolderApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,RootState,unknown,AnyAction>
