import { NativeModules, Platform } from 'react-native';
import { createApi, get, post } from './piano/fetch';

const { PianoSDKModule } = Platform.select({
  ios: () => NativeModules.PianoSdk,
  android: () => NativeModules.PianoSDKModule,
})();

const ENDPOINT = {
  SANDBOX: 'https://sandbox.tinypass.com/',
  PRODUCTION: 'https://buy.tinypass.com/',
  PRODUCTION_ASIA_PACIFIC: 'https://buy-ap.piano.io/',
  PRODUCTION_AUSTRALIA: 'https://buy-au.piano.io/',
  PRODUCTION_EUROPE: 'https://buy-eu.piano.io/',
};

const API_VERSION = '/api/v3';

const API = {
  PUBLISHER_USER_GET: `${API_VERSION}/publisher/user/get`,
  PUBLISHER_USER_UPDATE: `${API_VERSION}/publisher/user/update`,
  PUBLISHER_USER_ACCESS_CHECK: `${API_VERSION}/publisher/user/access/check`,
  PUBLISHER_USER_ACCESS_LIST: `${API_VERSION}/publisher/user/access/list`,
  PUBLISHER_CONVERSATION_EXTERNAL_CREATE: `${API_VERSION}/publisher/conversion/external/create`,
};

const PianoSdk = {
  init(aid, endpoint, facebookAppId = null, callback = null) {
    createApi(endpoint);
    if (PianoSDKModule) {
      PianoSDKModule.init(aid, endpoint, facebookAppId, callback);
    }
  },

  signIn(callback = null) {
    if (PianoSDKModule) {
      PianoSDKModule.signIn(callback);
    }
  },

  register(callback = null) {
    if (PianoSDKModule) {
      PianoSDKModule.register(callback);
    }
  },

  signOut(accessToken = null, callback = null) {
    if (PianoSDKModule) {
      PianoSDKModule.signOut(accessToken, callback);
    }
  },

  refreshToken(accessToken, callback = null) {
    if (PianoSDKModule) {
      PianoSDKModule.refreshToken(accessToken, callback);
    }
  },

  setUserToken(accessToken) {
    if (PianoSDKModule) {
      PianoSDKModule.setUserToken(accessToken);
    }
  },

  setGaClientId(gaClientId) {
    if (PianoSDKModule) {
      PianoSDKModule.setGaClientId(gaClientId);
    }
  },

  clearStoredData() {
    if (PianoSDKModule) {
      PianoSDKModule.clearStoredData();
    }
  },

  closeTemplateController() {
    if (PianoSDKModule) {
      PianoSDKModule.closeTemplateController();
    }
  },

  getUser(aid, uid, api_token) {
    return get(API.PUBLISHER_USER_GET, { aid, uid, api_token });
  },

  updateUser(aid, uid, api_token, data, customData) {
    return post(
      API.PUBLISHER_USER_UPDATE,
      { aid, uid, api_token, ...data },
      customData,
    );
  },

  checkUserAccess(aid, rid, uid, api_token) {
    return get(API.PUBLISHER_USER_ACCESS_CHECK, { aid, rid, uid, api_token });
  },

  listUserAccess(aid, uid, api_token) {
    return get(API.PUBLISHER_USER_ACCESS_LIST, { aid, uid, api_token });
  },

  submitReceipt(aid, api_token, uid, term_id, fields, check_validity = true) {
    return get(API.PUBLISHER_CONVERSATION_EXTERNAL_CREATE, {
      aid,
      api_token,
      uid,
      term_id,
      fields,
      check_validity,
    });
  },

  getExperience(config, showLoginCallback = () => { }, showTemplateCallback = () => { }) {
    if (PianoSDKModule) {
      PianoSDKModule.getExperience(config, showLoginCallback, showTemplateCallback);
    }
  },

  addEventListener(callback = () => { }) {
    const subscribe = DeviceEventEmitter.addListener('PIANO_LISTENER', callback);
    return () => {
      subscribe.remove();
    };
  },
};

export default PianoSdk;
