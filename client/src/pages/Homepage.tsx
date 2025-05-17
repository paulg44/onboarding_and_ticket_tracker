import { useState } from "react";

const Homepage = () => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <h1>Onboarding & Ticket System</h1>
      {user ? <p>Welcome {user}</p> : <p>Welcome. Please signup or login</p>}
    </div>
  );
};

export default Homepage;
