import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-track {
  background: #141414;
}
::-webkit-scrollbar-thumb {
  background: #00ff80;
  border-radius: 5px;
}

html,
body {
  height: 100vh;
  width: 100vw;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.75rem;;
  color: #141414;
  background-color: #ffffff;
  padding: 0 !important;
  margin: 0 !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow-x: hidden;
}

html {
  font-size: 1rem;
}
`;

export default GlobalStyle;
