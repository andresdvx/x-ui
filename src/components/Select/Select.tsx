/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import SelectItem, { SelectItemProps } from "./SelectItem";

interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "size" | "onChange"> {
  items: SelectItemProps[];
  onSelectChange?: (selectedItem: SelectItemProps | null) => void;
  label?: string
}

export const Select = ({
  items,
  onSelectChange,
  label = "Select an option",
  className,
  ...props
}: SelectProps) => {

  const [selected, setSelected] = useState<SelectItemProps | undefined>(undefined);
  const [open, setOpen] = useState<boolean>(false);

  const handleSelectItemClick = (item: SelectItemProps) => {

    if (selected && selected.value === item.value) {
      setSelected(undefined);
      setOpen(false);
      if (onSelectChange) onSelectChange(null);
      return;
    }

    setSelected(item);
    setOpen(false);
    if (onSelectChange) onSelectChange(item);
  };

  return (
    <div
      {...props}
      className={`relative bg-white select-none rounded-md ${className}`}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`h-full rounded-md cursor-pointer`}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <p className="text-sm text-left !px-3">{label}</p>
        <p className="text-sm text-left !px-3">{selected ? selected.label : ""}</p>
      </div>

      {open && (
        <ul
          className="absolute w-full !mt-1 flex flex-col gap-1 !p-1 bg-white rounded-md"
          role="listbox"
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
