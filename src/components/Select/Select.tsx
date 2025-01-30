import { useState } from "react";
import { selectSizes } from "./data";
import { SelectItemProps } from "./SelectItem";

interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "size"> {
  items: SelectItemProps[];
  label?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Select = ({
  items,
  size = "sm",
  label = "Select an option",
  className,
  ...props
}: SelectProps) => {
  const [selected, setSelected] = useState<string>("");
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`w-[${selectSizes[size]}] relative bg-white select-none rounded-md transition-all duration-300 ${className}`}
      {...props}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`h-12 rounded-md cursor-pointer `}
      >
        <p className="text-sm text-left !pl-1">{label}</p>
        <p className="text-sm text-left !pl-1">{selected}</p>
      </div>

      {open && (
        <ul className="absolute w-full !mt-1 bg-white rounded-md">
          {items.map((item) => (
            <li
              key={item.value}
              className="h-10 rounded-md flex items-center !p-1 cursor-pointer"
              onClick={() => {
                setSelected(item.value);
                setOpen(false);
              }}
            >
              <p className="w-full text-sm !p-1 inline-block rounded-md hover:bg-gray-500 transition-all duration-300">{item.label}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
