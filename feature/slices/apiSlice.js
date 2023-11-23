import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
fetch
const baseQuery = fetchBaseQuery({baseUrl:"https://api-cliqpod.koyeb.app/auth"})

export const apiSlice = createApi({
    baseQuery,
    tagTypes:["User"],
    endpoints: (builder) => ({})
})