import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import Browse from "./components/pages/Browse";

function App() {
  return (
    <div className="App m-0 p-0">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse/:id" element={<Browse />} />
      </Routes>
    </div>
  );
}

export default App;
