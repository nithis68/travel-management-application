import { useParams } from "react-router-dom";

function Booking() {
  const { id } = useParams();

  return (
    <div className="container">
      <h1>Booking Page</h1>

      <h2>
        Booking Package ID : {id}
      </h2>

      <button>
        Confirm Booking
      </button>
    </div>
  );
}

export default Booking;
