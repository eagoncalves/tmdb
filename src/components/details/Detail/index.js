import React, { useEffect, useState} from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import Average from 'components/shared/Average';
import { getAdditionalInfo } from 'services/api';
import { connect } from 'react-redux';

function Detail ({ movie, navigation }) {

  const [genres, setGenres] = useState(null);
  const [studios, setStudios] = useState(null);

  useEffect(()=> {
    getAdditionalInfo(movie.id, 'genres')
    .then(genres => setGenres(genres));

    getAdditionalInfo(movie.id, 'studios')
    .then(studios => setStudios(studios));

  }, [])

  const onHandlerBack = () => { 
    navigation.popToTop();
  }

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: movie.poster }} style={styles.image}/>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => onHandlerBack()}>
              <Ionicons name="md-arrow-back" size={30} color="white" />
            </TouchableOpacity>
            <Ionicons name="ios-heart-empty" size={30} color="white" />
          </View>
        </View>
        <View style={styles.infos}> 
          <ScrollView 
           vertical 
           showsVerticalScrollIndicator={false}
           scrollEventThrottle={16}>
            <View style={styles.titleView}>
              <Text style={styles.title}>{movie.title}</Text>
            </View>
            <View style={styles.sub}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonTitle}>watch now</Text>
                </TouchableOpacity>
                <Average rating={movie.average}/> 
            </View>
            <View style={styles.overview}>
              <Text style={styles.textOverview}>{movie.overview}</Text>
            </View>
            <View style={styles.aditionalView}>
              <Text style={styles.aditionalLabel}>Studio</Text>
              <Text style={styles.aditionalText}>{studios}</Text>
            </View>
            <View style={styles.aditionalView}>
              <Text style={styles.aditionalLabel}>Genre</Text>
              <Text style={styles.aditionalText}>{genres}</Text>
            </View>
            <View style={styles.aditionalView}>
              <Text style={styles.aditionalLabel}>Release</Text>
              <Text style={styles.aditionalText}>{movie.release}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
  );
}

const mapStateToProps = state => ({
  navigation: state.navigation.navigation
});

export default connect(mapStateToProps, null)(Detail);