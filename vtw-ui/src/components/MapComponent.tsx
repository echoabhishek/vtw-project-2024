import React, { useState } from 'react';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Replace with your actual Mapbox access token
const MAPBOX_ACCESS_TOKEN = 'sk.eyJ1IjoibmFtLW0iLCJhIjoiY20xMmlqNzNkMGNrdzJqb2ppZHB5bTM4dyJ9.QnNEk2Fgb14CG9sIelji7A';

// Vancouver coordinates
const VANCOUVER_CENTER = [-123.1207, 49.2827];
const VANCOUVER_BOUNDS = [
  [-123.2339, 49.1974], // Southwest coordinates
  [-122.9981, 49.3168]  // Northeast coordinates
];

const eventCategories = {
  TECH: { color: '#FF5733', name: 'Tech' },
  MUSIC: { color: '#33FF57', name: 'Music' },
  SPORTS: { color: '#3357FF', name: 'Sports' },
  CULTURAL: { color: '#FF33F1', name: 'Cultural' }
};

const events = [
  { id: 1, name: 'Tech Conference', category: 'TECH', coordinates: [-123.1167, 49.2827] },
  { id: 2, name: 'Music Festival', category: 'MUSIC', coordinates: [-123.1300, 49.2900] },
  { id: 3, name: 'Soccer Match', category: 'SPORTS', coordinates: [-123.0220, 49.2767] },
  { id: 4, name: 'Art Exhibition', category: 'CULTURAL', coordinates: [-123.1404, 49.2764] },
];

const MapComponent = () => {
  const [popupInfo, setPopupInfo] = useState(null);

  return (
    <Map
      initialViewState={{
        longitude: VANCOUVER_CENTER[0],
        latitude: VANCOUVER_CENTER[1],
        zoom: 11
      }}
      style={{width: '100%', height: '100vh'}}
      mapStyle="mapbox://styles/mapbox/light-v11"
      mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
      maxBounds={VANCOUVER_BOUNDS}
    >
      <NavigationControl />
      
      {events.map((event) => (
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
  );
};

export default MapComponent;