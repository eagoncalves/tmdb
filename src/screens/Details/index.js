import React from 'react';
import { View, Text}  from 'react-native';
import Detail from 'components/details/Detail';

function Details ({ navigation }) {
  const { movie } = navigation.state.params;
  return(
    <View>
      <Detail movie={movie}/>
    </View>
  )
}

export default Details;