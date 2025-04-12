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

      <section className="flex flex-col justify-between h-full items-center mt-30 flex-grow">
        <section
          id="welcome-message"
          className="flex flex-col items-center gap-4"
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
        <section id="chat-container" className="flex flex-col gap-20">
          <div
            id="quick-actions-container"
            className="flex flex-row gap-3 w-full items-center justify-center"
          >
            {" "}
            <QuickAction
              title="Make me a CERAE"
              description="Automatically generate your Clinical Experience, Reflection, and Evaluation Assignment."
              icon={<FileText className="size-6 text-white" />}
            />
            <QuickAction
              title="Weekly Evaluation"
              description="Let CERAE-I help you reflect — auto generate your weekly evaluation for yourself, your CI, staff, and patients."
              icon={<ClipboardPlus className="size-6 text-white" />}
            />
            <QuickAction
              title="Summarize My Duty"
              description="Get a quick reflection-style summary of what happened during your clinical rotation."
              icon={<File className="size-6 text-white" />}
            />
          </div>
          <div
            id="input-container"
            className="w-[700px] flex flex-row gap-3 items-center justify-center"
          >
            <Button className="bg-foreground size-10 flex items-center justify-center rounded-full p-2 text-white shadow-lg cursor-pointer hover:bg-foreground/80 transition-all duration-200 ease-in-out">
              <Settings className="size-5" />
            </Button>
            <section className="flex flex-row items-center justify-center bg-background rounded-full w-full h-12 px-3 py-2 shadow-lg">
              <Button className="bg-[#BBBBBB] size-8 flex items-center justify-center rounded-full p-2 text-[#303030]/50 shadow-lg cursor-pointer hover:bg-[#BBBBBB]/80 transition-all duration-200 ease-in-out">
                <Paperclip className="size-4" />
              </Button>
              <Input className="border-none shadow-none focus-visible:ring-0 rounded-full" />
              <Button className="rounded-full bg-[#FFD292] text-foreground hover:bg-[#FFD292]/80 transition-all duration-200 ease-in-out cursor-pointer">
                Send
                <SendHorizontal className="size-4 ml-0 text-foreground" />
              </Button>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

export default page;
