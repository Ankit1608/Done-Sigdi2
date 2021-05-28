import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Root} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import RadioButton from '../component/radioButton';

const PROP = [
  {
    key: 'veg',
    text: 'Veg',
  },
  {
    key: 'nonveg',
    text: 'Non Veg',
  },
];

function AddItem() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [timetaken, setTimetaken] = useState(0);
  const [image, setImage] = useState(null);
  const [path, setPath] = useState(null);
  const refRBSheet = useRef();
  const uploadfromlib = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setImage(image);
      setPath(image.path);
      refRBSheet.current.close();
    });
  };
  const uploadfromcamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setImage(image);
      setPath(image.path);
      refRBSheet.current.close();
    });
  };

  return (
    <Root>
      <ScrollView>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={() => refRBSheet.current.open()}>
            <View style={styles.uploadphoto}>
              {image != null && (
                <Image source={{uri: path}} style={{flex: 1}}></Image>
              )}
              {image === null && (
                <View style={{alignItems: 'center'}}>
                  <ImageBackground
                    source={require('../assets/uploadimage.png')}
                    style={styles.backgroundimg}>
                    <Text style={{fontSize: 20}}>Upload a Picture</Text>
                  </ImageBackground>
                </View>
              )}
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.inputContainer}>
            <Text style={{color: '#838383'}}>Name of the dish</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={(val) => setName(val)}></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{color: '#838383'}}>Price of dish</Text>
            <TextInput
              keyboardType={'numeric'}
              style={styles.input}
              value={price}
              onChangeText={(val) => setPrice(parseInt(val))}></TextInput>
            {price > 0 && (
              <Text>
                the amount you get is {parseFloat(price * 0.85).toFixed(2)}{' '}
                (tds:
                {parseFloat(price * 0.05).toFixed(2)} and our charges:{' '}
                {parseFloat(price * 0.1).toFixed(2)})
              </Text>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Text style={{color: '#838383'}}>
              Time taken to prepare the dish (in minutes)
            </Text>
            <TextInput
              keyboardType={'numeric'}
              style={styles.input}
              value={timetaken}
              onChangeText={(val) => setTimetaken(parseInt(val))}></TextInput>
          </View>

          <RadioButton PROP={PROP} />
          <View
            style={{
              alignItems: 'center',
              marginTop: 30,
            }}>
            <View style={styles.savechangescontainer}>
              <Text
                style={{
                  fontSize: 20,
                  paddingHorizontal: 25,
                  paddingVertical: 10,
                  color: '#ffffff',
                }}>
                Upload Dish
              </Text>
            </View>
          </View>
        </View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <View>
            <TouchableWithoutFeedback onPress={uploadfromlib}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  alignItems: 'center',
                }}>
                <MaIcon name={'folder-image'} size={25} color="gray" />
                <Text style={styles.popuptext}>Upload from Gallery</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableNativeFeedback onPress={uploadfromcamera}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  alignItems: 'center',
                }}>
                <MaIcon name={'camera'} size={25} color="gray" />
                <Text style={styles.popuptext}>Take a photo</Text>
              </View>
            </TouchableNativeFeedback>
            <View
              style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
              <MaIcon name={'logout'} size={25} color="gray" />
              <Text style={styles.popuptext}>Cancel</Text>
            </View>
          </View>
        </RBSheet>
      </ScrollView>
    </Root>
  );
}

export default AddItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    left: 30,
    height: 200,
    width: 300,
    resizeMode: 'contain',
    backgroundColor: '#F5F5F5',
  },
  backgroundimg: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    padding: 20,
  },

  input: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
  },
  inputContainer: {
    marginBottom: 20,
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
  },
  cusinesSelectContainer: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 10,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 17,
    opacity: 0.4,
  },
  cusinesSelectedContainer: {
    borderWidth: 1,
    borderColor: '#FCCF08',
    color: '#FCCF08',
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 10,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 17,
  },
  savechangescontainer: {
    backgroundColor: '#FCCF08',
    borderRadius: 30,
  },
  uploadphoto: {
    marginHorizontal: 5,
    height: 200,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
