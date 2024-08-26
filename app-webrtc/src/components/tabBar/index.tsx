import React, { FC, memo, useEffect, useState } from 'react';
import * as ss from './styles';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TabBarProps, TabBarData } from './const';
import { getBottomHeight } from '../../utils/getBottomHeigth';
import classNames from '../../utils/help';

const styles = StyleSheet.create(ss);

const Component: FC<TabBarProps> = (props) => {
  const {
    data,
    onChange,
    path,
    defaultColor = '#cccccc',
    activeColor = '#00418E',
  } = props;
  const paddingBottom = getBottomHeight();
  const height = 50 + getBottomHeight();
  const [currentIndex, setCurrentIndex] = useState(0);

  function setPath() {
    if (path) {
      setCurrentIndex(
        data.findIndex((value) => value.url === path.replace(/\?.*$/g, ''))
      );
    }
  }

  function onClick(value: TabBarData, index: number) {
    if (index !== currentIndex) {
      setCurrentIndex(index);
      onChange && onChange(value);
    }
  }

  function getClassName(index: number) {
    return classNames(styles.text, {
      color: currentIndex === index ? activeColor : defaultColor,
    });
  }

  useEffect(() => {
    setPath();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <View style={{ height }} />
      <View style={styles.page}>
        <View style={[styles.content, { height, paddingBottom }]}>
          {data?.map((value, index) => (
            <TouchableOpacity
              key={value.text}
              activeOpacity={1}
              onPress={() => onClick(value, index)}
              style={{ alignItems: 'center' }}
            >
              <View style={classNames(styles.image)}>
                {/^http(s)?:\/\//.test(value.image) ? (
                  <Image
                    style={classNames(styles.image)}
                    source={{
                      uri:
                        currentIndex === index
                          ? value.imageSelected!
                          : value.image!,
                    }}
                  />
                ) : (
                  <Image
                    style={classNames(styles.image)}
                    source={
                      (currentIndex === index
                        ? value.imageSelected!
                        : value.image!) as any
                    }
                  />
                )}
              </View>
              <Text style={getClassName(index)}>{value.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const TabBar = memo(Component);
export default TabBar;
