import React, { FC, memo, useEffect, useState } from 'react';
import * as ss from './styles';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NavigationProps } from './const';
import classNames from '../../utils/help';
import { getStatusBarHeight } from '../../utils/getIsNewIphone';
import { useNavigation } from '@react-navigation/native';
import images from '../../assets/icon-image/images';
import { NavigationContext, NavigationProp } from '@react-navigation/native';

const styles = StyleSheet.create(ss);

const statusBarHeight = getStatusBarHeight();

const Component: FC<NavigationProps> = (props) => {
  const viewHeight = 36 + statusBarHeight;
  const navigation = useNavigation();
  const {
    title,
    renderLeftContent,
    renderRightContent,
    backVisible = true,
  } = props;

  function getClassName() {
    const classnames = [styles.fixed];
    return classNames(...classnames);
  }

  function renderGoBack() {
    const canGoBack = navigation.canGoBack();
    const type = navigation.getState()?.type;
    return (
      canGoBack &&
      type !== 'tab' && (
        <TouchableOpacity
          style={styles.goback}
          activeOpacity={1}
          onPress={() => navigation.goBack()}
        >
          <Image source={images.back} style={styles.leftIcon} />
        </TouchableOpacity>
      )
    );
  }

  function renderContent() {
    return (
      <View style={[styles.content, { height: 36 }]}>
        <View style={styles.leftBox}>{renderLeftContent}</View>
        {backVisible ? renderGoBack() : <></>}
        <Text style={styles.text}>{title}</Text>
        <View style={styles.rightBox}>{renderRightContent}</View>
      </View>
    );
  }

  return (
    <View style={[styles.MMNavigationStyle, { height: viewHeight }]}>
      <StatusBar barStyle={'light-content'} />
      <View style={[getClassName(), { paddingTop: statusBarHeight }]}>
        {renderContent()}
      </View>
    </View>
  );
};

const Navigation = memo(Component);
export default Navigation;
