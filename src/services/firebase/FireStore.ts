import firestore from "@react-native-firebase/firestore";
import { IWhitList, type IPost } from "../../types";


const USERS_COLLECTION = "users"
const POST_COLLECTTION = "posts";
const WISHLIST_COLLECTION = "wishList";
class Post {
	static getAll = async (handler: (postList: IPost[]) => void) => {
		const docs = (await firestore().collection<IPost>(POST_COLLECTTION).get()).docs;
		const posts = docs.map((post) => ({...post.data(), id: post.id}));
		
		handler(posts);
	};

	static addAPost = async (data: IPost, onSucces?: () => void, onError?: (error: any) => void) => {
		return await firestore()
			.collection(POST_COLLECTTION)
			.add(data)
			.then(() => {
				onSucces && onSucces()
			})
			.catch(onError);
	};

	static deletePost = async (id: string) => {
		return await firestore().collection(POST_COLLECTTION).doc(id).delete();
	};
}

class WishList {
	static getAllByUID = async (uid: string, handler: (wishList: IWhitList[]) => void) => {
		const docs = (await firestore().collection<IWhitList>(`${USERS_COLLECTION}/${uid}/${WISHLIST_COLLECTION}`).get()).docs
		const wishList = docs.map((post) => ({...post.data(), id: post.id}))
		handler(wishList)
	};
	static love = async (uid: string, data: {postId: string, img: string }) => {
		await firestore().collection(`${USERS_COLLECTION}/${uid}/${WISHLIST_COLLECTION}`).doc(data.postId).set({img: data.img})
	}
	static disLove = async (uid: string, postId: string) => {
		await firestore().collection(`${USERS_COLLECTION}/${uid}/${WISHLIST_COLLECTION}`).doc(postId).delete()
	}
}
export { Post, WishList };
