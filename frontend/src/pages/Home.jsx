import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Travel Management System</h1>

      <div className="btn-group">
        <Link to="/register">
          <button>Register</button>
        </Link>

        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
