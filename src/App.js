import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryBrowser,
} from "react-router-dom";
import Home from "./components/Home";
import HomeTemplates from "./templates/HomeTemplates";


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="" element={<HomeTemplates/>}>
        {/* Home components */}
        <Route index element={<Home/>}></Route>
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
