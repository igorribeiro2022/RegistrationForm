import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  background-image: url("https://assets.entrepreneur.com/content/3x2/2000/20160628101609-Coding.jpeg");
  margin: 0;
  padding: 0;
  font-family: Open-Sans, Helvetica, Sans-Serif;
  background-position: center;
  background-size: 117vw;
  

    @media (max-width: 500px) {
        background-size: 100vh;
    }
}
`
export default GlobalStyle