import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { themeOptions } from "@/lib/constants";
import TooltipWrapper from "./tooltip-wrapper";

interface ColorPickerProps {
  themeSelected: string;
  themeChange: (val: string) => void;
}

const ColorPicker = ({ themeSelected, themeChange }: ColorPickerProps) => {
  // hanldeChange function to get selected theme option and send it to parent to change state in the layout
  const handleOptionsChange = (valueSelected: string) => {
    themeChange(valueSelected);
  };

  return (
    <section
      className="center-component-alignment gap-0 md:gap-2 lg:gap-8"
      id="color-picker"
    >
      <h4 className="text-black text-[1em] lg:text-lrg">
        <TooltipWrapper tooltipMsg="You can change colors/theme on website by selection on of the radio buttons on right">
          Theme Selection:
        </TooltipWrapper>
      </h4>
      <RadioGroup
        defaultValue={themeSelected}
        onValueChange={handleOptionsChange}
        className="flex gap-4 flex-wrap md:flex-nowrap"
      >
        {themeOptions.map((option) => (
          <div className="flex  items-center space-x-2" key={option}>
            <RadioGroupItem
              value={option}
              id={option}
              aria-label={option}
              aria-labelledby={option}
            />
            <Label htmlFor={option} className="text-black" aria-label={option}>
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </section>
  );
};

export default ColorPicker;
