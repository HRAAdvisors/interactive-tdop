import { DataDashboardApi } from '@/services/dataDashboard';
import { AssetInfo } from '@/types/AssetInventory';
import {  PayloadAction, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

interface MapSliceState {
  showSideNav: boolean;
  assets: AssetInfo[]
}

const initialState: MapSliceState = {
  showSideNav: false,
  assets: []
};

const uiSlice = createSlice({
  extraReducers: (builder) => {
    builder
    // .addMatcher(authApi.endpoints.login.matchPending, (_state, action) => {
    //   console.log('pending', action)
    // })
    .addMatcher(DataDashboardApi.endpoints.getAssetInventory.matchFulfilled, (state, action) => {
      // console.log('done', action.payload)

      state.assets = action.payload.records.filter(asset =>  
        asset.fields.Asset &&
        asset.fields['County (from Org County)'] &&
        asset.fields['Asset Broadband Focus Area'] &&
        asset.fields['Asset Covered Population'] &&
        asset.fields['Organization Sub-Type'])
        .sort((a: any, b: any) => {
          if (a.fields.Asset < b.fields.Asset) {
            return -1;
          }
          if (a.fields.Asset > b.fields.Asset) {
            return 1;
          }
          return 0;
        });

    })
    // .addMatcher(authApi.endpoints.login.matchRejected, (state, action) => {
    //   // console.log('rejected', action)
    // })
  },
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
