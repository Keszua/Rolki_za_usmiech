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
        windowSize: window.innerWidth,
    }

    componentDidMount() {
        window.addEventListener('resize', () => (  this.setState( {windowSize: window.innerWidth} )   ));
    }

    componentWillUnmount()  {
        window.addEventListener('resize', {} );
    }


    render() { 

        return ( 
            <>
                <h3>Panel admina - dzień dobry</h3>
                Wielkość ekranu: {this.state.windowSize}
            </>
        );
    }
}
 




export default AdminPage;