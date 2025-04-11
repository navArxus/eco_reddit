import "./App.css"
import { Routes, Route } from "react-router";

// main routes
import Homepage from "./pages/Homepage";

// Auth routes
import Login from "./pages/auth/Login";
import Registerpage from "./pages/auth/Registerpage";
import Dashboard_layout from "./pages/dashboard/Dashboard_layout";
import Dashboardhomepage from "./pages/dashboard/Dashboardhomepage";
// import Discover from "./pages/dashboard/Discover";
import Discussionpage from "./pages/dashboard/Discussionpage";
import Settingpage from "./pages/dashboard/Settingpage";
import Createpage from "./pages/dashboard/Createpage";
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
          <Route path="register" element={<Registerpage />} />
        </Route>

        {/* Dashboard Routes */}
        <Route element={<ProtectedRoute />} >
          <Route path="/dashboard" element={<Dashboard_layout />} >
            <Route path="home" element={<Dashboardhomepage />} />
            {/* <Route path="discover" element={<Discover />} /> */}
            <Route path="setting" element={<Settingpage />} />
            <Route path="create" element={<Createpage />} />
            <Route path="saved" element={<Saved />} />
            <Route path="discussion/:id" element={<Discussionpage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
