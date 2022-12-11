import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const loginWithEmailAndPassword = async (email: string, password: string, onError?: (error: any) => void) => {
  await auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => {
      if (onError) onError(error)
    });
};

const createUserWithEmailAndPassword = async (email: string, password: string, onError?: (error: any) => void) => {
  await auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(error => {
      if (onError) onError(error)
      // if (error.code === 'auth/email-already-in-use') {
      //   console.log('That email address is already in use!');
      // }

      // if (error.code === 'auth/invalid-email') {
      //   console.log('That email address is invalid!');
      // }

      // console.error(error);
    });
};

const signOut = async () => {
  await auth().signOut();
  Alert.alert('Logout sucessfully!');
}

export default {loginWithEmailAndPassword, createUserWithEmailAndPassword, signOut};
