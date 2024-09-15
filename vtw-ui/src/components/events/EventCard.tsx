// EventCard.tsx
import { useState } from 'react';
import EventItem from './EventItem';
import CloseCircleIcon from '../icons/CloseCircleIcon';

const EventCard = ({ events, onClose }) => {
  const [expandedEvents, setExpandedEvents] = useState({});

  const toggleExpand = (eventId) => {
    event.stopPropagation();
    setExpandedEvents((prev) => ({
      ...prev,
      [eventId]: !prev[eventId],
    }));
  };

  return (
    <div className="p-4 bg-yellow-200 rounded-lg shadow-lg max-w-xs text-black relative">
      <div className="absolute top-2 right-2 w-full flex justify-end">
        <div className="cursor-pointer" onClick={onClose}>
          <CloseCircleIcon iconClass="w-5 h-5" />
        </div>
      </div>

      <div className="max-w-xs max-h-64 overflow-y-auto pr-2">
        {events.map((event) => (
          <EventItem event={event} expandedEvents={expandedEvents} toggleExpand={toggleExpand} />
        ))}
      </div>
    </div>
  );
};

export default EventCard;
