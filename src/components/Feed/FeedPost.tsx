import { Image, StyleSheet, Text, View } from "react-native";
import { Avatar } from "../../components";

function FeedPost() {
  function FeedPostHeader() {
    return (
      <View style={FeedPostHeaderStyle.container}>
        <View style={FeedPostHeaderStyle.userInfo}>
          <Avatar
            style={FeedPostHeaderStyle.userAvatar}
            url="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          />
          <Text style={FeedPostHeaderStyle.userName}>vu_chim_sau</Text>
        </View>
        <Text>Icon</Text>
      </View>
    );
  }

  function FeedPostBody() {
    return (
      <View>
        <Image
          style={FeedPostBodyStyle.image}
          source={{
            uri: "https://images.unsplash.com/photo-1670718221502-42bee4ee96c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
      </View>
    );
  }

  function FeedBottom() {
    return (
      <View style={{ paddingTop: 15, paddingHorizontal: 15 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text>Love</Text>
            <Text>Comment</Text>
          </View>
          <View>
            <Text>Save</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={FeedPostStyle.container}>
      <FeedPostHeader />
      <FeedPostBody />
      <FeedBottom />
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
