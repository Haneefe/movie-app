import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Text, View} from 'react-native';
const getpopularMovies=async()=>{
  
  const res=await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=bc7af3dff73abcfbabee53a33cd48d10')
  return res.data.results[0]

}
const App = () => {
  const [movieData,setMovieData]=useState([])
  useEffect(()=>{
    getpopularMovies().then((data)=>setMovieData(data.original_title))
  },[])
  getpopularMovies().then((data)=>setMovieData(data.original_title))
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{movieData}</Text>
    </View>
  );
};

export default App;