import React from 'react';

const EventCard = ({ event }) => {
  const {
    name,
    societyName,
    description,
    date,
    teamSizeMIN,
    teamSizeMax,
    prize,
    venue,
    registrationEndDate,
  } = event;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{societyName}</p>
      <p className="text-gray-700 mt-2">{description}</p>
      <div className="flex justify-between mt-4">
        <p>Date: {new Date(date).toLocaleDateString()}</p>
        <p>Registration End: {new Date(registrationEndDate).toLocaleDateString()}</p>
      </div>
      <p className="mt-4">
        Team Size: {teamSizeMIN} - {teamSizeMax}
      </p>
      <p>Prize: {prize}</p>
      <p>Venue: {venue}</p>
    </div>
  );
};

export default EventCard;
