import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Props {
  position: LatLngExpression;
}

const MapView = ({ position }: Props) => {
  return (
    <div className="map">
      <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>IP Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
