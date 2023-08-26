import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Food from "./pages/Food";
import Travel from "./pages/Travel";
import Technology from "./pages/Technology";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyBlogs from "./pages/MyBlogs";
import AddArticles from "./pages/AddArticles";
import Private from "./Components/Routes/Private";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/food" element={<Food />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/tech" element={<Technology />} />
      <Route
        path="/myblogs"
        element={
          <Private>
            <MyBlogs />
          </Private>
        }
      />
      <Route
        path="/add"
        element={
          <Private>
            <AddArticles />
          </Private>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
