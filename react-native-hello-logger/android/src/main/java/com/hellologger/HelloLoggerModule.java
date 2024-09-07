package com.hellologger;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.util.Log;

public class HelloLoggerModule extends ReactContextBaseJavaModule {
    private static final String TAG = "HelloLogger";

    HelloLoggerModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "HelloLogger";
    }

    @ReactMethod
    public void logHello() {
        Log.d(TAG, "Hello Native Module");
    }
}
