import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { About } from "./components/molecule/home/About";
import { Articles } from "./components/molecule/home/Articles";
import { Series } from "./components/molecule/home/Series";
import { Page404 } from "./pages/404";
import { ArticlePage } from "./pages/Article";
import { EditPage } from "./pages/Edit";
import { Home } from "./pages/Home";
import { Write } from "./pages/Write";
import { UserInfoProvider } from "./states/user";
import { defaultTheme } from "./styles/theme";

function App() {
  return (
    <UserInfoProvider>
      <ThemeProvider theme={defaultTheme}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Articles />} />
            <Route path="/series" element={<Series />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/write" element={<Write />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </ThemeProvider>
    </UserInfoProvider>
  );
}

export default App;
