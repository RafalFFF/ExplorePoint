
import React, { useEffect, useState } from 'react';
import './map.scss'
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const  Map=()=> {

    const [isSiteLoaded, setIsSiteLoaded] = useState(false);

    useEffect(()=>{
        setIsSiteLoaded(true);
    },[]);

    const mapContainerStyle = {
        height: '100%',
        width: '100%',
      };
    
      const center = {
        lat: 50.034313, 
        lng: 21.964741,
    };

    return(
        <div className="map">
            <LoadScript googleMapsApiKey="AIzaSyATQXw6qKOPXx9d_rY3v2lVVKQCQgtmftM">
                <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
                options={{
                    zoomControl: false,
                    mapTypeControl: true,
                    // mapTypeControlOptions: {
                    //     style: window.google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                    //     backgroundColor: 'rgba(46, 39, 245, 0.8)', 
                    // },
                    streetViewControl: true, 
                    fullscreenControl: false, 
                  }}
                >
                {/* Dodaj inne elementy na mapie, jeśli są potrzebne */}
                </GoogleMap>
            </LoadScript>
        </div>
    )
}


export default Map;