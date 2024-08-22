import React, { FC, memo } from 'react';
import { HomeProps } from './const';
import { useViewModal } from './viewModel';
import * as ss from './styles';
import {
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../assets/icon-image/images';
import LinearGradient from 'react-native-linear-gradient';
import Switch from '../../components/switch/index.tsx';
import { RTCView } from 'react-native-webrtc';

const styles = StyleSheet.create(ss);

const Component: FC<HomeProps> = () => {
  const {
    state,
    open,
    handleOpen,
    handleLinking,
    handleLookUp,
    handleClick,
    handleTestBaidu,
    handleTestWebRtc,
    localMediaStream,
    handleStopWebRtc,
  } = useViewModal();

  return (
    <>
      <View style={styles.page}>
        <ImageBackground
          source={images.bg}
          style={styles.bg}
          resizeMode="cover"
        >
          <TouchableOpacity activeOpacity={0.8}>
            <LinearGradient
              style={styles.header}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#0D5DFD', '#2DB1B5']}
            >
              <LinearGradient
                style={styles.innerBox}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#062369', '#0C345A']}
              >
                <Image source={images.logo} style={styles.logo} />
                <Text style={styles.header_title}>太仓忆江南康养社区</Text>
              </LinearGradient>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.content}>
            {state.map((item, index) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.8}
                  onPress={() => handleClick(item.id)}
                >
                  <ImageBackground
                    source={images.bg2}
                    style={[
                      styles.item_bg,
                      (index + 1) % 3 === 0
                        ? { marginRight: 0 }
                        : { marginRight: 16 },
                    ]}
                  >
                    <View>
                      <Text style={styles.item_name}>{item.name}</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        <Image
                          source={item.online ? images.online1 : images.online2}
                          style={[
                            styles.item_icon,
                            item.online ? { opacity: 1 } : { opacity: 0.5 },
                          ]}
                        />
                        <Text
                          style={[
                            styles.item_icon_text,
                            item.online
                              ? { color: '#00B578', opacity: 1 }
                              : { color: '#fff' },
                          ]}
                        >
                          {item.online ? '在线' : '离线'}
                        </Text>
                        <Image
                          source={item.areaIcon}
                          style={[styles.item_icon, { marginLeft: 8 }]}
                        />
                        <Text style={styles.item_icon_text}>{item.area}</Text>
                      </View>
                    </View>
                    {item.canCommunicate && (
                      <TouchableOpacity onPress={() => handleLinking()}>
                        <LinearGradient
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}
                          colors={['#0D5BF7', '#2B6DD6', '#255DCF', '#104BC2']}
                          style={styles.linear_btn}
                        >
                          <Text
                            style={{
                              color: '#fff',
                              fontSize: 16,
                              lineHeight: 19,
                            }}
                          >
                            发起通话
                          </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    )}
                    {item.canSwitch && (
                      <Switch value={open} onChange={() => handleOpen()} />
                    )}
                    {item.canLookUpDetail && (
                      <TouchableOpacity
                        style={styles.text_box}
                        onPress={() => handleLookUp()}
                      >
                        <Text style={styles.text}>查看详情</Text>
                      </TouchableOpacity>
                    )}
                    <Image source={item.image} style={styles.item_image} />
                  </ImageBackground>
                </TouchableOpacity>
              );
            })}
          </View>
          {/* <TouchableOpacity onPress={() => handleTestBaidu()}>
            <Text style={{ color: '#fff', marginTop: 20, fontSize: 26 }}>
              小度测试功能
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => handleTestWebRtc()}
            style={{ position: 'absolute', right: 20, top: 20 }}
          >
            <Text style={{ color: '#fff', fontSize: 26 }}>webrtc开始测试</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleStopWebRtc()}
            style={{ position: 'absolute', right: 20, top: 80 }}
          >
            <Text style={{ color: '#fff', fontSize: 26 }}>
              webrtc结束测试功能
            </Text>
          </TouchableOpacity>
          {localMediaStream && (
            <RTCView
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 300,
                height: 300,
              }}
              mirror={true}
              objectFit={'cover'}
              streamURL={localMediaStream.toURL()}
              zOrder={10}
            />
          )}
        </ImageBackground>
      </View>
    </>
  );
};

const Home = memo(Component);
export default Home;
