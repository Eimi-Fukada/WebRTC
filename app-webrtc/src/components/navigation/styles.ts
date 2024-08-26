import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export const MMNavigationStyle: ViewStyle = {
  width: '100%',
  height: 30,
  borderBottomWidth: 0.5,
  borderBottomColor: 'transparent',
};
export const fixed: ViewStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  backgroundColor: '#fff',
};
export const content: ViewStyle = {
  position: 'relative',
  flexDirection: 'row',
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 10,
  paddingRight: 10,
  width: '100%',
  height: 30,
  alignItems: 'center',
};
export const leftBox: ViewStyle = {
  position: 'absolute',
  left: 10,
};
export const rightBox: ViewStyle = {
  position: 'absolute',
  right: 10,
};
export const text: TextStyle = {
  flex: 1,
  textAlign: 'center',
  fontSize: 17,
  fontWeight: 'bold',
  color: '#333',
};
export const goback: ViewStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  paddingLeft: 10,
  paddingRight: 10,
  flexDirection: 'row',
  height: '100%',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  zIndex: 1,
};
export const leftIcon: ImageStyle = {
  width: 20,
  height: 20,
};
