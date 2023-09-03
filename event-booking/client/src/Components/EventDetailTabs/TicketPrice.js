import React from "react";

const TicketPrice = ({ event }) => {
  if (event.data.eventPrice === 0) {
    return (
      <div className="p-4 mb-4  rounded-lg bg-whiteMain dark:bg-darkMain text-sm sm:text-base">
        Bu etkinlik{" "}
        <span className="text-sm sm:text-base underline mr-2">
          ücretsizdir.
        </span>
      </div>
    );
  }
  if (event.data.eventPrice !== 0 && event.data?.eventPrice?.includes("-")) {
    return (
      <div className="p-4 mb-4  rounded-lg bg-whiteMain dark:bg-darkMain text-sm sm:text-base">
        <span className="text-lg sm:text-xl underline mr-2">
          {event.data.eventPrice}
        </span>
        arasında değişen fiyatlarla satışa sunulmuştur.
      </div>
    );
  }
  return (
    <div className="p-4 mb-4  rounded-lg bg-whiteMain dark:bg-darkMain text-sm sm:text-base">
      <span className="text-lg sm:text-xl underline mr-2">
        {event.data.eventPrice}
      </span>
      fiyatla satışa sunulmuştur.
    </div>
  );
};

export default TicketPrice;
