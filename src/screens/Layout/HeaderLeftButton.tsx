import { faPlusSquare } from "@fortawesome/free-regular-svg-icons"
import { faSignOut } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { useNavigation } from "@react-navigation/native"
import { Alert, TouchableOpacity, View } from "react-native"
import { Auth } from "../../services/firebase"

export default () => {
  const navigation = useNavigation()
  return (
    <View style={{flexDirection: "row"}}>
      <TouchableOpacity style={{ paddingRight: 20 }}
        onPress={() => navigation.navigate("addPost" as never)}
      >
        <FontAwesomeIcon icon={faPlusSquare} size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={{ paddingRight:10 }}
        onPress={() => Auth.signOut(() => {
          Alert.alert('Logout sucessfully!');
          navigation.navigate("login" as never)
        })}
      >
        <FontAwesomeIcon icon={faSignOut} size={25} />
      </TouchableOpacity>
    </View>
  )
}