import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IWhitList } from "../types";

const WishListSlice = createSlice({
	name: "wishList",
	initialState: {
		value: [] as IWhitList[],
		load: false
	},
	reducers: {
		setWishList: (state, actions: PayloadAction<any>) => {
			state.value = actions.payload;
		},
		setLoad: (state) => {
			state.load = !state.load
		}
	},
});

export const WishListReducer = WishListSlice.reducer;

export const { setWishList, setLoad } = WishListSlice.actions;
