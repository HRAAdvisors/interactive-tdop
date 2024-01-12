import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import baseApi from './baseApi';
import mapReducer from '@/stores/mapSlice';

export const store = configureStore({
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(baseApi.middleware),
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
     map: mapReducer,
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
