import { Route, Routes } from "react-router-dom";
import ForgetPassword from "./components/ForgetPassword";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Comment from "./components/Comment";
import "./App.css";
import AuthRequired from "./components/AuthRequired";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <AuthRequired>
              <Comment />
            </AuthRequired>
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
