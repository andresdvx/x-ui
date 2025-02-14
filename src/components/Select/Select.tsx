import React, { useEffect, useState } from "react";
import SelectItem, { SelectItemProps } from "./SelectItem";
import ArrowIcon from "./svg/ArrowIcon";

interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "size" | "onChange"> {
  items: SelectItemProps[];
  label?: string;
  multiple?: boolean;
  onValueChange?: (
    selectedItem: SelectItemProps | SelectItemProps[] | null
  ) => void;
}

export const Select = ({
  items,
  label = "Select an option",
  className,
  multiple = false,
  onValueChange,
  ...props
}: SelectProps) => {
  const [selected, setSelected] = useState<
    SelectItemProps | SelectItemProps[] | null
  >(null);

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    onValueChange && onValueChange(selected ?? null);
  }, [selected, onValueChange]);

  const handleSelectItemClick = (item: SelectItemProps | SelectItemProps[]) => {
    if (!Array.isArray(selected) && !Array.isArray(item)) {
      if (multiple && selected && selected.value !== item.value) {
        setSelected(Array.from([selected, item]));
        return;
      }

      if (selected && selected.value === item.value) {
        setSelected(null);
        setOpen(false);
        return;
      }
    }

    if (Array.isArray(selected) && !Array.isArray(item) && multiple) {
      if (selected.some((it) => it.value == item.value)) {
        if (selected.length === 2) {
          setSelected(selected.filter((it) => it.value !== item.value)[0]);
          return;
        }

        setSelected(selected.filter((it) => it.value !== item.value));
        return;
      }

      setSelected([...selected, item]);
      return;
    }

    setSelected(item);
    setOpen(false);
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
          className={`absolute left-3 transition-all duration-300 ${
            selected || open
              ? "top-0.5 text-sm text-[#8c8c8c]"
              : "top-1/2 -translate-y-1/2 text-md text-gray-500"
          }`}
        >
          {label}
        </p>

        <ArrowIcon open={open} />

        {selected && (
          <p className="absolute top-6 left-3 text-sm text-gray-800">
            {Array.isArray(selected)
              ? selected.length > 1
                ? `${selected.length} items selected`
                : selected[0].label
              : selected.label}
          </p>
        )}
      </div>
      {open && (
        <ul
          className={`absolute w-full max-h-42 ${
            items.length > 4 && "overflow-y-scroll"
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
              className={`${item.disabled ? "opacity-50" : ""}`}
              key={item.value}
              disabled={item.disabled}
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
