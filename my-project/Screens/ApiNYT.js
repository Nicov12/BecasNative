import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Image} from 'react-native';
import {Card, FAB} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar, Button, Title, Paragraph } from 'react-native-paper';

function ApiNYT() {

    // NY TIMES
    const [articles, setArticles] = useState([])
    const [term, setTerm] = useState('everything')
    const [isLoading, setIsLoading] = useState(true)
    //FIN NY TIMES

    useEffect(() => {
  
      //Funcion para el nytimes
      const fetchArticles = async ()  => {
        
        try {
          const res = await fetch(
            'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=xMGIqDTK5G9c8yfhjVrwGOVeC9VjocZ3'
          )
          const articles = await res.json()
          console.log(articles.results.books.slice(0,3));
          setArticles(articles.results.books.slice(0,3));
          } 
           catch (error) {
            console.error(error);
        } 
      }
      fetchArticles()
      //Fin nytimes
  },[] )

  return (

    <View>
        <Text>HOLA COMOTAS</Text>

        <View>
      {articles.map((article) => {
        const {
          description,
          title, 
          author, 
          book_image,
          amazon_product_url,
          primary_isbn10 
        } = article
        return(
            <View key={primary_isbn10}>

                <Card>
                    <Card.Title title="Card Title" subtitle="Card Subtitle"/>
                    <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                    </Card.Actions>
                </Card>


                <Text>{title}</Text>
                <Text>{amazon_product_url}</Text>
                <Text>{description}</Text>
            </View>
        )
      })}
      </View>
    </View>


  );
}

export default ApiNYT;