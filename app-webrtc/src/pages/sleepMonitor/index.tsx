import React, { FC, memo } from 'react';
import { SleepMonitorProps } from './const';
import { useViewModal } from './viewModel';
import * as ss from './styles';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../assets/icon-image/images';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create(ss);

const Component: FC<SleepMonitorProps> = () => {
  const {} = useViewModal();

  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <ImageBackground source={images.bg3} style={styles.bg} resizeMode="cover">
        <TouchableOpacity
          style={styles.backBox}
          onPress={() => navigation.goBack()}
        >
          <Image source={images.back} style={styles.back} />
          <Text style={styles.backTitle}>返回</Text>
        </TouchableOpacity>
        <Text style={styles.title}>睡眠监测</Text>
        <Image source={images.logo2} style={styles.logo} />
      </ImageBackground>
      <View style={styles.content}>
        <Image style={styles.image} source={images.bg4} resizeMethod="scale" />
      </View>
    </View>
  );
};

const SleepMonitor = memo(Component);
export default SleepMonitor;
