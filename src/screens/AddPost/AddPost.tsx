import { View, TextInput, Button, Image, Alert } from "react-native"
import { useState } from "react"
import DocumentPicker, { DocumentPickerResponse } from "react-native-document-picker"
import { uploadImg } from "../../services/imgur/uploadImg"
import { Post } from "../../services/firebase"
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from 'react-redux'
import { RootStateType, setPosts } from '../../redux-stores'
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import ButtonWithIcon from "../../components/Core/ButtonWithIcon"

export default () => {
  const navigation = useNavigation()
  const [content, setContent] = useState<string>('')
  const [imgDetails, setImgDetails] = useState<DocumentPickerResponse | null>(null)
  const author = useSelector((state: RootStateType) => state.auth.author);
  const dispatch = useDispatch()


  const _onPicker = async () => {
    const res = await DocumentPicker.pick({
      type: DocumentPicker.types.images
    })
    console.log("pick res: ", res);
    setImgDetails(res[0])
  }

  const _onPost = async () => {
    if (imgDetails) {
      const res = await uploadImg(imgDetails)
      if (res.success) {
        const { link, deletehash, datetime } = res.data
        Post.addAPost({
          username: author.email.split('@')[0],
          content,
          date: datetime as number,
          img: {
            link: link as string, deleteHash: deletehash as string
          }
        },
          () => {
            Post.getAll((postList) => {
              Alert.alert("Post successfully!")
              dispatch(setPosts(postList))
              navigation.navigate("feeds" as never)
            })
          },
          console.log
        )
      }
    }
    else Alert.alert("Please choose a picture at least!")
  }

  return (
    <View>
      <View style={{ paddingHorizontal: 15 }}>
        <TextInput
          placeholder="What do you think about the girl?"
          onChangeText={text => setContent(text)}
        />
      </View>
      <View style={{ paddingHorizontal: 15, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Button
          title="Add Image"
          onPress={_onPicker}
        />
        <ButtonWithIcon
          onPress={_onPost} 
          disabled={!imgDetails ? true : false}
          icon={faPaperPlane}
        />
      </View>
      <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
        {imgDetails && <Image source={{ uri: imgDetails.uri }} style={{ height: "100%", width: "100%" }} resizeMode="cover" />}
      </View>
    </View>
  )
}