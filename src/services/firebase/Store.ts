import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import {type IPost} from '../../types';

const POST_COLLECTTION = 'posts';
const LOVELIST_COLLECTION = "lovelist"
class Post {
  static getAll = async (handler: (postList: IPost[]) => void) => {
    const docs = (await firestore().collection<IPost>(POST_COLLECTTION).get())
      .docs;
    const postList = docs.map(post => post.data());
    handler(postList);
  };

  static addAPost = async (data: IPost, onError?: (error: any) => void) => {
    return await firestore()
      .collection(POST_COLLECTTION)
      .add(data)
      .then(() => {
        Alert.alert('Add the post successfully! Enjoy!');
      })
      .catch(onError);
  };

  static deletePost = async (id: string) => {
    return await firestore()
    .collection(POST_COLLECTTION)
    .doc(id)
    .delete();
  };
}

class LoveList {
  static getAllByUID = async (uid: string) => {
    return await firestore()
    .collection(LOVELIST_COLLECTION)
  }
}
export {Post};
