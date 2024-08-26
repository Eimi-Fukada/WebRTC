import { View, Text, StyleSheet } from 'react-native';
import React, { FC, memo } from 'react';
import { ViewModal } from './viewModel';
import * as ss from './styles';
import { WelcomeProps } from './const';

const styles = StyleSheet.create(ss);

const Component: FC<WelcomeProps> = (props: any) => {
  const {} = ViewModal();
  /** 这里可以做app的启动图之类的操作，比如5秒倒计时的modal */

  return false ? (
    <View style={styles.page}>
      <Text>welcome</Text>
    </View>
  ) : (
    props.children
  );
};

const Welcome = memo(Component);
export default Welcome;
