import React, { useMemo, useState, useEffect, useRef } from 'react';
import { GoogleMap, useJsApiLoader, StandaloneSearchBox, MarkerF, Circle } from '@react-google-maps/api';
import { useDispatch } from 'react-redux';
import { searchPlace } from '../redux/actions/placesAction';

const containerStyle = {
    width: '100%',
    height: '450px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
}

const textFieldStyle = {
    position: 'absolute',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '300px',
    padding: '12px 16px',
    borderRadius: '25px',
    border: '1px solid transparent',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(8px)',
    fontSize: '16px',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-in-out',
}

const libraries = ["places"];

const Map = ({ radius, style, address, setAddress, latitude, setLatitude, longitude, setLongitude}) => {
    const [map, setMap] = useState(null);
    const dispatch = useDispatch();

    const center = useMemo(() => ({ lat: latitude, lng: longitude }), [latitude, longitude]);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    
    const changeCoordinate = (coord, index) => {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();
        setLatitude(lat);
        setLongitude(lng);
    }

    useEffect(() => {
        map?.panTo({lat: latitude, lng: longitude});
    }, [map, latitude, longitude]);

    const inputRef = useRef();

    const onLoad = (ref) => {
        inputRef.current = ref;
    };

    const handlePlaceChanged = () => {
        const places = inputRef.current.getPlaces();
        if (places && places.length > 0) {
            const place = places[0];

            if (place.geometry && place.geometry.location) {
                const lat = place.geometry.location.lat();
                const lng = place.geometry.location.lng()
                setAddress(place.formatted_address);
                setLatitude(lat);
                setLongitude(lng);
                dispatch(searchPlace(place.formatted_address));

                if (map) {
                    map.panTo({ lat, lng });
                    map.setZoom(15);
                }
            } else {
                console.warn("Place has no geometry");
            }
        }
    };

    if (!isLoaded) return <div>Loading Maps...</div>;

    return (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center} 
                zoom={10} 
                onLoad={(map) => setMap(map)}
            >
                <StandaloneSearchBox
                    onLoad={onLoad}
                    onPlacesChanged={handlePlaceChanged}
                >
                    <input
                        type="text"
                        placeholder="Search location..."
                        style={textFieldStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#1976d2")}
                        onBlur={(e) => (e.target.style.borderColor = "transparent")}
                    />
                </StandaloneSearchBox>
                <MarkerF
                    draggable
                    onDragEnd={changeCoordinate}
                    position={{ lat: latitude, lng: longitude}}  
                    options={{ animation: window.google.maps.Animation.DROP }} 
                />
                <Circle 
                    options={{
                        fillColor: '#EC2227',
                        strokeOpacity: 0.6,
                        strokeColor: '#EC2227',
                        strokeWeight: 1.5,
                        fillOpacity: 0.2,
                    }}
                />
            </GoogleMap>
        </div>
    )
};

export default Map;

