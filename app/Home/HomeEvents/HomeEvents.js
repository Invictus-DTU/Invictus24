import React from 'react'
import EventCard from "./HomeEventCard"

const HomeEvents = () => {
    const arr = [
        {
          title: "Title",
          date: "Date",
          prize: "Prize",
          time: "Time",
          Venue: "Venue",
        },
        {
          title: "Title",
          date: "Date",
          prize: "Prize",
          time: "Time",
          Venue: "Venue",
        },
        {
          title: "Title",
          date: "Date",
          time: "Time",
          Venue: "Venue",
          prize: "Prize",
        }]
  return (
    <div className='flex flex-col items-center sm:flex-row justify-evenly'>
        {arr.map((item)=> 
            <EventCard props={item} />
        )}
    </div>
  )
}

export default HomeEvents