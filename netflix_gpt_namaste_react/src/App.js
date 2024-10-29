import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";

function App() {
  return (
    <div className="App m-0 p-0">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
