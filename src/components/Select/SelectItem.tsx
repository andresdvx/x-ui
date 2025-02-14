/* eslint-disable @typescript-eslint/no-unused-vars */
import CheckIcon from "./svg/CheckIcon";

export interface SelectItemProps
  extends IFunction,
    React.LiHTMLAttributes<HTMLLIElement> {
  label: string;
  value: string;
  disabled?: boolean;
}

interface IFunction {
  selectedItem?: SelectItemProps | SelectItemProps[];
}

const SelectItem = ({
  label,
  value,
  disabled = false,
  selectedItem,
  className,
  onClick,
  ...props
}: SelectItemProps) => {

  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (onClick) {
      onClick(event);
    }
  };


  return (
    <li
      {...props}
      onClick={handleClick}
      className={`rounded-md flex items-center cursor-pointer ${className}`}
    >
      <div className="w-full flex justify-between !p-2 rounded-sm hover:bg-gray-200 transition-all duration-300">
        <p className="text-sm">{label}</p>
        <p className="text-sm">
          {Array.isArray(selectedItem) &&
          selectedItem.some((item) => item.value == value) ? (
            <CheckIcon />
          ) : null}
          {!Array.isArray(selectedItem) &&
          selectedItem &&
          selectedItem.value === value ? (
            <CheckIcon />
          ) : null}
        </p>
      </div>
    </li>
  );
};

export default SelectItem;
