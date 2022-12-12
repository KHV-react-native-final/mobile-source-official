import { AddPost, Feeds } from "../screens"
import Stack from "./Stack"

export default () => {
  return (
    <Stack.Navigator initialRouteName="feeds" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="feeds" component={Feeds} />
      <Stack.Screen name="addPost" component={AddPost} />
    </Stack.Navigator>
  )
}