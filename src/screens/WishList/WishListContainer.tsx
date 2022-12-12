import { View, Image, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStateType, setWishList } from "../../redux-stores";
import { WishList } from "../../services/firebase";
import { IWhitList } from "../../types";

const WishListItem = (prop: {item: IWhitList}) => {
	const width = ((Dimensions.get("screen").width - 20) / 3 >> 0) - 10
	return (
		<TouchableOpacity>
			<Image style={{ width, height: width, marginHorizontal: 5, marginBottom: 10 }} source={{ uri: prop.item.img }} resizeMode="cover" />
		</TouchableOpacity>
	)

}
function WishListContainer() {
	const wishList = useSelector((state: RootStateType) => state.wishList.value);
	const load = useSelector((state: RootStateType) => state.wishList.load);
	const author = useSelector((state: RootStateType) => state.auth.author);
	const dispatch = useDispatch();

	useEffect(() => {
		WishList.getAllByUID(author.uid, (wishList) => {
			console.log("loaded");
			dispatch(setWishList(wishList));
		});
	}, [load]);
	return (
		<View style={{padding: 10}}>
			<FlatList
				data={wishList}
				renderItem={({ item }) => <WishListItem item={item} />}
				keyExtractor={(item)  => item.id}
				numColumns={3}
			/>
		</View>
		);
}

export { WishListContainer };
