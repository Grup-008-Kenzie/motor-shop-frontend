import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}
  body {
    margin: 0;
    padding: 0;
    background-color: #FFFFFF;
  }
  :root{
    --brand1: #4529E6;
    --brand1: #5126EA;
    --brand1: ##B0A6F0;
    --brand1: ##EDEAFD;

    --Grey-0: #0B0D0D;
    --Grey-1: #212529;
    --Grey-2: #495057;
    --Grey-3: #868E96;
    --Grey-4: #ADB5BD;
    --Grey-5: #CED4DA;
    --Grey-6: #DEE2E6;
    --Grey-7: #E9ECEF;
    --Grey-8: #F1F3F5;
    --Grey-9: #F8F9FA;
    --Grey-10: #FDFDFD;
    --WhiteFixed: #FFFFFF:

    --alert1:#CD2B31;
    --alert2:#FDD8D8;
    --alert3:#FFE5E5;

    --sucess1: #18794E;
    --sucess2: #CCEBD7;
    --sucess3: #DDF3E4;

    --random1: #E34D8C;
    --random2: #C04277;
    --random3: #7D2A4D;
    --random4: #7000FF;
    --random5: #6200E3;
    --random6: #36007D;
    --random7: #349974;
    --random8: #2A7D5F;
    --random9: #153D2E;
    --random10: #6100FF
    --random11: #5700E3;
    --random12: #30007D;

    
  }
`;
export default GlobalStyle;
