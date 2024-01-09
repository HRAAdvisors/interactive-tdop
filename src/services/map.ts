import baseApi from '@/app/baseApi';
import _ from 'lodash';

type GeoData = {
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
    getBoundaryDataBulk: builder.mutation<any, GeoData[] | void>({
      invalidatesTags: ['MapData'],
      query: (body = defaultBody) => ({
        method: 'POST',
        url: `/reports/65820ff1903ab0943c07dbc6/output/boundaries`,
        body,
      }),
      transformResponse: (response: any) => 
         response.boundaries[2022]
      ,
    }),
    getChartDataBulk: builder.mutation<any, GeoData[] | void>({
      invalidatesTags: ['MapData'],
      query: (body = defaultBody) => ({
        method: 'POST',
        url: `/reports/65820ff1903ab0943c07dbc6/output/charts`,
        body,
      }),
      transformResponse: (response: any) => 
         _.first(response.charts),
    }),

    // getBoundaryDataBulk: builder.mutation<{ data: any }, any>({
    //   invalidatesTags: ['MapData'],
    //   query: (body) => ({
    //     method: 'POST',
    //     url: `/reports/65820ff1903ab0943c07dbc6/output/boundaries`,
    //     body
    //   }),
    // }),
    // getMap: builder.query<any[], void>({
    //   providesTags: (result) => {
    //     if (result) {
    //       console.log(result);
    //       return [
    //         ...result.map(({ id }) => ({ id, type: 'MapData' }) as const),
    //         { id: 'LIST', type: 'User' as const },
    //       ];
    //     } else {
    //       return [];
    //     }
    //   },
    //   query: () => ({
    //     method: 'GET',
    //     url: '/users',
    //   }),
    // }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBoundaryDataBulkMutation, useGetChartDataBulkMutation } = MapApi;
