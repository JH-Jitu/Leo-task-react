import React from "react";
import Select from "react-select";
import { toast } from "react-toastify";

const SelectOption = ({ candidate }) => {
  const selectOptions = [
    {
      label: "Active",
      color: "#C5E9F6",
      textColor: "#0892C1",
    },
    {
      label: "Available",
      color: "#C9F7E5",
      textColor: "#00CBA7",
    },
    {
      label: "Not Active",
      color: "#FEF1F2",
      textColor: "#F27881",
    },
  ];

  const dot = (color = "transparent") => ({
    borderRadius: "15px",
    width: "100%",
    height: "25px",
    paddingLeft: "10px",
    // backgroundColor: "#0892C1",
    alignItems: "center",
    display: "flex",
    // ":before": {
    //   backgroundColor: color,
    //   borderRadius: 10,
    //   content: '" "',
    //   display: "block",
    //   marginRight: 8,
    //   height: 10,
    //   width: 10,
    // },
  });

  const colourStyles = {
    control: (styles, { data }) => ({
      ...styles,
      appearance: "none",
      border: "none",
      color: "#0892C1",
    }),
    option: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: "white",
        color: "#0892C1",

        ":active": {
          ...styles[":active"],
          backgroundColor: data.color,
        },
      };
    },
    input: (styles) => ({
      ...styles,
      ...dot(),
      width: "105px",
      cursor: "pointer",
    }),
    placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
    singleValue: (styles, { data }) => ({
      ...styles,
      ...dot(data.color),
      backgroundColor: data.color,
      color: data.textColor,
      width: "105px",
      cursor: "pointer",
    }),
  };

  const handleChange = (activity) => {
    toast.success(`${candidate.name} is ${activity.label} now`);
  };

  return (
    <Select
      onChange={(e) => handleChange(e)}
      defaultValue={selectOptions[0]}
      options={selectOptions}
      styles={colourStyles}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        padding: 0,
        margin: 0,
        color: "none",
      })}
    />
  );
};

export default SelectOption;
