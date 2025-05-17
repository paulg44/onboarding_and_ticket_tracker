import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignUp from "./components/authentication/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/signupPage"} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
