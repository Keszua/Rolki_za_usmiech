//import React, { Component } from 'react';
import React  from 'react';
//import GoogleMapReact from 'google-map-react';

//Coś o mapie: https://www.w3schools.com/graphics/google_maps_intro.asp

//skorzystałem z: https://www.npmjs.com/package/google-map-react
// i film: https://www.youtube.com/watch?v=rWiYi9v8JFU
//Trzeba doinstalowąc: npm install --save google-map-react
//poczytac: https://npm.runkit.com/google-map-react

//aby zdobyć klucz, trzeba w przegladarkę wpisać: google developer console, wejść w "Google Cloud Platform"

//Jakaiś opis po polsku, jak wstawiać markery: https://grafmag.pl/artykuly/mapa-na-stronie-internetowej-przy-wykorzystaniu-google-maps-api

//const AnyReactComponent = ({ text }) => <div>{text}</div>;

//const config = require('../config/config.js');

 


// class SimpleMap extends Component {
//     static defaultProps = {
//       center: {
//         lat: 51.393928,
//         lng: 21.1460688,
//       },
//       zoom: 11
//     };
   
//     render() {
//       return (
//         // Important! Always set the container height explicitly
//         <div style={{ height: '100vh', width: '100%' }}>
//           <GoogleMapReact
//             bootstrapURLKeys={config.mapKey}
//             defaultCenter={this.props.center}
//             defaultZoom={this.props.zoom}
//           >
//             <AnyReactComponent
//               lat={51.393928}
//               lng={21.1460688}
//               text="My Marker"
//             />
//           </GoogleMapReact>
//         </div>
//       );
//     }
// }
   
  //export default SimpleMap;

const MapPage = () => {
    return ( 
        <>
          <div>Gra miejska</div>
            {/* <div><SimpleMap /></div> */}
            {/* <iframe src="https://www.google.com/maps" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe> */}
            {/* <div id="googleMap" style={{width:'100%', height:'400px'}}></div> */}
            
        </>
     );
}
 

export default MapPage;