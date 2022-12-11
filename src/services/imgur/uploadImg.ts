import axios from 'axios';
import {DocumentPickerResponse} from 'react-native-document-picker';
import RNFS from 'react-native-fs';

const CLIENT_ID = '8f3526fcbadf759';
// const CLIENT_SECRET = 'dabbc742aeaa0b1ebcb12536b832b4faa792e9c8';
const ACCESS_TOKEN = '177d4767f0647077a5390b860346f5511d2c1f05';

const uploadImg = async (fileDetails: DocumentPickerResponse) => {
  const imgBase64 = await RNFS.readFile(fileDetails.uri, 'base64').then(
    res => res,
  );
  const formData = new FormData();
  formData.append('image', imgBase64);
  formData.append('name', fileDetails.name);

  const postConfig: any = {
    headers: {
      Authorization: `Client-ID ${CLIENT_ID}`,
      // Authorization: `Bearer ${ACCESS_TOKEN}`,
    }
  }

  //axios
  return await axios
    .post('https://api.imgur.com/3/image', formData, postConfig)
    .then(res => {
      // console.log('image data', res.data);
      console.log("Upload successfully!");
      return res.data;
    })
    .catch(error => console.log('error: ', error));

  // Fetch
  // var myHeaders = new Headers();
  // myHeaders.append('Authorization', `Client-ID ${CLIENT_ID}`);

  // var formdata = new FormData();
  // formdata.append('image', imgBase64);
  // formData.append('name', fileDetails.name);

  // var requestOptions = {
  //   method: 'POST',
  //   headers: myHeaders,
  //   body: formdata,
  // };

  // await fetch('https://api.imgur.com/3/image', requestOptions)
  //   .then(response => response.json())
  //   .then(result => console.log("result: ", result))
  //   .catch(error => console.log('error: ', error));
};
export {uploadImg};
