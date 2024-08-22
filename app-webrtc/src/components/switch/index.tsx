import { StyleSheet, TouchableOpacity } from 'react-native';
import { SwitchProps } from './const';
import { FC, memo, useEffect, useRef } from 'react';
import * as ss from './styles';
import Svg, { Rect } from 'react-native-svg';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create(ss);

const Component: FC<SwitchProps> = (props) => {
  const { value, onChange } = props;
  const dotRef = useRef(null) as any;

  useEffect(() => {
    if (value) {
      dotRef.current?.transitionTo({ left: 24 });
    } else {
      dotRef.current?.transitionTo({ left: 2 });
    }
  }, [value]);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onChange()}>
      <Svg height="22" width="44">
        <Rect
          x="0"
          y="0"
          width="44"
          height="22"
          rx="11"
          ry="11"
          fill={value ? '#00B578' : '#AFB3BE'}
        />
        <Animatable.View style={styles.dot} ref={dotRef}></Animatable.View>
      </Svg>
    </TouchableOpacity>
  );
};

const Switch = memo(Component);
export default Switch;
