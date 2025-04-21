import {
  ClipboardPlus,
  Cross,
  File,
  FileText,
  Paperclip,
  SendHorizontal,
  Settings,
  UserRound,
} from "lucide-react";
import React from "react";
// import { Smiley, Heart, Horse } from "@phosphor-icons/react";
import { HandWaving } from "@phosphor-icons/react/dist/ssr";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import QuickAction from "@/components/chat/QuickAction";
import Header from "@/components/chat/Header";
import ChatContainer from "@/components/chat/ChatContainer";

const page = () => {
  return (
    <div
      id="main-container"
      className="flex flex-col w-full min-h-screen bg-gradient-to-b from-[#F9F9F9] to-[#FFE9F5] p-5 sm:p-9 relative items-center"
    >
      <Header />
      <section className="flex flex-col justify-between h-full items-center mt-20 sm:mt-30 flex-grow gap-5 sm:gap-0">
        <section
          id="welcome-message"
          className="flex flex-col items-center gap-4"
        >
          <span className="bg-foreground size-16 flex items-center justify-center rounded-2xl p-2 text-white shadow-lg">
            <HandWaving fill="white" className="size-10 -scale-x-100" />
          </span>
          <div className="flex flex-col items-center gap-1 text-center">
            <h2 className="font-normal text-lg sm:text-2xl">
              Hi, Student Nurse
            </h2>
            <h2 className="font-extrabold text-lg sm:text-2xl">
              Can I help you with anything?
            </h2>
            <p className="font-light line-clamp-3 sm:line-clamp-2 max-w-md text-xs sm:text-sm">
              Ready to assist you with anything student nurse-stuff related —
              assignments, duties, or reflections. Let’s get started!
            </p>
          </div>
        </section>
        <ChatContainer />
      </section>
    </div>
  );
};

export default page;
