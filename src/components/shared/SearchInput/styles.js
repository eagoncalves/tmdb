import { StyleSheet, Dimensions } from 'react-native';
import * as Colors from 'constants/colors';
import * as Mixins from 'constants/mixins'

export const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.WHITE_OVERLAY,
    height: 35
  },
  container:{
    width: Mixins.WIDTH_MARGIN,
    backgroundColor: Colors.TRANSPARENT,
    borderColor: Colors.SECONDARY,
    borderBottomColor: Colors.SECONDARY,
    borderTopColor: Colors.SECONDARY,
    height: 50
  }
})