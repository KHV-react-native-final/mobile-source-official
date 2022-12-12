import { NavigationContainer } from "@react-navigation/native"
import { useDispatch } from "react-redux"
import { setLoad } from "../redux-stores"
import MainStackNav from "./MainStackNav"

export default () => {
  const dispatch = useDispatch()
  return (
    <NavigationContainer onStateChange={() => dispatch(setLoad())}>
      <MainStackNav />
    </NavigationContainer>
  )
}