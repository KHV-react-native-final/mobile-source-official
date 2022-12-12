import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
	name: "auth",
	initialState: {
		author: {email: '', uid: ''},
	},
	reducers: {
		setAuthor: (state, actions: PayloadAction<any>) => {
			state.author = actions.payload;
			// console.log(actions);
		},
	},
});

export const AuthReducer = AuthSlice.reducer;

export const {setAuthor} = AuthSlice.actions;
