import CheckIcon from "./svg/CheckIcon";

export interface SelectItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  label: string;
  value: string;
  selectedItem?: { label: string; value: string; } | undefined;
}

const SelectItem = ({ label, value, selectedItem, ...props }: SelectItemProps) => {
  return (
    <li
      {...props}
      className="rounded-md flex items-center cursor-pointer"
    >
      <div className="w-full flex justify-between !p-2 rounded-sm hover:bg-gray-300 transition-all duration-500">
        <p className="text-sm">{label}</p>
        <p className="text-sm">
          {selectedItem && selectedItem.value === value ? <CheckIcon /> : null}
        </p>
      </div>
    </li>
  );
};

export default SelectItem;
