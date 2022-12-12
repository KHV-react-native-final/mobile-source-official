import { IconDefinition } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { TouchableOpacity, TouchableOpacityProps } from "react-native"

export default (props: TouchableOpacityProps & {icon: IconDefinition}) => {
  return (
    <TouchableOpacity
      {...props}
      style={{ backgroundColor: props.disabled ? "#AAAAAA" : "#0096FF", alignItems: "center", justifyContent: 'center', paddingHorizontal: 20, paddingVertical: 10, }}
    >
      <FontAwesomeIcon icon={props.icon} color="white" size={20}/>
    </TouchableOpacity>
  )
}