// EventsList.tsx
import { Marker } from 'react-map-gl';
import { mockEventCategories } from '../../mock/events';

const EventsList = ({ setPopupInfo, filteredEvents }) => {
  return (
    <>
      {filteredEvents.map((event) => (
        <Marker
          key={event.id}
          longitude={event.coordinates[0]}
          latitude={event.coordinates[1]}
          color={mockEventCategories[event.category].color}
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(event);
          }}
        />
      ))}
    </>
  );
};

export default EventsList;
