import React from "react";
import { Button } from "./ui/button";
import TooltipWrapper from "./tooltip-wrapper";

interface SizePickerProps {
  currentSize: number;
  handleSize: (val: number) => void;
}

const SizePicker = ({ currentSize, handleSize }: SizePickerProps) => {
  // Get current website fontSize and increament/decreament by 2.

  const handleIncreaseSize = () => {
    if (currentSize < 19) {
      handleSize(currentSize + 2);
    }
  };

  const handleDecreaseSize = () => {
    if (currentSize > 14) {
      handleSize(currentSize - 2);
    }
  };

  return (
    <div
      id="size-picker"
      className="center-component-alignment gap-0 md:gap-2 lg:gap-8"
    >
      <h4 className="text-black text-[1em] lg:text-lrg">
        <TooltipWrapper tooltipMsg="You can change size of website by increasing or decreasing button">
          Change Text Size:
        </TooltipWrapper>
      </h4>
      <div className="flex flex-wrap gap-4 justify-center align-middle">
        <Button variant="basic" onClick={handleIncreaseSize}>
          Increase Size
        </Button>
        <Button variant="basic" onClick={handleDecreaseSize}>
          Descrease Size
        </Button>
      </div>
    </div>
  );
};

export default SizePicker;
