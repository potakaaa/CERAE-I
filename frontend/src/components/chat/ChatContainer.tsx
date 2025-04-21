"use client";

import React, { useState } from "react";
import QuickAction from "./QuickAction";
import {
  ClipboardPlus,
  File,
  FileText,
  Paperclip,
  SendHorizontal,
  Settings,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const ChatContainer = () => {
  const [isTyping, setIsTyping] = useState(false);
  return (
    <section id="chat-container" className="flex flex-col gap-20">
      <div
        id="quick-actions-container"
        className="flex flex-col sm:flex-row gap-3 w-full items-center justify-center mt-10"
      >
        {" "}
        <QuickAction
          title="Make me a CERAE"
          description="Automatically generate your Clinical Experience, Reflection, and Evaluation Assignment."
          icon={<FileText className="size-4 lg:size-6  text-white" />}
        />
        <QuickAction
          title="Weekly Evaluation"
          description="Let CERAE-I help you reflect — auto generate your weekly evaluation for yourself, your CI, staff, and patients."
          icon={<ClipboardPlus className="size-4 lg:size-6 text-white" />}
        />
        <QuickAction
          title="Summarize My Duty"
          description="Get a quick reflection-style summary of what happened during your clinical rotation."
          icon={<File className="size-4 lg:size-6 text-white" />}
        />
      </div>
      <div
        id="input-container"
        className="w-full sm:w-[600px] lg:w-[900px] flex flex-row gap-3 items-center justify-center"
      >
        <Button
          className={cn(
            "bg-foreground size-8 sm:size-10 flex items-center justify-center rounded-full p-2 text-white shadow-lg cursor-pointer hover:bg-foreground/80 transition-all duration-200 ease-in-out",
            isTyping && "hidden lg:block"
          )}
        >
          <Settings className="size-4 sm:size-5" />
        </Button>
        <section className="flex flex-row items-center justify-center bg-background rounded-full w-full h-12 px-3 py-2 shadow-lg">
          <Button className="bg-[#BBBBBB] size-7 sm:size-8 flex items-center justify-center rounded-full p-2 text-[#303030]/50 shadow-lg cursor-pointer hover:bg-[#BBBBBB]/80 transition-all duration-200 ease-in-out">
            <Paperclip className="size-3 sm:size-4" />
          </Button>
          <Input
            className="border-none shadow-none focus-visible:ring-0 rounded-full text-sm sm:text-base"
            onFocus={() => setIsTyping(true)}
            onBlur={() => setIsTyping(false)}
          />
          <Button className="rounded-full bg-[#FFD292] text-foreground hover:bg-[#FFD292]/80 transition-all duration-200 ease-in-out cursor-pointer">
            <p className="hidden sm:block">Send</p>
            <SendHorizontal className="size-3 sm:size-4 ml-0 text-foreground" />
          </Button>
        </section>
      </div>
    </section>
  );
};

export default ChatContainer;
