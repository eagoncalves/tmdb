import React  from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles'; 

import Average from 'components/shared/Average'

import { connect } from 'react-redux';

function MovieList ({ movies , navigation }){
  const { navigate } = navigation;

  const _renderList = () => {
    return  movies.map(movie => (
            <View style={styles.item} key={movie.id}> 
                <TouchableOpacity onPress={()=> navigate('Details', { movie: movie })}>
                  <Image source={{ uri: movie.imagePath }} style={styles.image} />
                  <Text style={styles.title}>{movie.title}</Text>
                  <Average rating={movie && movie.average}/> 
                </TouchableOpacity>
            </View>
    ))
  }

  return (
    <View style={styles.container}>
      <ScrollView 
          style={styles.scroll} 
          contentContainerStyle={{ paddingRight: 30 }}
          horizontal 
          showsHorizontalScrollIndicator={false}>
        {
          _renderList()
        }
      </ScrollView>
    </View>
  )
}

const mapStateToProps = state => ({
    navigation: state.navigation.navigation
});

export default connect(mapStateToProps)(MovieList);