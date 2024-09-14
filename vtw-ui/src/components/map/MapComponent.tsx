import React, { useState } from 'react';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Filters from '../filters/Filters';

// Replace with your actual Mapbox access token
// const MAPBOX_ACCESS_TOKEN = 'sk.eyJ1IjoibmFtLW0iLCJhIjoiY20xMmlqNzNkMGNrdzJqb2ppZHB5bTM4dyJ9.QnNEk2Fgb14CG9sIelji7A';
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibmFtLW0iLCJhIjoiY20xMmllc3Z6MGQ3czJrcG14a3Z4dzdmeCJ9._RqdUZgr1-9VteLVKNBftA';

// Vancouver coordinates
const VANCOUVER_CENTER = [-123.1207, 49.2827];
const VANCOUVER_BOUNDS = [
  [-123.2339, 49.1974], // Southwest coordinates
  [-122.9981, 49.3168]  // Northeast coordinates
];

const eventCategories = {
  TRENDING: { color: '#FF5733', name: 'Trending' },
  DEV: { color: '#bfadf4', name: 'Dev' },
  MENTORSHIP: { color: '#33FF57', name: 'Mentorship' },
  PRODUCT: { color: '#afbeff', name: 'Product' },
  DESIGN: { color: '#ff9cf5', name: 'Design' }
};

const events = [
  { id: 1, name: 'Tech Conference', category: 'TRENDING', coordinates: [-123.1167, 49.2827] },
  { id: 2, name: 'Dev', category: 'DEV', coordinates: [-123.1300, 49.2900] },
  { id: 3, name: 'Product', category: 'PRODUCT', coordinates: [-123.0220, 49.2767] },
  { id: 4, name: 'Design', category: 'DESIGN', coordinates: [-123.1404, 49.2764] },
  { id: 5, name: 'Mentor', category: 'MENTORSHIP', coordinates: [-123.1300, 49.2764] },
];

const MapComponent = () => {
  const [popupInfo, setPopupInfo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredEvents = selectedCategory
    ? events.filter(event => event.category === selectedCategory)
    : events;

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
        {filteredEvents.map((event) => (
          <Marker
            key={event.id}
            longitude={event.coordinates[0]}
            latitude={event.coordinates[1]}
            color={eventCategories[event.category].color}
            onClick={e => {
              e.originalEvent.stopPropagation();
              setPopupInfo(event);
            }}
          />
        ))}
        {popupInfo && (
          <Popup
            longitude={popupInfo.coordinates[0]}
            latitude={popupInfo.coordinates[1]}
            anchor="bottom"
            onClose={() => setPopupInfo(null)}
          >
            <div>
              <h3>{popupInfo.name}</h3>
              <p>Category: {eventCategories[popupInfo.category].name}</p>
              <button 
                onClick={() => {/* Navigate to event page */}}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              >
                View Details
              </button>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default MapComponent;