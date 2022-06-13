import React from "react";
import { AndCheckbox, Container, Icon, Wrapper } from "./style";

export const Input = ({
  children,
  mr,
  ml,
  mb,
  mt,
  pl,
  onChange,
  placeholder,
  defaultValue,
  value,
  name
}) => {
  return (
    <AndCheckbox
      mr={mr}
      ml={ml}
      mb={mb}
      mt={mt}
      onChange={onChange}>
      {children}
    </AndCheckbox>
  );
};

export default Input;
