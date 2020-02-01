import React from 'react';
import Article from '../components/Article'

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Jan Kowalski",
        text: "Bala bala, jakiś tekst"
    },
    {
        id: 2,
        title: "Artykół 2",
        author: "Jan Nowak",
        text: "Bala bala, jakiś tekst"
    },
    {
        id: 3,
        title: "Zapraszamy na fajny festyn",
        author: "Jan Malinowski",
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