import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FakerUser } from "@/TYPES/user";

// Define a service using a base URL and expected endpoints
export const fakeUserAPI = createApi({
  reducerPath: 'fakeUserAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://randomuser.me/api/'
  }),
  endpoints: (builder) => ({
    getFakeUsers: builder.query<FakerUser, void>({
      query: () => `?seed=foobar&results=6`
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetFakeUsersQuery
} = fakeUserAPI

