import baseApi from '@/app/baseApi';
import _ from 'lodash';
import { ReportSkeleton, ReportOutput, Boundaries } from '@hraadvisors/report-api-types'
import { StandardChart } from '@/types/StandardChart';
import { AssetInfo } from '@/types/AssetInventory';

// Define a service using a base URL and expected endpoints 
export const DataDashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkeleton: builder.query<ReportSkeleton, { geoId?: number | string, reportId?: string } | void>({
      query: ({ reportId ='65e0bdac580dd5243152feff',  geoId = 48 } = {}) => ({
        method: 'GET',
        url: `reports/${reportId}/output/${ geoId }/skeleton`,
      }),
    }),
    getReport: builder.query<ReportOutput<StandardChart>, { geoId?: number| string, reportId?: string , pick: string  } >({
      query: ({ reportId ='65e0bdac580dd5243152feff',  geoId = 48, pick }) => ({
        method: 'GET',
        url: `reports/${reportId}/output/${ geoId }`,
        params: { pick }
      }),
    }),
    getBoundaries: builder.query<{ boundaries: Boundaries}, { geoId?: number| string, reportId?: string  } | void >({
      query: ({ reportId ='65e0bdac580dd5243152feff',  geoId = 48 }  = {}) => ({
        method: 'GET',
        url: `reports/${reportId}/output/${ geoId }/boundaries?container=state&peers=65428489b4440631aad90229&segments=county`,
      }),
    }),
    getAssetInventory: builder.query<{ records: AssetInfo[]}, void >({
      query: () => ({
        method: 'GET',
        url: `https://resourcefinder-qqszjokhaq-uc.a.run.app/`,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSkeletonQuery, useGetReportQuery, usePrefetch: usePrefetchDataDashboard, useGetBoundariesQuery, useGetAssetInventoryQuery } = DataDashboardApi;
