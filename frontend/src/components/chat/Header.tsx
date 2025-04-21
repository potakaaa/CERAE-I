import { Cross, UserRound } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <section
      id="header"
      className="absolute inset-x-4 sm:inset-x-9 z-50 flex justify-between"
    >
      <div
        id="logo"
        className="flex justify-center items-center gap-2 sm:gap-3"
      >
        <span className="bg-foreground size-8 sm:size-10 flex items-center justify-center rounded-md sm:rounded-xl p-2 text-white shadow-lg">
          <Cross fill="white" className="size-4 sm:size-5" />
        </span>
        <h2 className="text-primary font-extrabold text-base sm:text-lg">
          CERAE-I
        </h2>
      </div>
      <div id="user" className="flex justify-center items-center">
        <span className="bg-foreground size-8 flex items-center justify-center rounded-full p-2 text-white shadow-lg">
          <UserRound className="size-4" />
        </span>
      </div>
    </section>
  );
};

export default Header;
