import React, { useState } from 'react';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Filters from '../filters/Filters';
import EventCard from '../events/EventCard';
import { mockEventCategories, mockEvents } from '../../mock/events';
import EventsList from '../events/EventsList';

// Replace with your actual Mapbox access token
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibmFtLW0iLCJhIjoiY20xMmllc3Z6MGQ3czJrcG14a3Z4dzdmeCJ9._RqdUZgr1-9VteLVKNBftA';

// Vancouver coordinates
const VANCOUVER_CENTER = [-123.1207, 49.2827];
const VANCOUVER_BOUNDS = [
  [-123.2339, 49.1974], // Southwest coordinates
  [-122.9981, 49.3168]  // Northeast coordinates
];

const MapComponent = () => {
  const [popupInfo, setPopupInfo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredEvents = selectedCategory
    ? mockEvents.filter(event => event.category === selectedCategory)
    : mockEvents;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

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
            onClose={() => setPopupInfo(null)}
          >
            <EventCard event={popupInfo} onClose={() => setPopupInfo(null)} />
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default MapComponent;