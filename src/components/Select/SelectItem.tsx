export interface SelectItemProps {
  label: string;
  value: string;
}

const SelectItem = ({ label, value }: SelectItemProps) => {
  return <option value={value}>{label}</option>;
};

export default SelectItem;


