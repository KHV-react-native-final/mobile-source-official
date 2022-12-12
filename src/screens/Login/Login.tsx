import { View, Text, TextInput, Button, ImageBackground, Dimensions } from "react-native"
import { useState, useLayoutEffect } from "react"
import { Auth } from "../../services/firebase"
import { useDispatch } from 'react-redux'
import { useNavigation } from "@react-navigation/native"

function Login() {

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<boolean>(false)


  const _onLogin = () => {
    if (!(email && password)) return setError(true)
    Auth.loginWithEmailAndPassword(
      email,
      password,
      () => { navigation.navigate("main" as never) },
      (err) => {
        console.log(err);
        setError(true)
      })
  }

  return (
    <ImageBackground
      source={{
        uri: 'https://wecsaigon.com/wp-content/uploads/2021/11/good-girl.jpg',
      }}
      style={{
        height: Dimensions.get('window').height + 25,
        width: '100%',
      }}>
      <View style={{ marginTop: "50%", width: "80%", alignSelf: "center" }}>
        <Text style={{ textAlign: "center", fontSize: 40, fontWeight: "bold" }}>Login</Text>
        <Text style={{ color: "black", marginBottom: 10 }}>Email:</Text>
        <TextInput
          style={{ borderWidth: 2, borderColor: "yellow" }}
          onChangeText={setEmail}
          placeholder="Enter your email..."
        />
        <Text style={{ color: "black", margin: 10 }}>Password:</Text>
        <TextInput
          style={{ borderWidth: 2, borderColor: "yellow", marginBottom: 20}}
          secureTextEntry={true}
          onChangeText={setPassword}
          placeholder="Enter your password..."
        />
        {error && <Text style={{ color: "red", marginTop: 10 }}>Account or password wrong!</Text>}
        <Button
          title="go"
          onPress={_onLogin}
        />
      </View>
    </ImageBackground>
  )
}

export { Login }