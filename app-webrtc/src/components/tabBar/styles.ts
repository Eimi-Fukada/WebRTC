import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export const page: ViewStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#fff',
};
export const content: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-around',
};
export const text: TextStyle = {
  fontSize: 11,
  lineHeight: 16,
  height: 16,
};
export const image: ImageStyle = {
  width: 32,
  height: 32,
};
