import { Image, StyleProp, StyleSheet, View } from "react-native";

interface AvatarProps {
  url: string;
  style: StyleProp<any>;
}

function Avatar(props: AvatarProps) {
  return (
    <View style={[props.style]}>
      <Image style={AvatarStyle.image} source={{ uri: props.url }} />
    </View>
  );
}

const AvatarStyle = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
    borderRadius: 25,
  },
});

export { Avatar };
