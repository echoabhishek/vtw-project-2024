// EventCard.tsx
const EventCard = ({ event, onClose }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold">{event.name}</h3>
      <p className="text-sm text-gray-500">Category: {event.category}</p>
      <p className="text-sm text-gray-500">Location: {event.coordinates.join(', ')}</p>
      <button
        onClick={() => {/* Navigate to event page or handle button click */}}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
      >
        View Details
      </button>
      <button
        onClick={onClose}
        className="text-red-500 font-bold mt-2"
      >
        Close
      </button>
    </div>
  );
};

export default EventCard;
