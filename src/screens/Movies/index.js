
import React, { useEffect }from 'react';
import { styles } from './styles'
import { View } from 'react-native'
import Movie from 'components/movies/Movie';

import * as NavigationActions from 'store/actions/navigation';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';


function Movies ({ navigation, setNavigation }) {

  useEffect(()=> {
    setNavigation(navigation);
  }, [])

  return (
    <View style={styles.container}>
      <Movie />
    </View>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators(NavigationActions, dispatch)

export default connect(null, mapDispatchToProps)(Movies);
