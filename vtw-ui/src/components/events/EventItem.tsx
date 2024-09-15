// EventItem.tsx
import { FiMapPin, FiCalendar } from 'react-icons/fi';
import TokenIcon from '../icons/TokenIcon';
import CaretUpIcon from '../icons/CaretUpIcon';
import CaretDownIcon from '../icons/CaretDownIcon';
import LinkIcon from '../icons/LinkIcon';

const EventItem = ({ event, expandedEvents, toggleExpand }) => {
  const redirectToEventLink = (e) => {
    e.stopPropagation();
    console.log({ link: event.link, event })
    window.open(event.link, '_blank');
  }

  return (
    <div
      key={event.id}
      className="mb-4 pb-4 border-b border-gray-700 last:border-b-0"
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={(e) => toggleExpand(event.id, e)}
      >
        <div className="flex items-center">
          <h3 className="text-lg font-bold">{event.name}</h3>
          <div className="ml-2 cursor-pointer" onClick={redirectToEventLink}><LinkIcon iconClass="w-3 h-3" /></div>
        </div>
        <button className="text-black text-lg font-bold">
          {expandedEvents[event.id] ? (
            <CaretUpIcon iconClass="w-4 h-4" />
          ) : (
            <CaretDownIcon iconClass="w-4 h-4" />
          )}
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
        {expandedEvents[event.id] && (
          <div className="mt-2 border-t border-gray-400">
            <p className="text-sm text-gray-800 my-2">{event.description}</p>
            <button
              onClick={redirectToEventLink}
              className="w-full bg-white border border-black rounded-full py-2 text-center mb-2 hover:bg-gray-100">
              Sign up for quest
            </button>
            <button className="w-full bg-black text-white rounded-full py-2 text-center hover:bg-gray-800">
              Mark quest as completed
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventItem;
