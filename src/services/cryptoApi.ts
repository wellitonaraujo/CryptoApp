import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../constants/api';

const apiHeaders = {
  'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const createRequest = (url: string) => ({ url, headers: apiHeaders });

export const cryptoApi =
  createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
      })
    })
  });

export const { useGetCryptosQuery } = cryptoApi;