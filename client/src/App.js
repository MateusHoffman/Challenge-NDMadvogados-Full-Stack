import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./globalStyle";
import Home from "./pages/Home/Home";
import RegisterTeams from "./pages/RegisterTeams/RegisterTeams";
import RegisterPlayers from "./pages/RegisterPlayers/RegisterPlayers";
import NoMatch from "./pages/NoMatch/NoMatch";

function App() {
  return (
    <>
    <GlobalStyle />
    <div className="App">
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="register/teams" element={<RegisterTeams />} />
          <Route path="register/players" element={<RegisterPlayers />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
