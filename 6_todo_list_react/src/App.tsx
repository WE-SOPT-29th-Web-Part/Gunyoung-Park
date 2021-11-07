import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainContainer } from "./components/Layout";
import { MainArea } from "./components/MainArea";

function App() {
  return (
    <MainContainer>
      <Header />
      <MainArea />
      <Footer />
    </MainContainer>
  );
}

export default App;
