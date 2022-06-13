import styled from "styled-components";
import { Checkbox } from 'antd';

const AndCheckbox=styled(Checkbox)`
   margin-right: ${({ mr }) => `${mr}px`};
   margin-left: ${({ ml }) => `${ml}px`};
   margin-top: ${({ mt }) => `${mt}px`};
   margin-bottom: ${({ mb }) => `${mb}px`};
 `

export { AndCheckbox };
