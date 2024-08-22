import { NativeModules } from 'react-native';

const { BotSdkModule } = NativeModules;

export default {
  sendLinkClickedEvent: () => {
    BotSdkModule.sendLinkClickedEvent();
  },
};
