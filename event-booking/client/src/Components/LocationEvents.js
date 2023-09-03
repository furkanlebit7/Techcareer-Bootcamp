import React, { useState } from "react";
import EventCard from "./EventCard";
import OtherEventsCard from "./LocationDetail/OtherEventsCard";
import EventNotFound from "./EventNotFound";

const LocationEvents = ({ location }) => {
  return (
    <div className="min-h-[50vh] bg-white dark:bg-darkContent rounded-md">
      <p className="border-b pb-5 font-medium text-lg p-8 text-center text-pinky">
        İlgilenebileceğiniz Etkinlikler
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-8 gap-y-8 gap-x-4">
        {location.data.events.map((event) => (
          <OtherEventsCard event={event} key={event.id} />
        ))}
      </div>
      {location.data.events.length === 0 && <EventNotFound />}
    </div>
  );
};

export default LocationEvents;
