import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FunnelIcon } from "@heroicons/react/24/outline";

function FilterDropdown({ onSelect }) {
  const categories = ["All", "Marketing", "Travel", "Tech"];
  const [value, setValue] = useState("All");

  const handleSelect = (category) => {
    setValue(category);
    onSelect?.(category);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="inline-flex items-center px-4 py-2 rounded-md border bg-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500">
          <FunnelIcon className="w-5 h-5 mr-2" />
          <span>{value}</span>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="mt-2 rounded-md bg-white shadow-md p-1" align="start">
        {categories.map((cat) => (
          <DropdownMenu.Item
            key={cat}
            className="px-3 py-1.5 text-sm rounded-sm cursor-pointer hover:bg-purple-100"
            onSelect={() => handleSelect(cat)}
          >
            {cat}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default FilterDropdown;
