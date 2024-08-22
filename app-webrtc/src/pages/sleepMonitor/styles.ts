import { ImageStyle, ViewStyle, TextStyle } from 'react-native';

export const page: ViewStyle = {
  flex: 1,
  backgroundColor: '#031333',
};
export const bg: ImageStyle = {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 80,
};
export const title: TextStyle = {
  fontFamily: 'Source Han Sans CN, Source Han Sans CN',
  fontSize: 38,
  color: '#CFDFFF',
};
export const content: ViewStyle = {
  paddingHorizontal: 16,
  paddingVertical: 22,
  flex: 1,
};
export const image: ImageStyle = {
  width: '100%',
  height: '100%',
};
export const back: ImageStyle = {
  width: 28,
  height: 28,
  marginRight: 12,
};
export const logo: ImageStyle = {
  height: 36,
  width: 128,
  marginRight: 16,
};
export const backBox: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: 16,
};
export const backTitle: TextStyle = {
  fontFamily: 'Source Han Sans CN, Source Han Sans CN',
  fontSize: 23,
  color: '#CFDFFF',
};
