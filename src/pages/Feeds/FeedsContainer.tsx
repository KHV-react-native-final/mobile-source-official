import { View } from "react-native";
import { FeedPost } from "../../components";

function FeedsContainer() {
  return (
    <View>
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </View>
  );
}

export { FeedsContainer };
