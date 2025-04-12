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
    <Button className="bg-background whitespace-normal h-[175px] flex rounded-3xl p-5 max-w-[250px] items-start shadow-lg hover:bg-background/40 transition-all duration-200 ease-in-out cursor-pointer">
      <div className="flex flex-col gap-2 items-start w-full text-left">
        <span className="bg-primary p-2 rounded-lg shadow-md">{icon}</span>
        <h2 className="text-primary text-xl font-extrabold">{title}</h2>
        <p className="text-primary font-normal text-xs break-words">
          {description}
        </p>
      </div>
    </Button>
  );
};

export default QuickAction;
