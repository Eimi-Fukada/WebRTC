package com.shuziai;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.bridge.Callback;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import android.util.Log;

// BotSdkModule
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import com.baidu.duer.bot.directive.payload.JsonUtil;
import com.baidu.duer.bot.event.payload.LinkClickedEventPayload;
import com.baidu.duer.botsdk.BotSdk;



public class BotSdkPackage implements ReactPackage {

   class BotSdkModule extends ReactContextBaseJavaModule {

      private final ReactApplicationContext reactContext;

      public BotSdkModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
      }

      @Override
      public String getName() {
        return "BotSdkModule";
      }

      @ReactMethod
      public void sendLinkClickedEvent() {
        LinkClickedEventPayload linkClickedEventPayload = new LinkClickedEventPayload();
        linkClickedEventPayload.url = "dueros://8dcbd6d2-f434-3c9a-41d4-dde55b54a6ca/urlProxy?from=DBP_APK&token=6664eba14fff7e0304919ab656b30f5f";
        String payloadJson = JsonUtil.toJson(linkClickedEventPayload);
        Log.i("SendingEvent", "Sending event with payload: " + payloadJson);

        BotSdk.getInstance().sendEvent(
                "LinkClicked",
                "ai.dueros.device_interface.screen",
                true,
                JsonUtil.toJson(linkClickedEventPayload)
        );
        Log.i("SendingEvent", "Event 'LinkClicked' has been sent.");
      }
  }

   @Override
   public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
       return Collections.emptyList();
   }

   @Override
   public List<NativeModule> createNativeModules(
           ReactApplicationContext reactContext) {
       List<NativeModule> modules = new ArrayList<>();

       modules.add(new BotSdkModule(reactContext));

       return modules;
   }

}