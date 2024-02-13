import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="bg-red-500">{text}</div>;

const MapGoogle = () => {
    const defaultProps = {
        center: {
            lat: 36.5752009,
            lng: 29.1466705
        },
        zoom: 20
    };
    return (
        <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBOdx7yzAxVpDLemp6-B8FVeXJSV93tahI" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={36.5752009}
                    lng={29.1466705}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
};

export default MapGoogle;