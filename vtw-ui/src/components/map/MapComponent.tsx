import React, { useState } from 'react';
import Map, { Popup, NavigationControl, LngLatBoundsLike } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import EventCard from '../events/EventCard';
import { mockEvents } from '../../mock/events';
import EventsList from '../events/EventsList';

// Replace with your actual Mapbox access token
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibmFtLW0iLCJhIjoiY20xMmllc3Z6MGQ3czJrcG14a3Z4dzdmeCJ9._RqdUZgr1-9VteLVKNBftA';

// Vancouver coordinates
const VANCOUVER_CENTER = [-123.1207, 49.2827];
const VANCOUVER_BOUNDS: LngLatBoundsLike = [
  { lon: -123.2339, lat: 49.1974 }, // Southwest coordinates
  { lon: -122.9981, lat: 49.3168 }, // Northeast coordinates
];

interface MapComponentProps {
    selectedCategory: string;
  }

const MapComponent: React.FC<MapComponentProps> = ({selectedCategory}) => {
  const [popupInfo, setPopupInfo] = useState(null);

  const filteredEvents = selectedCategory
    ? mockEvents.filter(event => event.category === selectedCategory)
    : mockEvents;

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {/* <Filters onFilterChange={handleCategoryChange} /> */}
      <Map
        initialViewState={{
          longitude: VANCOUVER_CENTER[0],
          latitude: VANCOUVER_CENTER[1],
          zoom: 11
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        maxBounds={VANCOUVER_BOUNDS}
      >
        <NavigationControl />
        <EventsList filteredEvents={filteredEvents} setPopupInfo={setPopupInfo} />
        {popupInfo && (
          <Popup
            longitude={popupInfo.coordinates[0]}
            latitude={popupInfo.coordinates[1]}
            anchor="bottom"
            maxWidth="35vw"
            closeButton={false}
            onClose={() => setPopupInfo(null)}
          >
            <EventCard events={popupInfo.events} onClose={() => setPopupInfo(null)} />
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default MapComponent;