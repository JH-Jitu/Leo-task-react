import React, { useState } from "react";

const EventSelect = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <a href="#" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </div>
  );
};

export default EventSelect;
