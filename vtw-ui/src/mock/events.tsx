// Updated mockEvents with random data for tokens, locationName, date/time, links, and descriptions
export const mockEvents = [
  {
    id: 1,
    name: 'Tech Conference',
    category: 'TRENDING',
    coordinates: [-123.1167, 49.2827],
    tokens: 30,
    locationName: '555 W Hastings St',
    date: 'September 12, 10am - 4pm PDT',
    link: 'https://lu.ma/18oy3fky?tk=vg0G4D',
    description:
      'Join the Tech Conference to explore the latest trends and technologies in the industry. Network with top professionals and learn from experts in the field.',
  },
  {
    id: 2,
    name: 'VTW Mini Hackathon',
    category: 'DEV',
    coordinates: [-123.1300, 49.2900],
    tokens: 50,
    locationName: '550 W Hastings St',
    date: 'September 14, 9am - 9pm PDT',
    link: 'https://lu.ma/6d7a9fey',
    description:
      'The goal of the VTW Mini Hackathon is to ignite collaboration and innovation among tech enthusiasts. Participants will build and refine their ideas into viable prototypes by the end of the day, guided by industry experts.',
  },
  {
    id: 3,
    name: 'Fireside Chat',
    category: 'DEV',
    coordinates: [-123.1300, 49.2900],
    tokens: 20,
    locationName: '550 W Hastings St',
    date: 'September 15, 9am - 11am PDT',
    link: 'https://www.eventbrite.com/e/vancouver-tech-finance-networking-event-tickets-1000346692887',
    description:
      'Engage in a candid conversation with industry leaders at our Fireside Chat. Learn about their journeys, challenges, and the insights they’ve gained along the way.',
  },
  {
    id: 4,
    name: 'VTW Logoff Party',
    category: 'DEV',
    coordinates: [-123.1300, 49.2900],
    tokens: 40,
    locationName: '550 W Hastings St',
    date: 'September 16, 6pm - 9pm PDT',
    link: 'https://lu.ma/18oy3fky?tk=vg0G4D',
    description:
      'Wrap up the VTW experience at the Logoff Party! Enjoy an evening of networking, celebration, and reflection on all the amazing projects created during the week.',
  },
  {
    id: 5,
    name: 'Product Showcase',
    category: 'PRODUCT',
    coordinates: [-123.0220, 49.2767],
    tokens: 25,
    locationName: '600 Granville St',
    date: 'September 13, 1pm - 3pm PDT',
    link: 'https://lu.ma/6d7a9fey',
    description:
      'Explore the latest innovations in product design and development at our Product Showcase. See demos, meet the creators, and get inspired by cutting-edge solutions.',
  },
  {
    id: 6,
    name: 'Design Workshop',
    category: 'DESIGN',
    coordinates: [-123.1404, 49.2764],
    tokens: 35,
    locationName: '700 Robson St',
    date: 'September 14, 2pm - 5pm PDT',
    link: 'https://www.eventbrite.com/e/vancouver-tech-finance-networking-event-tickets-1000346692887',
    description:
      'Join our Design Workshop to learn the latest techniques and tools in the world of design. Collaborate with other creatives and refine your skills.',
  },
  {
    id: 7,
    name: 'Mentorship Session',
    category: 'MENTORSHIP',
    coordinates: [-123.1300, 49.2764],
    tokens: 15,
    locationName: '650 Georgia St',
    date: 'September 15, 11am - 1pm PDT',
    link: 'https://lu.ma/18oy3fky?tk=vg0G4D',
    description:
      'Connect with industry mentors and get personalized advice during our Mentorship Session. Perfect for those looking to advance their careers or explore new opportunities.',
  },
];
  
export const mockEventCategories = {
  TRENDING: { color: '#FF5733', name: 'Trending' },
  DEV: { color: '#bfadf4', name: 'Dev' },
  MENTORSHIP: { color: '#33FF57', name: 'Mentorship' },
  PRODUCT: { color: '#afbeff', name: 'Product' },
  DESIGN: { color: '#ff9cf5', name: 'Design' }
};