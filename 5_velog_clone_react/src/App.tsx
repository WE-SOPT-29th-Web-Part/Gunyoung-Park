import { Route, Routes } from "react-router";
import { Page404 } from "./pages/404";
import { Home } from "./pages/Home";
import { UserInfoProvider } from "./states/user";

function App() {
  return (
    <div>
      <UserInfoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </UserInfoProvider>
    </div>
  );
}

export default App;
