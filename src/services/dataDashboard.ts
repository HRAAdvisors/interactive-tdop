import baseApi from '@/app/baseApi';
import _ from 'lodash';
import { ReportSkeleton, ReportOutput } from '@hraadvisors/report-api-types'
import { StandardChart } from '@/types/StandardChart';

// Define a service using a base URL and expected endpoints 
export const DataDashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkeleton: builder.query<ReportSkeleton, { state?: number, reportId?: string } | void>({
      query: ({ reportId ='64f242216f6b32587c5c17e3',  state = 48 } = {}) => ({
        method: 'GET',
        url: `reports/${reportId}/output/${ state }/skeleton`,
      }),
    }),
    getReport: builder.query<ReportOutput<StandardChart>, { state?: number, reportId?: string , pick: string  } >({
      query: ({ reportId ='64f242216f6b32587c5c17e3',  state = 48, pick }) => ({
        method: 'GET',
        url: `reports/${reportId}/output/${ state }`,
        params: { pick }
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSkeletonQuery, useGetReportQuery, usePrefetch: usePrefetchDataDashboard } = DataDashboardApi;
