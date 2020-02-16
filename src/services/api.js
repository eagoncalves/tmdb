import axios from 'axios';
import Movie from '../models/movie';
import * as Api from 'constants/api';
import * as Utils from 'utils/arrays';

const api = axios.create({
    baseURL: Api.URL_BASE
});

export const getPlayings = async () => {
    const end = `${Api.URL_BASE}movie/${Api.ENDPOINT_PLAYING}/?api_key=${Api.API_KEY}`;
    const response = await api.get(`movie/${Api.ENDPOINT_PLAYING}/?api_key=${Api.API_KEY}`);
    const data = response.data;
    const results = data.results;
    const movies = [];
    
    results.map(result => {
        const movie = new Movie(result);
        movies.push(movie);
    })
    return movies;
}

export const getPopular = async () => {
    const response = await api.get(`movie/${Api.ENDPOINT_POPULAR}/?api_key=${Api.API_KEY}`);
    const data = response.data;
    const results = data.results;
    const movies = [];
  
    results.map(result => {
        const movie = new Movie(result);
        movies.push(movie);
    })
    return movies;
}

export const getTopRated = async () => {
    const response = await api.get(`movie/${Api.ENDPOINT_TOP_RATED}?api_key=${Api.API_KEY}`);
    const data = response.data;
    const results = data.results;
    const movies = [];
  
    results.map(result => {
        const movie = new Movie(result);
        movies.push(movie);
    })
    return movies;
}

export const getUpcoming = async () => {
    const response = await api.get(`movie/${Api.ENDPOINT_UPCOMING}/?api_key=${Api.API_KEY}`);
    const data = response.data;
    const results = data.results;
    const movies = [];
  
    results.map(result => {
        const movie = new Movie(result);
        movies.push(movie);
    })
    return movies;
}

  export const getAdditionalInfo = async (id, additionalInfo) => {
    const response = await api.get(`movie/${id}?api_key=${Api.API_KEY}`);
    const data = response.data;

    switch (additionalInfo) {
        case 'genres':
            return Utils.ArrayToString(data.genres.map(genre => genre.name));        
        case 'studios':
            return Utils.ArrayToString(data.production_companies.map(studio => studio.name));
        default:
            return null;
    }
  }

  export const query = async (name) => {
    let response;  
    try {
        response = await api.get(`${Api.ENDPOINT_SEARCH}/movie?api_key=${Api.API_KEY}&query=${name}`);
        const data = response.data;
        const results = data.results;
        const movies = [];
    
        results.map(result => {
            const movie = new Movie(result);
            movies.push(movie);
        })
        return { movies, error: false };
    } catch(error) {
        return { movies: null, error: true };
    } 
  }