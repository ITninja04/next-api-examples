import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiResolver } from 'next/dist/server/api-utils/node';
import {Post, User, Comment} from "@/TYPES/index";
import { GetProfileImage } from '@/utils/index';


export const placeHolderApi = createApi({
  reducerPath: 'placeHolderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () =>  `posts`,
    }),
    getPost: builder.query<Post, number>({
      query: (postId) => `posts/${postId}`
    }),
    getPostComments: builder.query<Comment[], number>({
      query: (postId) => `posts/${postId}/comments`
    }),

    getUsers: builder.query<User[], void>({
      query: () => `users`,
      transformResponse: (response:  User[], meta, arg) => {
        return response.map((user) => GetProfileImage(user, 'profilePicture'));
      },
    }),
    getUser: builder.query<User, number>({
      query: (userId) => `users/${userId}`,
      transformResponse: (response: { data: User }, meta, arg) => {
        const {data: user} = response;
        return GetProfileImage(user, "profilePicture");
      },
    }),
    addNewComment: builder.mutation<Comment, void>({
      query: (newComment) => ({

        url: '/posts', method: 'POST', body: newComment
      }),
      onQueryStarted(a, b): Promise<void> | void {
        optimisticUpdate(a,b);
      }
    })
  }),
});


function optimisticUpdate(a: any, b:any) {
  const {postId} = a;
  b.dispatch(placeHolderApi.util.updateQueryData('getPostComments', postId, (e)=> {
    console.log(e);
    try {
      e.push(a);
    } catch (err) {
      console.error(err);
    }

  }))
}

export const {
  useAddNewCommentMutation, useGetPostCommentsQuery, useGetUserQuery, useGetUsersQuery,
  useGetPostsQuery, useGetPostQuery, usePrefetch
} = placeHolderApi;
