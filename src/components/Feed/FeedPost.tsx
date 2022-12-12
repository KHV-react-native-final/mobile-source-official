import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react"
import { Avatar } from "../../components";
import { faBookmark, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { IFeedPost } from "../../types";
import { WishList } from "../../services/firebase";
import { RootStateType } from "../../redux-stores";
import { useSelector } from "react-redux";

function FeedPost(props: IFeedPost) {
  const author = useSelector((state: RootStateType) => state.auth.author);
  const [love, setLove] = useState<boolean>(props.isLove)

  useEffect(() => {
    setLove(props.isLove);
  }, [props.isLove])

  function onLovePress() {
    setLove((pre) => {
      if (!pre) WishList.love(author.uid, { postId: props.id, img: props.postImage })
      else WishList.disLove(author.uid, props.id)
      return !pre
    })
  }

  function FeedPostHeader() {
    return (
      <View style={FeedPostHeaderStyle.container}>
        <View style={FeedPostHeaderStyle.userInfo}>
          <Avatar
            style={FeedPostHeaderStyle.userAvatar}
            url={props.avatar}
          />
          <Text style={FeedPostHeaderStyle.userName}>{props.username}</Text>
        </View>
      </View>
    );
  }

  function FeedPostBody() {
    return (
      <View>
        <Image
          style={FeedPostBodyStyle.image}
          source={{
            uri: props.postImage
          }}
        />
        <View style={{ paddingHorizontal: 15, paddingTop: 10, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <Text> {">"} {props.content}</Text>
          <TouchableOpacity onPress={onLovePress}>
            <FontAwesomeIcon color={love ? "red" : "black"} size={30} icon={faHeart} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={FeedPostStyle.container}>
      <FeedPostHeader />
      <FeedPostBody />
      {/* <FeedBottom /> */}
    </View>
  );
}

const FeedPostStyle = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

const FeedPostHeaderStyle = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userAvatar: {
    paddingRight: 10,
  },
  userName: {
    fontWeight: "bold",
  },
});

const FeedPostBodyStyle = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
  },
});

// const FeedPostBottomStyle = StyleSheet.create({

// })

export { FeedPost };
