import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, { FC, memo, useRef } from 'react';
import { ViewModal } from './viewModel';
import * as ss from './styles';
import { MineProps } from './const';
import Navigation from '../../components/navigation';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create(ss);

const Component: FC<MineProps> = () => {
  const {} = ViewModal();
  const textRef = useRef(null) as any;
  const animationRef = useRef(null) as any;
  const zoomRef = useRef(null) as any;
  const zoomOut = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };

  function handleBounce() {
    textRef.current.flash(400);
  }

  return (
    <>
      <Navigation title="我的" />
      <View style={styles.page}>
        <LinearGradient
          style={{
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#74A7F8', '#6DDDD8'] as any}
        >
          <Text style={{ color: '#fff', fontSize: 20 }}>
            this is linear-gradient
          </Text>
        </LinearGradient>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => handleBounce()}
          style={{
            marginTop: 20,
            backgroundColor: 'green',
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Animatable.Text
            animation={zoomOut}
            style={{ color: '#fff' }}
            ref={textRef}
          >
            bounce
          </Animatable.Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => animationRef.current.shake(1000)}
          style={{
            marginTop: 20,
            backgroundColor: '#74A7F8',
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Animatable.Text
            animation={zoomOut}
            style={{ color: '#fff' }}
            ref={animationRef}
          >
            Zoom me out
          </Animatable.Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => zoomRef.current.zoomInDown(1000)}
          style={{
            marginTop: 20,
            backgroundColor: '#6DDDD8',
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Animatable.Text
            animation={zoomOut}
            style={{ color: '#fff' }}
            ref={zoomRef}
          >
            Zoom me out
          </Animatable.Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const Mine = memo(Component);
export default Mine;
