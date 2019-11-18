import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import { makeStyles } from '@material-ui/core';
import Geocode from 'react-geocode';

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey('AIzaSyCBcG1RMjvPv1-LBV99hXWjTVF0FoVhMDQ');

// set response language. Defaults to english.
Geocode.setLanguage('en');

function getAddress({ lat, lng }) {
  return Geocode.fromLatLng(lat, lng).then(
    (response) => response.results[0].formatted_address,
  );
}

function getCoords(address) {
  return Geocode.fromAddress(address).then(
    (response) => response.results[0].geometry.location,
  );
}

const useStyles = makeStyles({
  root: {
    width: '600px',
    height: '342px',
  },
});


const WithoutMarkerMap = withGoogleMap(({
  marker = <Marker position={{ lat: 50.4287031, lng: 30.5911917 }} />,
  mapRef,
  ...props
}) => (
  <GoogleMap
    ref={mapRef}
    defaultZoom={16}
    defaultOptions={{
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
    }}
    {...props}
  >
    {marker}
  </GoogleMap>
));

// https://spectrum.chat/react-google-maps/general/how-can-i-get-the-center-of-the-map-when-oncenterchanged~1af7d6d5-2774-4686-9f20-1a22f3ed2cf3
export function Map(props) {
  const classes = useStyles(props);
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: 50.4287031, lng: 30.5911917 });
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    if (props.address) {
      getCoords(props.address).then((coords) => setCenter(coords));
    }

    setMounted(true);
    return () => setMounted(false);
  }, [props.address]);

  return (
    <WithoutMarkerMap
      containerElement={<div className={classNames(classes.root, props.className)} />}
      mapElement={<div className={classNames(props.mapElementClass)} style={{ height: '100%' }} />}
      onCenterChanged={() => isMounted && map && setCenter(map.getCenter().toJSON())}
      onDragEnd={() => {
        if (isMounted && props.onChange) {
          getAddress(center).then((value) => props.onChange({ target: { type: 'text', value } }));
        }
      }}
      mapRef={(mapRef) => setMap(mapRef)}
      defaultCenter={center}
      center={center}
      {...props}
    />
  );
}
