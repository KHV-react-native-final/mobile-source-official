import { faBookmark, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { useNavigation } from "@react-navigation/native"
import { LoveList } from "../screens"
import FeedStack from "./FeedStack"
import Tab from "./Tab"

const activeTabProps = (focused: boolean) => {
  return focused ? {color:"pink", size: 25} : {color: "black", size: 20}
}

export default () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarInactiveTintColor: "pink"}}>
      <Tab.Screen name="feedStack" component={FeedStack} 
        options={{tabBarIcon: ({focused}) => <FontAwesomeIcon {...activeTabProps(focused)} icon={faBookmark} />}}
      />
      <Tab.Screen name="loveList" component={LoveList} 
        options={{ tabBarIcon: ({focused}) => <FontAwesomeIcon {...activeTabProps(focused)} icon={faHeart} />}}
      />
    </Tab.Navigator>
  )
}