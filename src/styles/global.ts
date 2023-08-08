import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Inter', sans-serif;
}
  :root{
    --brand1: #006bba;
    --brand2: #10619c;
    --brand3: #6eb5ea;
    --brand4: #c3e3fa;

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
    --WhiteFixed: #FFFFFF;
    --Transparent: transparent;

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

  body {
    margin: 0;
    padding: 0;
    background-color: #FFFFFF;
  }



  * {
  scrollbar-width: thin;
  scrollbar-color: var(--brand2) var(--brand4);
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 8px;
  width: 8px;
}
*::-webkit-scrollbar-track {
  border-radius: 7px;
  background-color: var(--Grey-10);
}

*::-webkit-scrollbar-track:hover {
  background-color: var(--Grey-8);
}

*::-webkit-scrollbar-track:active {
  background-color: var(--Grey-8);
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: var(--brand1);
}

*::-webkit-scrollbar-thumb:hover {
  background-color: var(--alert1);
}

*::-webkit-scrollbar-thumb:active {
  background-color: var(--brand2);
}

  @-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
`;
export default GlobalStyle;
