import React from 'react';
import Article from '../components/Article'

const articles = [
    {
        id: 1,
        title: "Zapraszamy na festyn",
        author: "Jan Malinowski",
        text: "Bala bala, jakiś tekst"
    },
    {
        id: 2,
        title: "Artykuł 2",
        author: "Jan Nowak",
        text: "Bala bala, jakiś tekst"
    },

]

const HomePage = () => {
 
    const artList = articles.map(el => (
        <Article key={el.id} {...el} /> //Przekazanie wysztkich właściwości
    ))
    
    return(
        <div className="home">
            {artList}
        </div>
    );
}
 
export default HomePage;