import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Player } from '../../models/models';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  reducerPath: 'players',
  endpoints: (build) => ({
    GetPlayers: build.query<Player[], string>({
      query: () => `/users`,
    }),
  }),
})

export const { useGetPlayersQuery } = api