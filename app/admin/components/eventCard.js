import React, { useState } from 'react';

const EventCard = ({ event, onUpdate, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedEvent, setUpdatedEvent] = useState({ ...event });

  const toggleEditMode = () => {
    setEditMode((prevEditMode) => !prevEditMode);
    setUpdatedEvent({ ...event }); // Reset updatedEvent state when toggling edit mode
  };

  const handleUpdate = () => {
    onUpdate(updatedEvent);
    setEditMode(false);
  };

  const {
    name,
    societyName,
    location,
    description,
    date,
    teamSizeMIN,
    teamSizeMax,
    prize,
    venue,
    registrationEndDate,
    image,
    type
  } = event;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 mx-4">
      <div className="flex-col items-center justify-between">
        {image && (
          <div className="w-full mr-6 mb-4">
            <img src={image} alt={name} className="w-full rounded-md" />
          </div>
        )}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-gray-600">{societyName}</p>
          {editMode ? (
            <textarea
              className="text-gray-700 mt-2 border rounded-md p-2 w-full"
              value={updatedEvent.description}
              onChange={(e) => setUpdatedEvent({ ...updatedEvent, description: e.target.value })}
            />
          ) : (
            <p className="text-gray-700 mt-2">{description}</p>
          )}
          <div className="flex justify-between mt-4">
            {editMode ? (
              <input
                type="date"
                className="text-gray-700 border rounded-md p-2"
                value={updatedEvent.date}
                onChange={(e) => setUpdatedEvent({ ...updatedEvent, date: e.target.value })}
              />
            ) : (
              <p className="text-gray-700">Date: {new Date(date).toLocaleDateString()}</p>
            )}
            {editMode ? (
              <input
                type="date"
                className="text-gray-700 border rounded-md p-2"
                value={updatedEvent.registrationEndDate}
                onChange={(e) => setUpdatedEvent({ ...updatedEvent, registrationEndDate: e.target.value })}
              />
            ) : (
              <p className="text-gray-700">
                Registration End: {new Date(registrationEndDate).toLocaleDateString()}
              </p>
            )}
          </div>
          <p className="mt-4 text-gray-700">
            Type: {type}
          </p>
          <p className="mt-4 text-gray-700">
            Team Size: {editMode ? (
              <>
                <input
                  type="number"
                  className="text-gray-700 border rounded-md p-2 w-16"
                  value={updatedEvent.teamSizeMIN}
                  onChange={(e) => setUpdatedEvent({ ...updatedEvent, teamSizeMIN: e.target.value })}
                />{' '}
                -{' '}
                <input
                  type="number"
                  className="text-gray-700 border rounded-md p-2 w-16"
                  value={updatedEvent.teamSizeMax}
                  onChange={(e) => setUpdatedEvent({ ...updatedEvent, teamSizeMax: e.target.value })}
                />
              </>
            ) : (
              `${teamSizeMIN} - ${teamSizeMax}`
            )}
          </p>
          <p className="text-gray-700 mt-4">Prize: {editMode ? (
              <input
                type="text"
                className="text-gray-700 border rounded-md p-2 w-full"
                value={updatedEvent.prize}
                onChange={(e) => setUpdatedEvent({ ...updatedEvent, prize: e.target.value })}
              />
            ) : (
              prize
            )}</p>
            <p className="text-gray-700 mt-4">Location: {editMode ? (
              <input
                type="text"
                className="text-gray-700 border rounded-md p-2 w-full"
                value={updatedEvent.location}
                onChange={(e) => setUpdatedEvent({ ...updatedEvent, location: e.target.value })}
              />
            ) : (
              location
            )}</p>
          <p className="text-gray-700 mt-4">Venue: {editMode ? (
              <input
                type="text"
                className="text-gray-700 border rounded-md p-2 w-full"
                value={updatedEvent.venue}
                onChange={(e) => setUpdatedEvent({ ...updatedEvent, venue: e.target.value })}
              />
            ) : (
              venue
            )}</p>
          <div className="mt-4 flex justify-end">
            {editMode ? (
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-300 mr-2"
                onClick={handleUpdate}
              >
                Save
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-300 mr-2"
                onClick={toggleEditMode}
              >
                Edit
              </button>
            )}
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300"
              onClick={() => onDelete(event._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
