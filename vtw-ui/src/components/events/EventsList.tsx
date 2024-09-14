// EventsList.tsx
import { Marker } from 'react-map-gl';
import { mockEventCategories, mockEvents } from '../../mock/events';

const EventsList = ({ setPopupInfo }) => {
  return (
    <>
      {mockEvents.map((event) => (
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
