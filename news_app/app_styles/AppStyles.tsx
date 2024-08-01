import {Platform, StyleSheet} from 'react-native';
import appThemeColor from './AppTheme';

export const appStyle = StyleSheet.create({
  splash_background: {
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: appThemeColor.primaryColor,
  },
  center_align_view: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 25,
    fontFamily: (Platform.OS = 'android')
      ? 'sans-serif-medium'
      : 'GeezaPro-Bold',
  },
  toolbar: {
    flexDirection: 'row',
    flex: 1,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    backgroundColor: appThemeColor.primaryColor,
  },
  default_spacing_5: {
    padding: 5,
  },
  default_spacing_10: {
    padding: 10,
  },
  toolBarTextWidth70: {
    width: '70%',
  },
  toolBarTextWidth100: {
    width: '100%',
  },
  toolBarTex: {
    fontSize: appThemeColor.titleFontSize,
    marginLeft: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 1,
    fontFamily: (Platform.OS = 'android')
      ? 'sans-serif-medium'
      : 'GeezaPro-Bold',

    textAlign: 'center',
  },
  toolBarIcon: {
    height: 30,
    width: 30,
    fontSize: 30,
  },
  app_background: {
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: appThemeColor.secondaryColor,
  },
  listItem: {
    height: '35%',
    width: '100%',
  },
  cardview: {
    backgroundColor: appThemeColor.cardBackgroundcolor,
    shadowColor: appThemeColor.shadowcolor,
    padding: 5,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 5,
  },
  newsCardImage: {
    height: '80%',
    width: '100%',
  },
  newsCardText : {
    color : appThemeColor.textColor,
    height : '20%',
    width : '100%',
    textAlign : 'left',
    padding : 5,
    fontWeight : 'bold',
  }
});
