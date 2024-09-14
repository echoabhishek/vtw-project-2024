import React from 'react';
import { useParams } from 'react-router-dom';

const EventPage = () => {
  const { id } = useParams();

  // In a real application, you would fetch the event data based on the ID
  const event = {
    id,
    name: 'Sample Event',
    image: 'https://via.placeholder.com/400x200',
    description: 'This is a sample event description. It would contain details about the event, its purpose, and what attendees can expect.',
    registrationLink: 'https://example.com/register'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
      <img src={event.image} alt={event.name} className="w-full max-w-2xl mb-4 rounded-lg shadow-lg" />
      <p className="mb-4">{event.description}</p>
      <a 
        href={event.registrationLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Register for Event
      </a>
    </div>
  );
};

export default EventPage;
