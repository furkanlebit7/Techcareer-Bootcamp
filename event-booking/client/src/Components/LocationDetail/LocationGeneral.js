import React from "react";
import Loading from "../Loading";
import { BsFillShareFill } from "react-icons/bs";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import LocationImageSlider from "./LocationImageSlider";

const LocationGeneral = ({ location }) => {
  return (
    <div className=" bg-white dark:bg-darkContent p-4 sm:p-8 rounded-md">
      {location.status === "succeeded" ? (
        <div className="h-[50vh]">
          <LocationImageSlider location={location} />
        </div>
      ) : (
        <Loading />
      )}
      <div className="mt-10 pb-10 border-b">
        <p className="font-poppins text-sm text-gray-500 mb-2 dark:text-gray-300 text-justify">
          {location.data.address}
        </p>
        <p className="font-poppins text-sm text-gray-500 dark:text-gray-300 text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque harum
          distinctio vel, error at optio quidem molestiae molestias! Saepe,
          porro quae. In ut consequuntur recusandae deserunt beatae distinctio
          necessitatibus, eveniet, corporis ea dolorum rerum odit ipsum a velit
          iusto, cum accusamus! Eos expedita aut et ab autem aspernatur, quam
          ratione aliquid adipisci. Libero, vitae ullam! Cupiditate omnis
          temporibus quo libero fuga illo, numquam animi doloremque veniam quam
          similique saepe repudiandae perspiciatis ipsa consectetur eligendi
          praesentium placeat neque! Quae repellat, provident nisi accusantium
          id a odio quo. Quod, nihil. Mollitia iste repellendus neque
          dignissimos tempora ipsum officia consequuntur ut accusantium illo!
        </p>
      </div>
      <div className="pt-8 font-semibold flex items-center justify-between gap-2">
        {location && location.data && (
          <p className="text-pinky">
            {location.data.state + " / " + location.data.city}
          </p>
        )}
        <div className="flex items-center gap-4">
          <BsFillShareFill className=" text-pinky" />
          <span className="text-black dark:text-white">Share</span>
          <div className="flex items-center gap-2 ml-5  text-gray-400 hover:cursor-pointer">
            <GrFacebookOption
              className="hover:text-pinky"
              onClick={() => {
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
                  "_blank"
                );
              }}
            />
            <GrTwitter
              className="hover:text-pinky"
              onClick={() => {
                window.open(
                  `https://twitter.com/intent/tweet?url=${window.location.href}`,
                  "_blank"
                );
              }}
            />
            <FaWhatsapp
              className="hover:text-pinky"
              onClick={() => {
                window.open(
                  `https://api.whatsapp.com/send?&text=${window.location.href}`,
                  "_blank"
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationGeneral;
