import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./components/pages/Login";
import Browse from "./components/pages/Browse";
import appStore from "./utils/Redux_store/appStore";

function App() {
  return (
    <div className="App m-0 p-0">
      <Provider store={appStore}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse/:id" element={<Browse />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
