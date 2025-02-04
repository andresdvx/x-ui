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
      className={`relative bg-white select-none border-1 border-[#8c8c8c] hover:border-[#0484ff] rounded-md transition-all duration-300 ${className} `}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`h-full rounded-md cursor-pointer flex flex-col justify-center `}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <p className={`h-[50%] text-md !px-3 text-[#8c8c8c] transition-all duration-200 ${(open && !selected) && '-translate-y-2 text-sm'} ${selected && 'text-sm'}`}>{label}</p>
      { selected && <p className="h-[50%] text-sm text-left !px-3">{selected ? selected.label : ""}</p>}
      </div>

      {open && (
        <ul
          className={`absolute w-full max-h-42 ${items.length > 5 && 'overflow-y-scroll'} scroll-smooth !mt-1 flex flex-col gap-1 !p-1 bg-white rounded-md shadow-lg`}
          role="listbox"
          style={{msOverflowStyle: 'none', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch'}}
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
