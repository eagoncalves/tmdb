import { StyleSheet } from 'react-native';
import * as Mixins from 'constants/mixins';
import * as Typography from 'constants/typography';
import * as Colors from 'constants/colors';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 14,
      width: Mixins.WIDTH_HUNDRED,
    },
    scroll: {
      paddingLeft: 30,
    },
    item : {
      borderRadius: 3,
      paddingRight: 20,
      justifyContent: Mixins.SPACE_BETWEEN, 
      height: 218,
    },
    image:{
      width: 130,
      height: 170,
      borderRadius: 20
    },
    title: {
      marginTop: 10,
      width: 124,
      height: 18,
      color: Colors.WHITE,
      fontSize: 13,
      fontWeight: Typography.FONT_WEIGHT_BOLD,
    }
});