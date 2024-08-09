export default {
  "expo": {
    "name": "signin-with-thirdparties",
    "slug": "signin-with-thirdparties",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "plugins": [
      "@react-native-google-signin/google-signin"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.bunsenwill.thirdparties",
      "googleServicesFile": process.env.GOOGLE_SERVICE_INFO,
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.bunsenwill.thirdparties",
      "googleServicesFile": process.env.GOOGLE_SERVICE_JSON,
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "0e2185f5-d062-4896-8505-2c69ac9a418c"
      }
    }
  }
}
