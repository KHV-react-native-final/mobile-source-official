import { View } from "react-native";
import { useEffect } from "react"
import { FeedPost } from "../../components";
import { useSelector, useDispatch } from 'react-redux'
import { RootStateType, setPosts, setWishList } from '../../redux-stores'
import { Post, WishList } from "../../services/firebase";
import { IPost } from "../../types";

function FeedsContainer() {
  const postList = useSelector((state: RootStateType) => state.posts.value)
  const author = useSelector((state: RootStateType) => state.auth.author);
  const wishList = useSelector((state: RootStateType) => state.wishList.value);
  const dispatch = useDispatch()

  useEffect(() => {
    Post.getAll((postList) => {
      console.log("loaded");
      dispatch(setPosts(postList))
    })
  }, [])
  useEffect(() => {
    WishList.getAllByUID(author.uid, (wishList) => {
      console.log("loaded");
      console.log(wishList);
      dispatch(setWishList(wishList));
    });
  }, []);

  return (
    <View>
      {
        postList.map((post: IPost, index: number) => {
          // console.log(index, wishList.some(ele => ele.id == post.id));

          return <FeedPost
            id={post.id ? post.id : ''}
            isLove={wishList.some(ele => ele.id == post.id)}
            postImage={post.img.link}
            username={post.username}
            content={post.content}
            avatar={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"} key={index} />
        })
      }
    </View>
  );
}

export { FeedsContainer };
