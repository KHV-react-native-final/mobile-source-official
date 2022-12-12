import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const PostsSlice = createSlice({
	name: "posts",
	initialState: {
		value: [],
	},
	reducers: {
		setPosts: (state, actions: PayloadAction<any>) => {
			state.value = actions.payload;
		},
	},
});

export const PostsReducer = PostsSlice.reducer;

export const { setPosts } = PostsSlice.actions;
