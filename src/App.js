import { styled } from "styled-components";
import "./App.css";
import ProductPage from "./components/Product/ProductPage";
import Theme from "./styles/theme";
import { device } from "./styles/breakPoints";

function App() {
  return (
    <Theme>
      <ProductPage />
    </Theme>
  );
}

export default App;
