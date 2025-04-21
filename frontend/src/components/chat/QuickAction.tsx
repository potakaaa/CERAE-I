import React, { ReactNode } from "react";
import { Button } from "../ui/button";

const QuickAction = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) => {
  return (
    <Button className="bg-background whitespace-normal h-full sm:h-[175px] flex rounded-3xl sm:px-5 p-5 max-w-md sm:max-w-[200px] lg:max-w-[250px] items-start shadow-lg hover:bg-background/40 transition-all duration-200 ease-in-out cursor-pointer">
      <div className="flex flex-col gap-1 md:gap-2 items-start w-full text-left">
        <div className="flex flex-row gap-2 sm:flex-col items-center sm:items-start justify-start">
          <span className="bg-primary p-2 rounded-lg shadow-md">{icon}</span>
          <h2 className="text-primary text-base lg:text-xl font-extrabold">
            {title}
          </h2>
        </div>
        <p className="text-primary font-normal text-[11px] md:text-xs break-words">
          {description}
        </p>
      </div>
    </Button>
  );
};

export default QuickAction;
