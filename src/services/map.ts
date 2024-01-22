import baseApi from '@/app/baseApi';
import { ChartBulkResponse, GeoDataCollection } from '@/types/MapData';
import _ from 'lodash';

export type GeoData = {
  geoId: string;
  id: string;
  regionSetup: {
    peers: string;
    segments: string;
  };
};

const defaultBody = [
  {
    geoId: '48',
    id: '6582102b903ab0943c07dbf8',
    regionSetup: {
      peers: 'none',
      segments: 'county',
    },
  },
];

// Define a service using a base URL and expected endpoints
export const MapApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBoundaryDataBulk: builder.query<GeoDataCollection, GeoData[] | undefined | void>({
      query: (body = defaultBody) => ({
        method: 'POST',
        url: `/reports/65820ff1903ab0943c07dbc6/output/boundaries`,
        body,
      }),
      transformResponse: (res: any) => {
       return  res.boundaries[2022]
      },
      providesTags: ['MapData'],
    }),
    getChartDataBulk: builder.query<ChartBulkResponse, GeoData[] | undefined | void>({
      query: (body = defaultBody) => ({
        method: 'POST',
        url: `/reports/65820ff1903ab0943c07dbc6/output/charts`,
        body,
      }),
      transformResponse: (res: { charts: any[]}) => {
        return _.first(res.charts);
      },
      providesTags: ['MapData'],
    }),

    // getBoundaryDataBulk: builder.mutation<{ data: any }, any>({
    //   invalidatesTags: ['MapData'],
    //   query: (body) => ({
    //     method: 'POST',
    //     url: `/reports/65820ff1903ab0943c07dbc6/output/boundaries`,
    //     body
    //   }),
    // }),
   
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyGetBoundaryDataBulkQuery, useLazyGetChartDataBulkQuery } = MapApi;
