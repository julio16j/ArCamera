/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraOverlay from '../component/CameraOverlay';

export default function SelfiePage() {
  const [camera, setCamera] = useState();
  async function takePicture() {
    if (camera) {
      const data = await camera.takePictureAsync();
      console.log(data);
    }
  }
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        ref={ref => {
          setCamera(ref);
        }}
        type={RNCamera.Constants.Type.front}
      />

      <CameraOverlay />
      <View style={styles.cameraElements}>
        <View style={{flex: 6}} />
        <View style={{flex: 4, alignItems: 'center'}}>
          <Text style={{fontWeight: '700'}}>Gostou da foto?</Text>
          <Text style={{textAlign: 'center'}}>
            Agite seu telefone para a direito para continuar, para a esquerda
            para tirar outra foto.
          </Text>
          <View style={styles.button}>
            <TouchableOpacity onPress={takePicture} style={styles.capture}>
              <Text style={styles.buttonText}> SNAP </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  camera: {
    position: 'absolute',
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  cameraElements: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  smartphoneImage: {
    width: 50,
    resizeMode: 'contain',
  },
  button: {
    justifyContent: 'center',
    marginBottom: 60,
    borderRadius: 77,
    height: 40,
    backgroundColor: '#121212',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});
