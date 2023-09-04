import React from "react";

//Icons
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-indigo-900 text-whiteMain p-5 md:p-0">
      <div className="grid-cols-6 container  mx-auto md:grid flex flex-col gap-5 lg:gap-0 py-5 md:py-20">
        <div className="col-start-1 lg:col-end-3 col-end-4 flex flex-col gap-6">
          <p className="text-2xl ">
            <span className="font-bold text-3xl ">Event</span>
            ick
          </p>
          <p>
            Eventick is a global self-service ticketing platform for live
            experiences that allows anyone to create, share, find and attend
            events that fuel their passions and enrich their lives.
          </p>
          <div className="flex items-center gap-3 text-2xl">
            <BsFacebook />
            <AiFillTwitterCircle className="text-3xl" />
            <BsLinkedin />
          </div>
        </div>
        <div className="lg:col-start-3 col-start-5 lg:col-end-4 col-end-7 flex flex-col gap-6 justify-self-center">
          <h4 className="text-xl font-bold">Plan Events</h4>
          <ul className="flex flex-col gap-2 font-medium cursor-pointer">
            <li>Create and Set Up </li>
            <li>Sell Tickets</li>
            <li>Online RSVP</li>
            <li>Online Events</li>
          </ul>
        </div>
        <div className="lg:col-start-4 lg:col-end-5 col-start-1 col-end-3 flex flex-col gap-6 justify-self-center">
          <h4 className="text-xl font-bold">Eventick</h4>
          <ul className="flex flex-col gap-2 font-medium cursor-pointer">
            <li>About Us</li>
            <li>Press</li>
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>How it Works</li>
            <li>Privacy Terms</li>
          </ul>
        </div>
        <div className="lg:col-start-5 lg:col-end-7 col-start-3 col-end-7 flex flex-col gap-6 justify-self-center">
          <h4 className="text-xl font-bold">Stay in the loop</h4>
          <p>
            Join our mailing list to stay in the loop with our newest for Event
            and concert
          </p>
          <div className="bg-white rounded-full p-1 px-2 md:py-2 md:px-3 flex items-center">
            <input
              type="text"
              placeholder="Enter your email address.."
              className="border-none flex-1 text-black  focus:ring-0"
            />
            <button className="bg-pinky p-1 px-2 md:py-2 md:px-3 rounded-full inline text-xs xl:text-base">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
