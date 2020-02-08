import React from 'react';
import Iframe from 'react-iframe'
//import 'bootstrap/dist/css/bootstrap.css';  //Ta biblioteka wysypuje mi GRID'a
//import { Alert, Container, Badge } from 'react-bootstrap';
import { Container, Button, makeStyles, Typography, Grid       } from '@material-ui/core'
import { Card, CardContent, CardActions  } from '@material-ui/core'
import { Alert, AlertTitle    } from '@material-ui/lab'
//import { CheckCircleOutlineIcon  } from '@material-ui/icons';
//import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles(theme => ({
    root: {
      
        //width: '100%', '& > * + *': { marginTop: theme.spacing(2), },
        maxWidth: '460px',
        minWidth: '300px',
        margin: '10px',
        //border: '5px',
        
        //background: 'rgb(164, 199, 71)',
        boxShadow: '3px 2px 3px 4px rgba(10, 10, 10, .4)',
    },
  }));

const MapPage = () => {
    
    const classes = useStyles();
    return ( 
        <>

            <Container >
                <br/>
                <Alert severity="success" variant="outlined" >
                    <AlertTitle><h1>Zaplanuj swoją rolkowa wycieczkę.</h1></AlertTitle>
                    Zastanawiasz się gdzie można pojeździć na rolkach?
                    <hr />
                    <p>
                        <br/>Zjeździłem cały Radom, przy okazji nanosząc na mapę jakoś powierzchni, jaką miałem pod kółeczkami.
                        <br/>Skorzystaj z mapy, jaką dla Ciebie przygotowałem.    
                    </p>
                </Alert>
                <br/>
            </Container>
            <div style={{  //możliwość stylowania aktywnego elementu
                    backgroundColor: 'gray',
                    width:"100%",
                    height:"100vh",
                  }}
            >
            <Iframe url="https://www.google.com/maps/d/embed?mid=11wRktITey292ZcSmWtZh8GGdCuQ" width="100%" height="100%" />
            </div>
            <Grid container    > 
                <Card className={classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Korzystaj z warstwa
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h1" >
                            Jazda po radomiu
                        </Typography>
                        Jak przejechać przez miasto, aby nie korzystać
                        z dróg dla samochodów. 
                        <br/>Kolory oddają stan chodników.

                        <br/> <br/>
                        <Typography gutterBottom variant="h6" component="h1" >
                            Nie ograniczaj się, wyjedź dalej!
                        </Typography>
                        Wyjedz po za Radom. 
                        <br/>Wybierane trasy o mniejszym natężeniu ruchu. 
                        <br/>Kolory oddają stan asfaltu na jezdni.
                    </CardContent>
                </Card>

                <Card className={classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Wybierz odpowiednią nawierzchnię
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h1" >
                            <strong style={{color: "green"}}>ZIELONY</strong>
                        </Typography>
                        Jazda to przyjemność. Relaksuj się na gładkich chodnikach, asfalcie, gładkiej kostce bez frezów.
                        
                        <br/> <br/>
                        <Typography gutterBottom variant="h6" component="h1" >
                            <strong style={{color: "blue"}}>NIEBIESKI</strong>
                        </Typography>
                        Chcesz poczuć mrówki na stopach? Sprzęt wytrzyma wstrzasy? Korzystaj z kostki z frezem oraz chodników w nieco gorszym stanie. 

                        <br/> <br/>
                        <Typography gutterBottom variant="h6" component="h1" >
                            <strong style={{color: "blueviolet"}}>FIOLETOWY</strong>
                        </Typography>
                        Ciężkie odcinki, strome, szybkie. Tylko dla tych, którzy maja większe doświadczenie w szybkim hamowaniu.

                        <br/> <br/>
                        <Typography gutterBottom variant="h6" component="h1" >
                            <strong style={{color: "dark"}}>CZARNY/BRĄZOWY</strong>
                        </Typography>
                        Mało uczęszczane drogi wewnętrzne, ślepe uliczki.

                        <br/> <br/>
                        <Typography gutterBottom variant="h6" component="h1" >
                            <strong style={{color: "orange"}}>POMARAŃCZOWY</strong>
                        </Typography>
                        "Ja nie przejadę?" Nie polecane do jazdy, słaby, dziurawy chodnik. 

                        <br/> <br/>
                        <Typography gutterBottom variant="h6" component="h1" >
                            <strong style={{color: "red"}}>CZERWONY</strong>
                        </Typography>
                        NIE przejezdny, Zwykle brak utwardzenia lub szalenie zniszczony chodnik/ulica. 


                        {/* <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography> */}

                        {/* <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                        This is a success alert — check it out!
                        </Alert> */}

                    </CardContent>
                </Card>

                <Card className={classes.root}>
                    <CardContent>
                        <Alert severity="info"  variant="outlined">
                        
                        Masz uwagi, spostrzeżenia?
                        {/* <Alert.Link href="/contact"> Poinformuj mnie o tym.</Alert.Link>. */}

                        </Alert>
                        <br/> Może coś jest nie aktualne?  

                        <CardActions>
                            <Button size="small" href="/contact" >Poinformuj mnie o tym.</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid >
            
            {/* <Container >
                <br/>
                <Alert variant="success">
                    <Alert.Heading><h1>Zaplanuj swoją rolkowa wycieczkę.</h1></Alert.Heading>
                    Zastanawiasz się gdzie można pojeździć na rolkach?
                    <hr />
                    <p>
                        Zjeździłem cały Radom, przy okazji nanosząc na mapę jakoś powierzchni, jaką miałem pod kółeczkami.
                        <br/>Skorzystaj z mapy, jaką dla Ciebie przygotowałem.    
                    </p>
                </Alert>

                <Iframe url="https://www.go ogle.com/maps/d/embed?mid=11wRktITey292ZcSmWtZh8GGdCuQ" width="100%" height="480" />
            </Container>

            <Container d-flex>
                <br/>
                <Alert variant="light">
                    <Alert.Heading>Korzystaj z warstwa:</Alert.Heading>
                    <hr />
                    <Badge variant="dark">"Jazda po radomiu"</Badge> Jak przejechać przez miasto, aby nie korzystać
                     z dróg dla samochodów. Kolory oddają stan chodników.
                    <hr />
                    <Badge variant="dark">"Nie ograniczaj się, wyjedź dalej!"</Badge> Wyjedz po za Radom. 
                    Wybierane trasy o mniejszym natężeniu ruchu. Kolory oddają stan asfaltu na jezdni.
                </Alert>

                <Alert variant="success">
                    <Alert.Heading>ZIELONY</Alert.Heading>
                        Jazda to przyjemność. Relaksuj się na gładkich chodnikach, asfalcie, gładkiej kostce bez frezów.
                </Alert>

                <Alert variant="primary">
                    <Alert.Heading>NIEBIESKI</Alert.Heading>
                    Chcesz poczuć mrówki na stopach? Sprzęt wytrzyma wstrzasy? Korzystaj z kostki z frezem oraz chodników w nieco gorszym stanie. 
                </Alert>

                <Alert variant="warning">
                    <Alert.Heading>POMARAŃCZOWY</Alert.Heading>
                    "Ja nie przejadę?" Nie polecane do jazdy, słaby, dziurawy chodnik.
                </Alert>

                <Alert variant="danger">
                    <Alert.Heading>CZERWONY</Alert.Heading>
                    NIE przejezdny, Zwykle brak utwardzenia lub szalenie zniszczony chodnik/ulica.
                </Alert>

                <Alert variant="info">
                    <Alert.Heading>FIOLETOWY</Alert.Heading>
                    Ciężkie odcinki, strome, szybkie. Tylko dla tych, którzy lubią się czasami poździerać.
                </Alert>

                <Alert variant="dark">
                    <Alert.Heading>CZARNY/BRĄZOWY</Alert.Heading>
                    Mało uczęszczane drogi wewnętrzne, ślepe uliczki.
                </Alert>

                <Alert variant="light">
                    <Alert.Heading>Masz uwagi, spostrzeżenia?</Alert.Heading>
                    Może coś jest nie aktualne?  
                    <Alert.Link href="/contact"> Poinformuj mnie o tym.</Alert.Link>.
                </Alert>

            </Container> */}

           
        </>
     );
}
 
export default MapPage;