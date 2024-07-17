import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipWrapperProps {
  children: any;
  tooltipMsg: string;
}

const TooltipWrapper = ({ children, tooltipMsg }: TooltipWrapperProps) => {
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div>{children}</div>
            {/* <Button variant="outline" className="font-bold">{children}</Button> */}
          </TooltipTrigger>
          <TooltipContent className="z-30">
            <p className="p-2 text-white text-[1em] font-bold z-30 max-w-64">
              {tooltipMsg}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default TooltipWrapper;
