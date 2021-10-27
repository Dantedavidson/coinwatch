import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}

body {
  background-color: #182039;
}

.MuiTableCell-root{
 && {  
   font-size:11px;
   color:#fff;
  }
}

.MuiTypography-root{
  color:inherit;
}

.MuiPaginationItem-root.MuiPaginationItem-sizeMedium.MuiPaginationItem-text {
  color: #fff;
}
    

button,
input,
optgroup,
select,
textarea,html input[type="button"],
input[type="reset"],
input[type="submit"],button[disabled],
html input[disabled],button::-moz-focus-inner,
input::-moz-focus-inner, input[type="checkbox"],
input[type="radio"], input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button, input[type="search"], input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration{
  border:none;
  background-image:none;
  background-color:transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
`;
