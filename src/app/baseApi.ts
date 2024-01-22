import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const endpoint = import.meta.env.VITE_API_ENDPOINT;
// Define a service using a base URL and expected endpoints

export const baseQuery = fetchBaseQuery({
  baseUrl: endpoint,
  credentials: 'same-origin',
});

export const baseApi = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes: ['Boundary', 'Chart'],
});

export default baseApi;
// Export hooks for usage in functional components, which are
