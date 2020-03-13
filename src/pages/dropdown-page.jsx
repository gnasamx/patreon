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
  console.log("== selectedItem: ", selectedItem);
  return (
    <Dropdown
      list={list}
      onClick={() => setIsOpen(!isOpen)}
      isOpen={isOpen}
      onSelectItem={(item, i) => {
        console.log("== I is: ", i);
        setSelectedItem(i);
        setIsOpen(false);
      }}
    />
  );
}
