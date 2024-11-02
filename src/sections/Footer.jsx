import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <>
      <div className="bg-secondary text-white flex justify-center items-center gap-2 p-3">
        {" "}
        <p className="text-[12px] text-center">
          Copyright 2024, Prime Construction, All Rights Reserved
        </p>
      </div>

      {/* scroll to top button */}
      <div
        id="icon-box"
        className="bg-yellow-500 text-secobg-secondary p-3 rounded-full hover:bg-secondary hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-6" />
        </Link>
      </div>
    </>
  );
}
