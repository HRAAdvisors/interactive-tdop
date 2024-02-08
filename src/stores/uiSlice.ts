import {  PayloadAction, createSlice } from '@reduxjs/toolkit';

interface MapSliceState {
  showSideNav: boolean;
}

const initialState: MapSliceState = {
  showSideNav: false
};

const uiSlice = createSlice({
  initialState,
  name: 'map',
  reducers: {
    reset: () => initialState,
    setShowSideNav(state, action: PayloadAction<boolean>) {
      state.showSideNav = action.payload;
    },
  },
});

export const { reset, setShowSideNav } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;

export default uiSlice;

// export const selectIsAuthenticated = (state: RootState) =>
//   state.auth.isAuthenticated
