import "./App.css"
import { Routes, Route } from "react-router";

// main routes
import Homepage from "./pages/Homepage";

// Auth routes
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard_layout from "./pages/dashboard/Dashboard_layout";
import Home from "./pages/dashboard/Home";
// import Discover from "./pages/dashboard/Discover";
import Discussion from "./pages/dashboard/Discussion";
import Setting from "./pages/dashboard/Setting";
import Create from "./pages/dashboard/Create";
import Saved from "./pages/dashboard/Saved";

import { ToastContainer } from 'react-toastify';
import ProtectedRoute from "./pages/dashboard/Protectroute";

const App = () => {
  return (
    <div className="bg-gray-900 h-screen overflow-hidden text-gray-200 " >
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />

        {/* Auth Routes */}
        <Route path="/auth" >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Dashboard Routes */}
        <Route element={<ProtectedRoute />} >
          <Route path="/dashboard" element={<Dashboard_layout />} >
            <Route path="home" element={<Home />} />
            {/* <Route path="discover" element={<Discover />} /> */}
            <Route path="setting" element={<Setting />} />
            <Route path="create" element={<Create />} />
            <Route path="saved" element={<Saved />} />
            <Route path="discussion/:id" element={<Discussion />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
