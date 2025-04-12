import { Cross, UserRound } from "lucide-react";
import React from "react";
// import { Smiley, Heart, Horse } from "@phosphor-icons/react";
import { HandWaving } from "@phosphor-icons/react/dist/ssr";

const page = () => {
  return (
    <div
      id="main-container"
      className="flex flex-col w-full min-h-screen bg-gradient-to-b from-[#F9F9F9] to-[#FFE9F5] p-9 relative items-center"
    >
      <section
        id="header"
        className="absolute inset-x-9 z-50 flex justify-between"
      >
        <div id="logo" className="flex justify-center items-center gap-3">
          <span className="bg-foreground size-10 flex items-center justify-center rounded-xl p-2 text-white shadow-lg">
            <Cross fill="white" className="size-5" />
          </span>
          <h2 className="text-primary font-extrabold text-lg">CERAE-I</h2>
        </div>
        <div id="user" className="flex justify-center items-center">
          <span className="bg-foreground size-8 flex items-center justify-center rounded-full p-2 text-white shadow-lg">
            <UserRound className="size-4" />
          </span>
        </div>
      </section>

      <section
        id="welcome-message"
        className="flex flex-col items-center gap-4 mt-30"
      >
        <span className="bg-foreground size-16 flex items-center justify-center rounded-2xl p-2 text-white shadow-lg">
          <HandWaving fill="white" className="size-10 -scale-x-100" />
        </span>
        <div className="flex flex-col items-center gap-1 text-center">
          <h2 className="font-normal text-2xl">Hi, Student Nurse</h2>
          <h2 className="font-extrabold text-2xl">
            Can I help you with anything?
          </h2>
          <p className="font-light line-clamp-2 max-w-md text-sm">
            Ready to assist you with anything student nurse-stuff related —
            assignments, duties, or reflections. Let’s get started!
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
