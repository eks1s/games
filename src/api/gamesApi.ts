import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiKeys } from "./apiKeys";

export const gamesApi = createApi({
    reducerPath: apiKeys.GAMES_API,
    baseQuery: fetchBaseQuery({
        baseUrl: "https://staging.belparyaj.com/api/pragmatic",
    }),
    endpoints: (build) => ({
        getAllGames: build.query({
            query: () => ({
                url: "/game_list",
            }),
        }),
        getSingleGame: build.query({
            query: (game) => ({
                url: `/game_list/search?q=${game}`,
            }),
        }),
    }),
});

export const { useGetAllGamesQuery, useGetSingleGameQuery } = gamesApi;
