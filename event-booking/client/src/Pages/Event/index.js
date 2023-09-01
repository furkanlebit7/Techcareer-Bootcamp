import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEventByUrl } from "../../Redux/Slices/EventSlice";
import { fetchEventByUrl } from "../../Redux/Services/EventService";
import BreadCrumb from "../../Components/BreadCrumb";
import Loading from "../../Components/Loading";
import { BsFillShareFill } from "react-icons/bs";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import EventDetailTabs from "../../Components/EventDetailTabs";
import Footer from "../../Layouts/Footer";

const Event = () => {
  const dispatch = useDispatch();
  const { eventUrl } = useParams();

  const [scrolled, setScrolled] = useState(false);

  const event = useSelector(getEventByUrl);

  useEffect(() => {
    dispatch(fetchEventByUrl(eventUrl));
  }, []);

  return (
    <div>
      <div className="mb-16">
        <div className="bg-[url('https://www.headlinesecurity.com/wp-content/uploads/2016/04/metallicaconcertbanner-1.jpg')] h-[45vh]  bg-cover  ">
          <div className="bg-black bg-opacity-70 h-full text-black dark:text-white text-center ">
            <div className="flex flex-col items-center h-full">
              <Navbar scrolled={scrolled} setScrolled={setScrolled} />
              <div
                className={`${
                  scrolled ? "mt-26" : "mt-10"
                } text-white  font-poppins container 2xl:w-2/3 mx-auto text-start`}
              >
                <h1 className=" text-6xl uppercase font-semibold  mb-5">
                  {event.data.eventName}
                </h1>

                {event && event.data && event.data.eventType && (
                  <BreadCrumb
                    eventType={event.data.eventType.name}
                    eventName={event.data.eventName}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container flex mx-auto 2xl:w-2/3 -mt-28 gap-20">
          <div className="w-8/12 flex flex-col gap-10">
            <div className=" bg-white dark:bg-darkContent p-8 rounded-md">
              {event.status === "succeeded" ? (
                <div className="h-[50vh]">
                  <img
                    loading="lazy"
                    alt="banner"
                    className="w-full h-full object-cover rounded-t-md"
                    src={event.data.eventSmallPicture}
                  />
                </div>
              ) : (
                <Loading />
              )}
              <div className="mt-10 pb-10 border-b">
                <p className="font-poppins text-sm text-gray-500 mb-2 dark:text-gray-300 text-justify">
                  {event.data.eventShortDescription}
                </p>
                <p className="font-poppins text-sm text-gray-500 dark:text-gray-300 text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque harum distinctio vel, error at optio quidem molestiae
                  molestias! Saepe, porro quae. In ut consequuntur recusandae
                  deserunt beatae distinctio necessitatibus, eveniet, corporis
                  ea dolorum rerum odit ipsum a velit iusto, cum accusamus! Eos
                  expedita aut et ab autem aspernatur, quam ratione aliquid
                  adipisci. Libero, vitae ullam! Cupiditate omnis temporibus quo
                  libero fuga illo, numquam animi doloremque veniam quam
                  similique saepe repudiandae perspiciatis ipsa consectetur
                  eligendi praesentium placeat neque! Quae repellat, provident
                  nisi accusantium id a odio quo. Quod, nihil. Mollitia iste
                  repellendus neque dignissimos tempora ipsum officia
                  consequuntur ut accusantium illo!
                </p>
              </div>
              <div className="pt-8 font-semibold flex items-center justify-between gap-2">
                {event && event.data && event.data.eventType && (
                  <p className="text-pinky">{event.data.eventType.name}</p>
                )}
                <div className="flex items-center gap-4">
                  <BsFillShareFill className=" text-pinky" />
                  <span className="text-black dark:text-white">Share</span>
                  <div className="flex items-center gap-2 ml-5  text-gray-400 hover:cursor-pointer">
                    <GrFacebookOption className="hover:text-pinky" />
                    <GrTwitter className="hover:text-pinky" />
                    <FaWhatsapp className="hover:text-pinky" />
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-[50vh] bg-white dark:bg-darkContent rounded-md">
              <EventDetailTabs />
            </div>
          </div>
          <div className="w-4/12 px-8">
            <div>
              <button className="bg-pinky hover:bg-pink-700 w-full p-6 rounded-md text-xl  text-white">
                ŞİMDİ BİLET AL
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Event;
