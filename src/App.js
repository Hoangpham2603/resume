import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryBrowser,
} from "react-router-dom";
import Home from "./components/home/Home";
import HomeTemplates from "./templates/HomeTemplates";
import About from "./components/about/About";


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="" element={<HomeTemplates/>}>
        {/* Home components */}
        <Route index element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="*" element={<Navigate to ="" />}/>
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
