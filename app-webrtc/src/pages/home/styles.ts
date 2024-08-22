import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export const page: ViewStyle = {
  flex: 1,
  backgroundColor: '#fff',
};
export const bg: ImageStyle = {
  width: '100%',
  height: '100%',
};
export const header: ViewStyle = {
  height: 52,
  borderRadius: 26,
  maxWidth: 358,
  padding: 1,
  marginTop: 44,
  marginLeft: 16,
  marginBottom: 28,
};
export const innerBox: ViewStyle = {
  height: 50,
  borderRadius: 26,
  maxWidth: 358,
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingLeft: 15,
  flexDirection: 'row',
};
export const logo: ImageStyle = {
  width: 32,
  height: 32,
  marginRight: 10,
};
export const header_title: TextStyle = {
  color: '#fff',
  fontSize: 28,
};
export const content: ViewStyle = {
  paddingHorizontal: 16,
  flexDirection: 'row',
  flexWrap: 'wrap',
};
export const item_bg: ImageStyle = {
  height: 160,
  width: 312,
  marginBottom: 16,
  paddingTop: 10,
  paddingBottom: 14,
  paddingHorizontal: 14,
  position: 'relative',
  overflow: 'hidden',
  borderRadius: 20,
  justifyContent: 'space-between',
};
export const item_name: TextStyle = {
  color: '#fff',
  fontSize: 20,
  marginBottom: 2,
};
export const item_image: ImageStyle = {
  position: 'absolute',
  bottom: -45,
  right: -45,
  width: 168,
  height: 168,
};
export const item_icon: ImageStyle = {
  width: 16,
  height: 16,
  marginRight: 4,
  opacity: 0.5,
};
export const item_icon_text: TextStyle = {
  fontFamily: 'Source Han Sans CN, Source Han Sans CN',
  fontSize: 16,
  color: '#fff',
  opacity: 0.5,
};
export const linear_btn: ViewStyle = {
  borderRadius: 72,
  height: 28,
  width: 92,
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: '#fff',
  shadowOffset: {
    width: 0,
    height: -8,
  },
};
export const text_box: ViewStyle = {
  height: 28,
  width: 90,
  borderRadius: 15,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: '#fff',
  opacity: 0.8,
};
export const text: TextStyle = {
  fontFamily: 'Source Han Sans CN, Source Han Sans CN',
  fontSize: 16,
  color: '#fff',
  opacity: 0.8,
};
