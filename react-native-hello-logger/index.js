// import PianoSdk from "react-native-hello-logger/piano/index";
// import { PianoSDKModule } from "react-native-hello-logger/piano";
import { NativeModules } from "react-native";
const { PianoSDKModule,HelloLogger } = NativeModules;

export default {
  PianoSDKModule:PianoSDKModule,
 HelloLogger:HelloLogger
};
