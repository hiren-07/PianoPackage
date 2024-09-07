package com.hellologger;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.util.Log;

public class PianoSDKModule extends ReactContextBaseJavaModule {
    private static final String TAG = "PianoSDKModule";

    PianoSDKModule(ReactApplicationContext context) {
        super(context);
        Log.d("PianoSDKModule", "Module asdasd initialized");
    }

    @Override
    public String getName() {  // Changed from signin() to getName()
        return "PianoSDKModule";
    }

    @ReactMethod
    public void init() {
        Log.d(TAG, "PianoSDKModule Native Module");
    }
}