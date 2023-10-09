import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

function MapSection({lat, lon}) {

    const position = [lat, lon];

  return (
    <div id="map">
      <MapContainer center={position} zoom={13} style={{ height: '300px', width: '1000px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      <Marker position={position} />
      </MapContainer>
    </div>
  )
}

export default MapSection;
