import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import com.baidu.duer.bot.directive.payload.JsonUtil;
import com.baidu.duer.bot.event.payload.LinkClickedEventPayload;
import com.baidu.duer.botsdk.BotSdk;

public class BotSdkModule extends ReactContextBaseJavaModule {

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

    BotSdk.getInstance().sendEvent(
            "LinkClicked",
            "ai.dueros.device_interface.screen",
            true,
            JsonUtil.toJson(linkClickedEventPayload)
    );
  }
}