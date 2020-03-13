import React, { useState } from "react";
import Dropdown from "../components/dropdown/dropdown";

export default function DropdownPage() {
  const list = [
    { label: "Selected choice" },
    { label: "Disabled choice" },
    { label: "Normal choice" }
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = React.useState(0);

  return (
    <Dropdown
      list={list}
      onClick={() => setIsOpen(!isOpen)}
      isOpen={isOpen}
      selectedItem={selectedItem}
      onSelectItem={(item, i) => {
        setSelectedItem(i);
        setIsOpen(false);
      }}
    />
  );
}
