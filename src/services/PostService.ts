import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPost } from '../models/IPost';

export const postAPI = createApi({
	reducerPath: 'postAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:5000',
	}),
	tagTypes: ['Post'],
	endpoints: (build) => ({
		fetchAllPosts: build.query<IPost[], number>({
			query: (limit: number = 5) => ({
				url: '/posts',
				params: {
					_limit: limit,
				},
			}),
			// Обеспечивание доставки данных
			providesTags: (result) => ['Post'],
		}),
		createPost: build.mutation<IPost, IPost>({
			query: (post) => ({
				url: '/posts',
				method: 'POST',
				body: post,
			}),
			// Указываем, что данные становятся неактуальными
			invalidatesTags: ['Post'],
		}),
		updatePost: build.mutation<IPost, IPost>({
			query: (post) => ({
				url: `/posts/${post.id}`,
				method: 'PUT',
				body: post,
			}),
			// Указываем, что данные становятся неактуальными
			invalidatesTags: ['Post'],
		}),
		deletePost: build.mutation<IPost, IPost>({
			query: (post) => ({
				url: `/posts/${post.id}`,
				method: 'DELETE',
			}),
			// Указываем, что данные становятся неактуальными
			invalidatesTags: ['Post'],
		}),
	}),
});
