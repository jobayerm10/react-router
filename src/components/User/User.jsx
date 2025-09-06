import { Link } from "react-router-dom";

export const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyle = {
    border: "5px solid red",
    padding: "5px",
    borderRadius: "20px",
    marginBottom: "10px",
  };
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>email: {email}</p>
      <p>phone : {phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
      <Link to={`/user/${id}`}>
        <button>Click Me</button>
      </Link>
    </div>
  );
};
