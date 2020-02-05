import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';

const permission = true;

const AdminPage = () => {
    return ( 
        <Route render={() => (
            permission ? (<AdminPageSorce />) : (
                <Redirect to="/login" />
            )
        )}/>
     );
}



class AdminPageSorce extends Component {
    state = { 
        windowSizeW: window.innerWidth,
        windowSizeH: window.innerHeight,
    }

    componentDidMount() {
        window.addEventListener('resize', () => (  
            this.setState( {windowSizeW: window.innerWidth, windowSizeH: window.innerHeight} )   
        ));
    }

    componentWillUnmount()  {
        window.addEventListener('resize', {} );
    }


    render() { 

        return ( 
            <>
                <h3>Panel admina - dzień dobry</h3>
                <br/> Szerokość ekranu: {this.state.windowSizeW}
                <br/> Wysokośc ekranu:  {this.state.windowSizeH}
            </>
        );
    }
}
 




export default AdminPage;