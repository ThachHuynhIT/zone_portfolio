import GlobalStyle from "./component/GlobalStyles";
import HomePage from "./pages/homePage";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <GlobalStyle>
      <HomePage></HomePage>
      <ScrollToTop></ScrollToTop>
    </GlobalStyle>
  );
}

export default App;
