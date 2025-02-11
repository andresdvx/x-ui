/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import SelectItem, { SelectItemProps } from "./SelectItem";

interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "size" | "onChange"> {
  items: SelectItemProps[];
  onSelectChange?: (
    selectedItem: SelectItemProps | SelectItemProps[] | null
  ) => void;
  label?: string;
  multiple?: boolean;
}

export const Select = ({
  items,
  onSelectChange,
  label = "Select an option",
  className,
  multiple = false,
  ...props
}: SelectProps) => {
  const [selected, setSelected] = useState<
    SelectItemProps | SelectItemProps[] | undefined
  >(undefined);

  const [open, setOpen] = useState<boolean>(false);

  const handleSelectItemClick = (item: SelectItemProps | SelectItemProps[]) => {

    if (!Array.isArray(selected) && !Array.isArray(item)) {
      if (multiple && selected && selected.value !== item.value) {
        setSelected(Array.from([selected, item]));
        if (onSelectChange) onSelectChange(selected);
        return;
      }

      if (selected && selected.value === item.value) {
        setSelected(undefined);
        setOpen(false);
        if (onSelectChange) onSelectChange(null);
        return;
      }
    }

    if (Array.isArray(selected) && !Array.isArray(item) && multiple) {
      if (selected.some(it => it.value == item.value)) {
        setSelected(selected.filter(it => it.value !== item.value));
        if (onSelectChange) onSelectChange(selected.filter(it => it.value !== item.value));
        return;
      }

      setSelected([...selected, item]);
      if (onSelectChange) onSelectChange(selected);
      return;
    }

    setSelected(item);
    setOpen(false);
    if (onSelectChange) onSelectChange(item);
  };

  return (
    <div
      {...props}
      className={`relative bg-white select-none border-1 border-[#8c8c8c] hover:border-[#0484ff] hover:shadow-[0_0_3px_#0484ff] rounded-md transition-all duration-300 ${className} `}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`h-full rounded-md cursor-pointer flex flex-col justify-center `}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <p
          className={`
        absolute left-3 transition-all duration-300 
        ${selected || open
              ? "top-0.5 text-sm text-[#8c8c8c]"
              : "top-1/2 -translate-y-1/2 text-md text-gray-500"
            }
      `}
        >
          {label}
        </p>
        {selected && (
          <p className="absolute top-6 left-3 text-sm text-gray-800">
            {Array.isArray(selected)
              ? selected.map((item) => item.label).join(", ")
              : selected.label}
          </p>
        )}

      </div>

      {open && (
        <ul
          className={`absolute w-full max-h-42 ${items.length > 4 && "overflow-y-scroll"
            } scroll-smooth !mt-1 flex flex-col gap-1 !p-1 bg-white rounded-md shadow-lg`}
          role="listbox"
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {items.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              label={item.label}
              selectedItem={selected || undefined}
              onClick={() => handleSelectItemClick(item)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
