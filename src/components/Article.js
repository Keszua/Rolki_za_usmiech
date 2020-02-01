import React from 'react'

const Article = ({title, author, text}) => {

    const styles = {
        marginTop: 40
    }

    return(
        <article style={styles}>
            <h3 style={{
                margin: 3,
                textTransform: "uppercase"
            }}>{title}</h3>
            <span style={{
                display: "block",
                marginBottom: 10,
                fontSize: 12,
            }}>Autor: {author}</span>
            <p>
                {text}
            </p>
        </article>
    );
}

export default Article;