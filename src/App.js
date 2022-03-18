import { Container } from "./components/styles/ContainerSectors.styles";
import GlobalStyle from "./components/styles/Global.styles";
import FullPage from "./components/FullPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <FullPage />
      </Container>
    </>
  );
}

export default App;
