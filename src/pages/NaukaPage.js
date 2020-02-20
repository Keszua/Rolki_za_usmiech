//import React, {Component, useRef, useEffect} from 'react';
import React  from 'react';
import img_01 from '../svg/kolo1.svg';

//import CardGroup from 'react-bootstrap/CardGroup'
//import Card from 'react-bootstrap/Card'
//import Alert from 'react-bootstrap/Alert'

import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//import CardActions from '@material-ui/core/CardActions';
//import IconButton from '@material-ui/core/IconButton';

import { makeStyles } from '@material-ui/core';
//import clsx from 'clsx';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { red } from '@material-ui/core/colors';
//import Collapse from '@material-ui/core/Collapse';

import {List, ListItem, ListItemText, ListItemAvatar} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
    card: {
        width: '100%',
        maxWidth: 600,
        //minWidth: 300,
        margin: '10px',
        boxShadow: '3px 2px 3px 4px rgba(10, 10, 10, .4)',
    },
    root: {
      width: '100%',
      maxWidth: 360,
      //padding: "150px",
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
}));



const NaukaPage = () => {
    
    const classes = useStyles();
    //const [expanded, setExpanded] = React.useState(false);

    //const handleExpandClick = () => {  setExpanded(!expanded); };

     return ( 
        <>

        <Alert severity="info">
            <h1>Profesjonalna nauka jazdy pod okiem certyfikowanego instruktora</h1>
        </Alert>

        {/* <Alert variant="primary">
            <Alert.Heading><h1>Zastanawiasz sie: "Jak oni to robią?"</h1> </Alert.Heading>
            <p>
            Myślisz sobie: "To nie dla mnie, ja zaraz zaliczę glebę i stłucze tyłek". 
                A może zastanawiasz się, kto nauczy jeździć Twoje dzieci?
            </p>
            <hr />
            <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things nice
                and tidy.
            </p>
        </Alert> */}

        <Container>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Zastanawiasz sie: "Jak oni to robią?"
                    </Typography>
                    Myślisz sobie: "To nie dla mnie, ja zaraz zaliczę glebę i stłucze tyłek". 
                    <br/>A może zastanawiasz się, kto nauczy jeździć Twoje dzieci?
                </CardContent>
            </Card>

            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Lepiej trafić się nie da.
                    </Typography>
                    Moim celem jest promowanie rolkarstwa i zdrowego stylu życia. 
                    Sam zaczynałem swoją przygodę z rolkami w wieku 27 lat pod okiem instruktora. 
                    Wcześniejsze próby samodzielnej jazdy kończyły się niepowodzeniami.
                    Zainwestowałem wiele czasu oraz pieniędzy, aby zrobić kurs instruktora rolkarstwa i uczyć profesjonalnie.
                </CardContent>
            </Card>

            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">Jestem chętny do pomocy</Typography>
                        Pokieruje Cię w tych najtrudniejszych pierwszych krokach.
                        Pomogę Ci rozpocząć rolkową przygodę, aby spełnić podstawowe kryteria:
                    
                    <List className={classes.root} > 

                        <ListItem alignItems="flex-start">
                            <ListItemAvatar> 
                                <Avatar alt="Remy Sharp" src={img_01} /> 
                            </ListItemAvatar>
                            <ListItemText> 
                                jak zachować podstawowe zasady bezpieczeństwa
                            </ListItemText>
                        </ListItem>
                        <Divider variant="inset" component="li" />

                        <ListItem alignItems="flex-start">
                            <ListItemAvatar> 
                                <Avatar alt="Remy Sharp" src={img_01} /> 
                            </ListItemAvatar>
                            <ListItemText> 
                                jak jest prawidłowa pozycja
                            </ListItemText>
                        </ListItem>
                        <Divider variant="inset" component="li" />

                        <ListItem alignItems="flex-start">
                            <ListItemAvatar> 
                                <Avatar alt="Remy Sharp" src={img_01} /> 
                            </ListItemAvatar>
                            <ListItemText> 
                                jak nie upaść
                            </ListItemText>
                        </ListItem>
                        <Divider variant="inset" component="li" />

                        <ListItem alignItems="flex-start">
                            <ListItemAvatar> 
                                <Avatar alt="Remy Sharp" src={img_01} /> 
                            </ListItemAvatar>
                            <ListItemText> 
                                jak upadać prawidłowo 
                            </ListItemText>
                        </ListItem>
                        <Divider variant="inset" component="li" />

                        <ListItem alignItems="flex-start">
                            <ListItemAvatar> 
                                <Avatar alt="Remy Sharp" src={img_01} /> 
                            </ListItemAvatar>
                            <ListItemText> 
                                jak zrobić pierwszy krok
                            </ListItemText>
                        </ListItem>
                        <Divider variant="inset" component="li" />

                        <ListItem alignItems="flex-start">
                            <ListItemAvatar> 
                                <Avatar alt="Remy Sharp" src={img_01} /> 
                            </ListItemAvatar>
                            <ListItemText> 
                                jak chodzić na rolkach
                            </ListItemText>
                        </ListItem>
                        <Divider variant="inset" component="li" />

                        <ListItem alignItems="flex-start">
                            <ListItemAvatar> 
                                <Avatar alt="Remy Sharp" src={img_01} /> 
                            </ListItemAvatar>
                            <ListItemText> 
                                jak zacząć jeździć 
                            </ListItemText>
                        </ListItem>
                        <Divider variant="inset" component="li" />

                        <ListItem alignItems="flex-start">
                            <ListItemAvatar> 
                                <Avatar alt="Remy Sharp" src={img_01} /> 
                            </ListItemAvatar>
                            <ListItemText> 
                                jak hamować
                            </ListItemText>
                        </ListItem>
                        <Divider variant="inset" component="li" />

                        <ListItem alignItems="flex-start">
                            <ListItemAvatar> 
                                <Avatar alt="Remy Sharp" src={img_01} /> 
                            </ListItemAvatar>
                            <ListItemText> 
                                jak skręcać?
                            </ListItemText>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                    
                </CardContent>
            </Card>

            <Alert severity="error">
                Niepodważalny warunek jaki wymagam: musisz mieć zapięty kask podczas nauki jazdy. 
            </Alert>

            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">A może już jeździsz, ale chcesz czegoś więcej?</Typography>
                        Proszę bardzo:
                    <List className={classes.root} > 

                    <ListItem alignItems="flex-start">
                            <ListItemAvatar> 
                                <Avatar alt="Remy Sharp" src={img_01} /> 
                            </ListItemAvatar>
                            <ListItemText> 
                                jazda tyłem
                            </ListItemText>
                        </ListItem>
                        <Divider variant="inset" component="li" />

                        <ListItem alignItems="flex-start">
                            <ListItemAvatar> 
                                <Avatar alt="Remy Sharp" src={img_01} /> 
                            </ListItemAvatar>
                            <ListItemText> 
                                przeplatanka przodem i tyłem
                            </ListItemText>
                        </ListItem>
                        <Divider variant="inset" component="li" />

                        <ListItem alignItems="flex-start">
                            <ListItemAvatar> 
                                <Avatar alt="Remy Sharp" src={img_01} /> 
                            </ListItemAvatar>
                            <ListItemText> 
                                skok bez upadku
                            </ListItemText>
                        </ListItem>
                        <Divider variant="inset" component="li" />

                        <ListItem alignItems="flex-start">
                            <ListItemAvatar> 
                                <Avatar alt="Remy Sharp" src={img_01} /> 
                            </ListItemAvatar>
                            <ListItemText> 
                                a może obrót 180stopni podczas jazdy
                            </ListItemText>
                        </ListItem>
                        <Divider variant="inset" component="li" />

                        <ListItem alignItems="flex-start">
                            <ListItemAvatar> 
                                <Avatar alt="Remy Sharp" src={img_01} /> 
                            </ListItemAvatar>
                            <ListItemText> 
                                spróbujmy slalomu między kubeczkami
                            </ListItemText>
                        </ListItem>
                        <Divider variant="inset" component="li" />

                    </List>
                    
                </CardContent>
            </Card>


        </Container>


                {/* Zastanawiasz sie: "Jak oni to robią?"
                Myślisz sobie: "To nie dla mnie, ja zaraz zaliczę glebę i stłucze tyłek". 
                A może zastanawiasz się, kto nauczy jeździć Twoje dzieci?

                Lepiej trafić się nie da. Moim celem jest promowanie rolkarstwa i zdrowego stylu życia. 
                Sam zaczynałem swoją przygodę z rolkami w wieku 27 lat pod okiem instruktora. 
                Wcześniejsze próby samodzielnej jazdy kończyły się 
                niepowodzeniami.
                Zainwestowałem wiele czasu oraz pieniędzy, aby zrobić kurs instruktora rolkarstwa i uczyć profesjonalnie. */}

                {/* Jestem chętny do pomocy i pokierowania Ciebie w tych najtrudniejszych pierwszych krokach.
                Pokieruję Cię, jak rozpocząć rolkową przygodę, aby spełnić podstawowe kryteria:

                - jak zachować podstawowe zasady bezpieczeństwa
                - jak jest prawidłowa pozycja
                - jak nie upaść
                - jak upadać prawidłowo 
                - jak zrobić pierwszy krok
                - jak chodzić na rolkach
                - jak zacząć jeździć 
                - jak hamować
                - jak skręcać

                Niepodważalny warunek jaki wymagam: musisz mieć zapięty kask podczas nauki jazdy. 


                A może już jeździsz, ale chcesz czegoś więcej? Proszę bardzo:
                - jak jeździć tyłem
                - jak zrobić przeplatankę (przodem i tyłem) 
                - jak wykonać skok 
                - a może obrót 180stopni podczas jazdy
                - spróbujmy slalomu między kubeczkami */}


        
            {/* <img 
               
                src={img_01}
                style={{
                    width: '50px',
                }}
                alt=""
            /> */}
        </>
      );
 }


 


export default NaukaPage;