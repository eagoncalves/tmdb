import React, { useState }from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { SearchBar } from 'react-native-elements';
import { query } from 'services/api'

import * as MovieActions from 'store/actions/movies';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';

function SearchInput ({ setActionsMovie }) {
  const [search, setSearch] = useState('');

  const handleOnChange = search => {
    setSearch(search);
  };
  
  const handleEndSearch = async () =>{
    setActionsMovie(false, true, {});
    const response = await query(search);

    if (response.error) {
      setActionsMovie(false, false, {});
    } else  {
      setActionsMovie(true, false, response.movies);
    }
  }

  const handleOnClear = () => {
    setActionsMovie(false, false, {});
  }


  return (
    <SearchBar
      placeholder="Search..."
      onChangeText={handleOnChange}
      onEndEditing={handleEndSearch}
      onClear={handleOnClear}
      lightTheme
      round
      value={search}
      inputContainerStyle={styles.input}
      containerStyle={styles.container}
    />

  )
}

const mapDispatchToProps = dispatch => bindActionCreators(MovieActions, dispatch);

export default connect(null, mapDispatchToProps)(SearchInput);