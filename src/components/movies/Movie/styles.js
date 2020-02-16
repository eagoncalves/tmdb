import { StyleSheet } from 'react-native';
import * as Typograph from 'constants/typography';
import * as Colors from 'constants/colors';
import * as Mixins from 'constants/mixins';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Colors.PRIMARY
  },
  scroll: {
    paddingTop:28, 
    paddingBottom:28
  },
  item: {
    borderRadius: 3,
    marginBottom: 20,
    justifyContent: Mixins.SPACE_BETWEEN, 
    height: 275,
  },
  top: {
    height: 24,
    paddingRight: 30,
    paddingLeft: 30,
    flexDirection: Mixins.ROW,
    justifyContent: Mixins.SPACE_BETWEEN,
  },
  text: {
    height: 24,
    color: Colors.WHITE,
    fontSize: 13,
    fontWeight: Typograph.FONT_WEIGHT_BOLD,
    lineHeight: 24,
    textTransform: Typograph.FONT_TEXT_UPPERCASE,
  },
  see: {
    width: 39,
    height: 24,
    opacity: 0.6,
    color: Colors.WHITE,
    fontSize: 13,
    fontWeight: Typograph.FONT_WEIGHT_REGULAR,
    lineHeight: 24,
  },
  header: {
    height: 225,
    backgroundColor: Colors.SECONDARY,
    paddingTop: 40,
    paddingBottom: 64,
    alignItems: Mixins.CENTER,
    position: Mixins.ABSOLUTE,
    left: 0,
    top: 0,
    right: 0,
    zIndex: 999
  },
  headerLine: {
    height: 15,
    backgroundColor: Colors.PRIMARY,
    width: Mixins.WIDTH_HUNDRED,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 20
  },
  titleTop: {
    marginBottom: 20
  },
  title: {
    color: Colors.WHITE,
    fontSize: 26,
    fontWeight: Typograph.FONT_WEIGHT_REGULAR,
    lineHeight: 40,
    width: 250
  },
  loadingText:{
    color: Colors.WHITE,
    fontSize: 15,
  }
});