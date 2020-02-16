import { StyleSheet } from 'react-native';
import * as Colors from 'constants/colors';
import * as Typography from 'constants/typography'
import * as Mixins from 'constants/mixins';

export const styles = StyleSheet.create({
    container: {
      height: Mixins.HEIGHT_HUNDRED,
      backgroundColor: Colors.PRIMARY
    },
    header: {
      position: Mixins.ABSOLUTE,
      left: 0,
      top: 0,
      right: 0,
    },
    image:{
      height: 280,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    buttons: {
      position: Mixins.ABSOLUTE,
      flexDirection: Mixins.ROW,
      justifyContent: Mixins.SPACE_BETWEEN,
      width: Mixins.WIDTH_HUNDRED,
      paddingLeft: 30,
      paddingRight: 30,
      top: 50,
    },
    infos: {
      marginTop: 290,
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 10,
      flex: 1
    },
    scroll: {
      paddingTop: 20
    },
    titleView: {
      flexDirection: Mixins.ROW
    },
    title: {
      color: Colors.WHITE,
      fontSize: 24,
      fontFamily: Typography.FONT_FAMILY_REGULAR,
      fontWeight: Typography.FONT_WEIGHT_EXTRA_BOLD
    },
    sub:{
      height: 36,
      marginTop: 13,
      flexDirection: Mixins.ROW,
      justifyContent: Mixins.SPACE_BETWEEN
    },
    button:{
      backgroundColor: Colors.WHITE_OVERLAY,
      height: 34,
      width: 115,
      borderRadius: 15,
      alignItems: Mixins.CENTER,
      justifyContent: Mixins.CENTER
    },
    buttonTitle:{
      fontSize: 11,
      fontFamily: Typography.FONT_FAMILY_REGULAR,
      fontWeight: Typography.FONT_WEIGHT_EXTRA_BOLD,
      lineHeight: 24,
      textTransform: Typography.FONT_TEXT_UPPERCASE,
      color: Colors.WHITE
    },
    overview: {
      marginTop: 30,
      marginBottom: 15
    },
    textOverview: {
      opacity: 0.7,
      color: Colors.WHITE,
      fontSize: 13,
      fontFamily: Typography.FONT_FAMILY_REGULAR,
      fontWeight: Typography.FONT_WEIGHT_REGULAR,
      lineHeight: 24
    },
    aditionalView: {
      flexDirection: Mixins.ROW
    },
    aditionalLabel: {
      width: 50,
      color: Colors.WHITE,
      fontSize: 13,
      fontFamily: Typography.FONT_FAMILY_REGULAR,
      fontWeight: Typography.FONT_WEIGHT_BOLD,
      lineHeight: 24,
      marginRight: 23
    },
    aditionalText:{
      opacity: 0.7,
      color: Colors.WHITE,
      lineHeight: 24,
      fontSize: 13,
      fontFamily: Typography.FONT_FAMILY_REGULAR,
      fontWeight: Typography.FONT_WEIGHT_REGULAR
    }
});