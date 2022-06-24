import React from "react";
import { AndCheckbox, Container, Icon, Wrapper } from "./style";

export const Checkbox = ({
  children,
  mr,
  ml,
  mb,
  mt,
  pl,
  onChange
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

export default Checkbox;
