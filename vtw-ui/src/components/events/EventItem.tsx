// EventItem.tsx
import { FiMapPin, FiCalendar } from 'react-icons/fi';
import TokenIcon from '../icons/TokenIcon';
import CaretUpIcon from '../icons/CaretUpIcon';
import CaretDownIcon from '../icons/CaretDownIcon';

const EventItem = ({ event, expandedEvents, toggleExpand }) => {
  return (
    <div
      key={event.id}
      className="mb-4 pb-4 border-b border-gray-300 last:border-b-0"
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={(e) => toggleExpand(event.id, e)}
      >
        <h3 className="text-lg font-bold">{event.name}</h3>
        <button className="text-black text-lg font-bold">
          {expandedEvents[event.id]
            ? <CaretUpIcon iconClass="w-4 h-4" />
            : <CaretDownIcon iconClass="w-4 h-4" />}
        </button>
      </div>

      <div className="mt-2 pr-2">
        <div className="flex items-center mb-1">
          <span className="flex items-center bg-white border border-yellow-500 text-yellow-600 rounded-full px-2 py-1 text-xs font-semibold">
            <TokenIcon iconClass="w-4 h-4 mr-2" />
            {event.tokens} tokens
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-700 mb-1">
          <FiMapPin className="mr-2 text-black" />
          {event.locationName}
        </div>
        <div className="flex items-center text-sm text-gray-700">
          <FiCalendar className="mr-2 text-black" />
          {event.date}
        </div>
        {/* Conditionally render event details based on expanded state */}
        {expandedEvents[event.id] && <>This is expanded view</>}
      </div>
    </div>
  )
}

export default EventItem;
