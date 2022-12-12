import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./AuthState";
import { PostsReducer } from "./PostsState";
import { WishListReducer } from "./WishListState";

export * from "./PostsState";
export * from "./AuthState";
export * from "./WishListState";

const rootStore = configureStore({
	reducer: {
		posts: PostsReducer,
		auth: AuthReducer,
		wishList: WishListReducer,
	},
});

export type RootStateType = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
export default rootStore