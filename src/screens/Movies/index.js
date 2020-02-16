
import React, { useEffect }from 'react';
import { ScrollView, View, Text} from 'react-native'
import { Container } from './styles'
import Movie from 'components/movies/Movie';

import * as NavigationActions from '../../store/actions/navigation';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';


function Movies ({ navigation, setNavigation }) {

  useEffect(()=> {
    setNavigation(navigation);
  }, [])

  return (
    <Container>
      <Movie />
    </Container>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators(NavigationActions, dispatch)

export default connect(null, mapDispatchToProps)(Movies);
