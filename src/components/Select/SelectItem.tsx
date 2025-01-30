export interface SelectItemProps {
  label: string;
  value: string;
}

const SelectItem = ({ label, value }: SelectItemProps) => {
  return <option data-custom="true" value={value} className="">{label}</option>;
};

export default SelectItem;


