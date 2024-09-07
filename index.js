import PianoSdk from "react-native-hello-logger/App";

export default {
  init: PianoSdk.init,
  signIn: PianoSdk.signIn,
  register: PianoSdk.register,
  signOut: PianoSdk.signOut,
  refreshToken: PianoSdk.refreshToken,
  setUserToken: PianoSdk.setUserToken,
  setGaClientId: PianoSdk.setGaClientId,
  clearStoredData: PianoSdk.clearStoredData,
  closeTemplateController: PianoSdk.closeTemplateController,
  getUser: PianoSdk.getUser,
  updateUser: PianoSdk.updateUser,
  checkUserAccess: PianoSdk.checkUserAccess,
  listUserAccess: PianoSdk.listUserAccess,
  submitReceipt: PianoSdk.submitReceipt,
  getExperience: PianoSdk.getExperience,
  addEventListener: PianoSdk.addEventListener,
};
