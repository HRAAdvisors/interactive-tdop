import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import baseApi from './baseApi';
import  { uiReducer } from '@/stores/uiSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(baseApi.middleware),
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
     ui: uiReducer,
  },
});


export const persistor = persistStore(store);


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
