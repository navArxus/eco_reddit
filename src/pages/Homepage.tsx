import { Link } from "react-router"
const Homepage = () => {

  return (
    <div>
      this is home page
      <Link to="/auth/login">login</Link>
    </div>
  )
}

export default Homepage
