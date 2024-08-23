import { useEffect, useRef, useState } from 'react';
import images from '../../assets/icon-image/images';
import { Alert, Linking } from 'react-native';
import apis from '~/request/index';
import { routeNames } from '~/routes/const';
import { useNavigation } from '@react-navigation/native';
import BotSdkModule from '~/jsBridge/BotSdkModule';
import { mediaDevices, RTCPeerConnection } from 'react-native-webrtc';

export function useViewModal() {
  /** write your js */
  const list = [
    {
      id: 1,
      name: '视频通话',
      online: true,
      image: images.product1,
      area: '客厅',
      areaIcon: images.icon1,
      canCommunicate: true,
      canSwitch: false,
      canLookUpDetail: false,
    },
    {
      id: 2,
      name: '防跌倒激光雷达',
      online: true,
      image: images.product2,
      area: '客厅',
      areaIcon: images.icon1,
      canCommunicate: false,
      canSwitch: true,
      canLookUpDetail: false,
    },
    {
      id: 3,
      name: '睡眠检测仪',
      online: true,
      image: images.product7,
      area: '卧室',
      areaIcon: images.icon3,
      canCommunicate: false,
      canSwitch: false,
      canLookUpDetail: true,
    },
  ];

  const [state, setState] = useState(list);
  const [open, setOpen] = useState(false);
  const navigation = useNavigation() as any;
  const [localMediaStream, setLocalMediaStream] = useState<any>(null);
  const [peerConnection, setPeerConnection] = useState<any>(null);
  const [remoteStream, setRemoteStream] = useState<any>(null);

  const handleLinking = async () => {
    try {
      const url = 'xiaoduapp://open_local_page?page=contacts';
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert('Error', 'Failed to open the other app.');
    }
  };

  const handleLookUp = () => {
    navigation.navigate(routeNames.SleepMonitor);
  };

  // 激光雷达83A010021520080 睡眠监测A3G01357
  const getProductOnline = async () => {
    const [data1, data2] = await Promise.all([
      apis.post['/deviceService/online']({
        data: {
          deviceId: '83A010021520048',
          deviceType: 0,
        },
      }),
      apis.post['/deviceService/online']({
        data: {
          deviceId: 'A3G01357',
          deviceType: 0,
        },
      }),
    ]);
    const newList = state.map((i) => {
      if (i.id === 2) {
        return {
          ...i,
          online: data1.data.data.status === 1 ? true : false,
        };
      } else if (i.id === 3) {
        return {
          ...i,
          online: data2.data.data.status === 1 ? true : false,
        };
      } else {
        return i;
      }
    });
    setState(newList);
  };

  // 开启
  const callBox = async () => {
    const { err, data } = await apis.post['/baiduBoxExecService/callBox']({
      data: {
        deviceId: '951395G41C6032823850',
        deviceType: 5,
      },
    });
    if (err.code === 0) {
      setOpen(!open);
    }
  };
  // 关闭
  const closeBox = async () => {
    const { err, data } = await apis.post['/baiduBoxExecService/closeBox']({
      data: {
        deviceId: '951395G41C6032823850',
        deviceType: 5,
      },
    });
    if (err.code === 0) {
      setOpen(!open);
    }
  };

  const handleOpen = () => {
    !open ? callBox() : closeBox();
  };

  const handleClick = (id: number) => {
    if (id === 1) {
      handleLinking();
    } else if (id === 2) {
      handleOpen();
    } else if (id === 3) {
      handleLookUp();
    }
  };

  // baidu test
  const handleTestBaidu = () => {
    BotSdkModule.sendLinkClickedEvent();
  };

  // webrtc test
  const handleTestWebRtc = async () => {
    const configuration = {
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' }, // 公共 STUN 服务器
      ],
    };
    if (!localMediaStream) {
      const mediaStream = await mediaDevices.getUserMedia({ video: true });
      console.log('mediaStream===', mediaStream);
      setLocalMediaStream(mediaStream);

      const peerConnection = new RTCPeerConnection(configuration);
      setPeerConnection(peerConnection);

      mediaStream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, mediaStream);
      });

      // peerConnection.addEventListener('icecandidate')
    }
  };

  const handleStopWebRtc = async () => {
    if (localMediaStream) {
      localMediaStream.release();
      setLocalMediaStream(null);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(getProductOnline, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return {
    state,
    setState,
    open,
    setOpen,
    handleLinking,
    handleLookUp,
    handleOpen,
    handleClick,
    handleTestBaidu,
    handleTestWebRtc,
    localMediaStream,
    handleStopWebRtc,
  };
}
