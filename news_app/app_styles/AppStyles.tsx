import {Platform, StyleSheet} from 'react-native';
import appThemeColor from './AppTheme';

export const appStyle = StyleSheet.create({
  splash_background: {
    justifyContent: 'center',
    height : '100%',
    width : '100%',
    backgroundColor: appThemeColor.primaryColor,
  },
  center_align_view : {
    alignSelf : 'center',
    alignItems : 'center'
  },
  textTitle : {
    fontSize : 25,
    fontFamily : (Platform.OS = 'android') ? 'sans-serif-medium' : 'GeezaPro-Bold'

  },
  toolbar : {
    flexDirection : 'row',
    flex : 1,
    height : 50,
    justifyContent : 'flex-start',
    alignItems : 'center',
    width : '100%',
    backgroundColor : appThemeColor.primaryColor
  },
  default_spacing : {
    padding : 5
  },
  toolBarTex : {
    fontSize : appThemeColor.titleFontSize,
    marginLeft : 10,
    textTransform :'uppercase',
    fontWeight : 'bold',
    letterSpacing : 1,
    fontFamily : (Platform.OS = 'android') ? 'sans-serif-medium' : 'GeezaPro-Bold'

  },
  toolBarIcon : {
    height : 30,
    width : 30,
    fontSize : 30
  }
});
