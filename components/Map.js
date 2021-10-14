import React,{useState} from 'react'
import ReactMapGL,{Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Map({searchResults}) {

    const [selectedLocation, setSelectedLocation] = useState({})
    // Transform search results object into one that works with geolib

    const coordinates = searchResults.map((result)=>(
        {
            longitude: result.long,
            latitude: result.lat
        }
    ))

    // The latitude and longitude of the center of locations coordinates

    const center = getCenter(coordinates);
        

    
    const [viewport, setViewport] = useState({
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 8,
    })
    return (
        <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/diegodjty/ckumwt34p4txh17phpjuvdcua"
            mapboxApiAccessToken={process.env.mapbox_key}
            width="100%"
            height="100%"
            onViewportChange={(nextViewport) => setViewport(nextViewport)}

        >
            {searchResults.map((result)=>(
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetLeft={-10}
                    >
                        <p  
                            onClick = {() => setSelectedLocation(result)}
                            aria-label="push-pin"
                            role="img"
                            className='cursor-pointer text-2xl animate-bounce'>
                        📌
                        </p>
                    </Marker>
                    {selectedLocation.long === result.long ? (
                        <Popup 
                            onClose={()=> selectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            {result.title}
                        </Popup>                         
                    ):(false)}
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map
