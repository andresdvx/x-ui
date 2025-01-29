import SelectItem, { SelectItemProps } from "./SelectItem";
import "./select.css";

interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "id"> {
  items: SelectItemProps[];
}

export const Select = ({ items }: SelectProps) => {
  return (
    <select id="select">
      {items.map((item) => {
        return (
          <SelectItem key={item.value} label={item.label} value={item.value} />
        );
      })}
    </select>
  );
};
