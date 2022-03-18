import { Container } from "./components/styles/ContainerSectors.styles";
import GlobalStyle from "./components/styles/Global.styles";
import FullPage from "./components/FullPage";
import { CandidateProvider } from "./context/CandidateContext";

function App() {
  return (
    <>
      <CandidateProvider>
        <GlobalStyle />
        <Container>
          <FullPage />
        </Container>
      </CandidateProvider>
    </>
  );
}

export default App;
