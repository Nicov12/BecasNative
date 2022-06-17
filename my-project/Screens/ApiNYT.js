import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Linking} from 'react-native';
import {Card, FAB} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar, Button, Title, Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

function ApiNYT(props) {

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
          //console.log(articles.results.books.slice(0,3));
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
    <ScrollView style={styles.root}>
    <View>
        <Text style={styles.texto}>LIBROS</Text>
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

                <Card style={styles.cardStyle}>
                    <Card.Content>
                    <Title style={styles.textStyle}>{title}</Title>
                    <Paragraph style={styles.textStyle}>{description}</Paragraph>
                    </Card.Content>
                    <Card.Cover style={styles.imgStyle} source={{ uri: book_image }} />
                    <Card.Actions style={styles.btnStyle} >
                    <Button
                      icon = "plus"
                      mode = "contained"
                      color = "#024a86"
                      style={styles.btnStyle}
                      onPress={() => Linking.openURL(amazon_product_url)}
                    > Ir a la página </Button>
                    </Card.Actions>
                </Card>
            </View>
        )
      })}
      </View>
    </View>
    </ScrollView>


  );
}

const styles = StyleSheet.create({ 
    texto: {
        padding: 10,
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 48%, rgba(44,53,212,1) 100%)',
        color: '#fff',
        marginTop: 10,
        marginBottom: 10,
        fontFamily: 'sans-serif-condensed',
    },
    cardStyle: {
      margin: 20,
      backgroundColor: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 48%, rgba(44,53,212,1) 100%)',
    },
    textStyle: {
      color: '#fff',
      textAlign: 'center',
      fontFamily: 'sans-serif-condensed',
    },
    imgStyle: {
      width: '100%',
      height: 500,
    },
    btnStyle: {
      flexDirection: "row",
      justifyContent: "space-around",
      textAlign: 'center',
      margin: 10,
    },
    root: {
      backgroundColor: "#84BFF0",
    }

});

export default ApiNYT;