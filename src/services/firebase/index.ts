import firestore from "@react-native-firebase/firestore";
import Auth from "./Auth";
import { Post } from "./Store";

export const getTestData = () => {
  return firestore()
    .collection('users')
    .onSnapshot(snap => snap.docs.forEach(doc => console.log(doc.data())));
}

export {Auth, Post}