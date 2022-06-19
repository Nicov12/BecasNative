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
         // console.log(articles.results.books.slice(0,3));
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
      <View style={styles.root}>
          <Text style={styles.texto}> SECCIÓN DE LIBROS</Text>
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
                    <Title style={styles.titleStyle}>{title}</Title>
                    <Paragraph style={styles.text1}>{description}</Paragraph>
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
  );
}

const styles = StyleSheet.create({ 
  texto: {
    padding: 10,
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: '#9dd3ff',
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'sans-serif-condensed',
    borderRadius: 50,
    marginRight: 40,
    marginLeft: 40,
},
cardStyle: {
  padding: 10,
  marginRight: 5,
  marginLeft: 5,
  marginTop: 10,
  marginBottom: 10,
  backgroundColor: '#9dd3ff',
  color: '#fff',
  fontFamily: 'sans-serif-condensed',
  alignContent: 'center',
  alignItems: 'center',
  borderRadius: 50,
},
textStyle:{
  fontSize: 25, 
  color: '#fff', 
  fontFamily: 'sans-serif-condensed',
  textAlign: 'center',
  borderRadius: 10,
},
    imgStyle: {
      height: 500,
      marginLeft: 30,
      marginRight: 30,
      marginTop: 10,
    },
    btnStyle: {
      flexDirection: "row",
      justifyContent: "space-around",
      textAlign: 'center',
      marginLeft: 10,
      marginRight: 10,
    },
    root: {
      backgroundColor: "#1B2430",
    },
    titleStyle: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: "#1B2430", 
      color: '#fff',
      padding: 10,
      borderRadius: 20,
    },
    text1:{
      fontSize: 20, 
      color: 'black', 
      fontWeight: 'bold',
      marginTop: 10,

      padding: 10,
      backgroundColor: "#1B2430", 
      color: '#fff',
      marginLeft: 5,
      marginRight: 5,
      borderRadius: 20,
    },

});

export default ApiNYT;