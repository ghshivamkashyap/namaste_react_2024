import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Login from "./components/pages/Login";
import Browse from "./components/pages/Browse";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./config/firebase";
import { useEffect } from "react";
import { setSignOut, setUserLogin } from "./utils/Redux_store/Slices/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        dispatch(setUserLogin({ user }));
        console.log("User is logged in: ", user);
      } else {
        dispatch(setSignOut());
        console.log("User is logged out");
      }
    });
  }, []);

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
