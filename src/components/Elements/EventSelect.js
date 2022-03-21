import React, { useState } from "react";

const EventSelect = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open) {
      setOpen(false);
    }
    setOpen(!open);
  };
  return (
    <div>
      <a href="#" onClick={handleOpen}>
        {props.icon}
      </a>

      {open && props.children}
    </div>
  );
};

export default EventSelect;
