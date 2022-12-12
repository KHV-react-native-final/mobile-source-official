import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setAuthor } from "../redux-stores"
import { HeaderLeftButton, Login } from "../screens"
import { Auth } from "../services/firebase"
import MainNav from "./MainNav"
import Stack from "./Stack"

export default () => {
  const dispatch = useDispatch()

  const [initializing, setInitializing] = useState(true);
  const author = useSelector((state: any) => state.auth.author)

  // Handle user state changes
  function _onAuthStateChanged(author: any) {
    if (author) {
      const { email, uid } = author._user
      dispatch(setAuthor({ email, uid }));
    }
    else {
      dispatch(setAuthor(null))
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = Auth.onAuthStateChanged(_onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <Stack.Navigator initialRouteName={author ? "main" : "login"}>
      <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="main" component={MainNav} options={{
        title: "TheGirls 2.0",
        headerBackVisible: false,
        headerRight: () => <HeaderLeftButton />
      }} />
    </Stack.Navigator>
  )
}