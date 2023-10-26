import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-bona-nova: 'Bona Nova';
--font-bowlby-one: 'Bowlby One';

/* font sizes */
--font-size-mini: 15px;
--font-size-xl: 20px;
--font-size-21xl: 40px;
--font-size-xs: 12px;

/* Colors */
--color-darkslategray: #323234;
--color-white: #fff;
--color-burlywood-100: #e1b674;
--color-burlywood-200: #e1b574;

/* Border radiuses */
--br-mini: 15px;

}
`;
