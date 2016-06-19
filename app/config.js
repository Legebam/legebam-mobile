import { Platform } from 'react-native';

const isProd = process.env.NODE_ENV === 'production';
// If you're running on a device or in the Android simulator be sure to change
let METEOR_URL = 'ws://localhost:3000/websocket';
if (isProd) {
  METEOR_URL = ''; // your production server url
} else if (!isProd && Platform.OS === 'android') {
  METEOR_URL = 'ws://192.168.0.101:3000/websocket';
}

const config = {
  env: process.env.NODE_ENV,
  METEOR_URL,
};

export default config;
