import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
:root{
    --button-color:#1E86FF;
    --text-color:#334680;
    --location-color:#B9BDCF;
    font-size:62.5%;
    margin:0;
    padding:0;
}
*{
    box-sizing:border-box;
}`;

export default Global;
