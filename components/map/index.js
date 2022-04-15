import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -2.90453,
  lng: -41.7523
};

function MyMap() {

  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  );
}

export default React.memo(MyMap)