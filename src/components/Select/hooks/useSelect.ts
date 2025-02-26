import { useState, useRef, useEffect } from "react";
import { SelectItemProps } from "../SelectItem";

export interface useSelectProps {
  items: SelectItemProps[];
  selectedValues?: string[];
  multiple?: boolean;
  onValueChange?: (selectedItem: SelectItemProps[] | []) => void;
}

export const useSelect = ({ items, selectedValues, multiple, onValueChange }: useSelectProps) => {
  const [selected, setSelected] = useState<SelectItemProps[]>([]);

  const [open, setOpen] = useState<boolean>(false);

  const itemsToRender = useRef<SelectItemProps[] | []>(items);

  useEffect(() => {
    itemsToRender.current = items.filter((item: SelectItemProps) => {
      if (selectedValues?.includes(item.value))
        return [item, (item.selected = true)];
      if (!selectedValues?.includes(item.value)) return [item];
    });
  }, [selectedValues, items]);

  useEffect(() => {
    setSelected(itemsToRender.current.filter((item) => item.selected === true));
  }, []);

  useEffect(() => {
    selected.length == 0 ? setOpen(false) : null;
    onValueChange && onValueChange(selected ?? []);
  }, [onValueChange, selected]);

   const handleSelectItemClick = (item: SelectItemProps) => {
  
      setSelected((prev) => {
        if (multiple) {
          return prev.some((it) => it.value === item.value)
            ? prev.filter((it) => it.value !== item.value)
            : [...prev, item];
        } else {
          setOpen(false);
          return prev.some((it) => it.value === item.value) ? [] : [item];
        }
      });
    };

    return { selected, itemsToRender, open, setOpen, handleSelectItemClick };
};
