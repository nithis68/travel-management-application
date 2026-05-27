import axios from "axios";
import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/packages",
        {
          headers: {
            authorization: token,
          },
        }
      );

      setPackages(res.data);
    } catch (error) {
      alert("Please Login");

      navigate("/login");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div className="container">
      <h1>Travel Packages</h1>

      <button onClick={logout}>
        Logout
      </button>

      <div className="card-container">
        {packages.map((item, index) => (
          <div className="card" key={index}>
            <img
              src={item.image}
              alt={item.place}
            />

            <h3>{item.place}</h3>

            <p>{item.price}</p>

            <Link to={`/booking/${index}`}>
              <button>
                Book Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
