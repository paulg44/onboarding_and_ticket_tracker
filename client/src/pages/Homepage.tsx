import { useState } from "react";

const Homepage = () => {
  const [user, setUser] = useState(null);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl">Onboarding & Ticket System</h1>
      {user ? <p>Welcome {user}</p> : <p>Welcome. Please signup or login</p>}
    </div>
  );
};

export default Homepage;
