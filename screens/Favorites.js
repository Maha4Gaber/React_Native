import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import {Card, Button,  Title, Paragraph } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';

function Favorites({ navigation }) {
  const [movies, setMovies] = useState([]);
  const favorites = useSelector(state => state.movies.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popularapi_key=aa6fc65fcedb7431af3ac2fbe6484cd0language=en-US&page=1')
      .then(response => response.json())
  .then(data => setMovies(data.results))
      .catch(error => console.error(error));
  }, []);

  const addFavorite = movie => dispatch({ type: 'ADD_FAVORITE', payload: movie });
  const removeFavorite = movie => dispatch({ type: 'REMOVE_FAVORITE', payload: movie });

  const isFavorite = movie => favorites.some(fav => fav.id === movie.id);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 16 }}>
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.overview}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.navigate('MovieDetails', { id: item.id })}>Details</Button>
              <Button
                onPress={() => isFavorite(item) ? removeFavorite(item) : addFavorite(item)}
              >
                {isFavorite(item) ? "Remove from Favorites" : "Add to Favorites"}
              </Button>
            </Card.Actions>
          </Card>
        )}
      />
      <Text>Favorites Count: {favorites.length}</Text>
    </View>
  );
}

export default Favorites;
