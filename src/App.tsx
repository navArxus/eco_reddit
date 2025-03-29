import "./App.css"
import { Routes, Route } from "react-router";

// main routes
import Homepage from "./pages/Homepage";

// Auth routes
import Login from "./pages/auth/Login";


const App = () => {
  return (
    <div className="bg-gray-900 h-screen overflow-hidden text-gray-200 " >
      <Routes>
        <Route path="/" element={<Homepage/>} />

        {/* Auth Routes */}
        <Route path="/auth" >
          <Route path="login" element={<Login/>} />
          <Route path="register" element={"Register"} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" >
          <Route path="" element={"Home"} />
          <Route path="discover" element={"discover"} />
          <Route path="activity" element={"activity"} />
          <Route path="setting" element={"setting"} />
          <Route path="create" element={"create"} />
          <Route path="discussion/:id" element={"discussion"} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
