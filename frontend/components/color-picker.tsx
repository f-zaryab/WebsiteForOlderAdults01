import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { themeOptions } from "@/lib/constants";

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
    <section className="bg-slate-500 w-full py-2 fixed top-0 z-20">
      <div className="max-w-screen-lg mx-auto flex gap-4 align-middle my-4">
        <h2 className="text-white">Theme Selection</h2>
        <RadioGroup
          defaultValue={themeSelected}
          onValueChange={handleOptionsChange}
          className="flex gap-4"
        >
          {themeOptions.map((option) => (
            <div className="flex items-center space-x-2" key={option}>
              <RadioGroupItem value={option} id={option} />
              <Label htmlFor={option}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </section>
  );
};

export default ColorPicker;
