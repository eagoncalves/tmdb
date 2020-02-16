import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from  './styles';
import Animated from 'react-native-reanimated';
import Spinner from 'react-native-loading-spinner-overlay';
import SearchInput from 'components/shared/SearchInput';
import MovieList from '../MovieList';
import { getPlayings, getPopular, getTopRated, getUpcoming, query } from 'services/api';
import * as MovieActions from 'store/actions/movies';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';

function Movie({ filtering, loading, searchedMovie, setActionsMovie }){

  const [playings, setPlayings] =  useState([]);
  const [popular, setPopular] =  useState([]);
  const [tops, setTops] =  useState([]);
  const [upcomings, setUpcomings] =  useState([]);
  const [scrollY] = useState(new Animated.Value(0));

  const HEADER_MAX_HEIGHT = 217;
  const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 80 : 93;
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

    useEffect(() => {
      function getAllInformation() {
        getPlayings().then(playings => {
          setPlayings(playings);
          getPopular().then(popular => {
            setPopular(popular);
            getTopRated().then(topRated => {
              setTops(topRated);
              getUpcoming().then(upcoming => {
                setUpcomings(upcoming);
                setActionsMovie(false, false, {});
              })
            })
          })
        });
      }
      
      getAllInformation();

    }, [])

    const headerHeight = scrollY.interpolate(
      {
        inputRange: [0, 20],
        outputRange: [217, 180],
        extrapolate: 'clamp',
      }
    );

    const headerTitleHeight = scrollY.interpolate(
      {
        inputRange: [0, 0.7, 1],
        outputRange: [1, 0.7, 0],
        extrapolate: 'clamp',
      }
    );
     
    const _renderLoadingScreen = () => {
      return (
        <Spinner
          visible
          textContent={'Loading'}
          textStyle={styles.loadingText}
        />
      );
    }

    const _renderMovieSections = () => {
      const sections = [
        { id: 1, title: 'Playings', list: playings },
        { id: 2, title: 'Popular', list: popular },
        { id: 3, title: 'Top Rated', list: tops },
        { id: 4, title: 'Upcoming', list: upcomings },
      ]

      return sections.map(section => 
        <View style={styles.item} key={section.id}>
            <View style={styles.top}>
              <Text style={styles.text}>{section.title}</Text>
              <Text style={styles.see}>See All</Text>
            </View>
            <MovieList movies={ section.list }/>
        </View >
       )
    }

    const _renderCustomSearch = () => {
      const sections = [
        { id: 1, title: 'Results', list: searchedMovie }
      ]
      return sections.map(section => 
        <View style={styles.item} key={section.id}>
            <View style={styles.top}>
              <Text style={styles.text}>{section.title}</Text>
              <Text style={styles.see}>See All</Text>
            </View>
            <MovieList movies={ section.list }/>
        </View >
       )
    }

    const _renderComponents = () => {
      if (loading) {
        return _renderLoadingScreen();
      } else {
        return filtering ? _renderCustomSearch() : _renderMovieSections();
      }
    }

    return (
      <View style={styles.container}>
        <View 
          style={ styles.header }>
            <View>
              <View style={ styles.titleTop }>
                  <Text style={styles.title}>Hello, what do you want to watch?</Text>
              </View>
            </View>
              <SearchInput />
              {/* <View style={ styles.headerLine }></View> */}
              <Animated.View style={[styles.headerLine, { opacity: headerTitleHeight }] }></Animated.View>
        </View>
        
        <Animated.ScrollView 
          vertical
          contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true },
          )} 
          showsVerticalScrollIndicator={false} 
          style={styles.scroll}>
          { _renderComponents() }
        </Animated.ScrollView>
      </View>
    )
}

const mapStateToProps = state => ({
  filtering: state.movies.filtering,
  loading: state.movies.loading,
  searchedMovie: state.movies.searchedMovie
});

const mapDispatchToProps = dispatch => bindActionCreators(MovieActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Movie);