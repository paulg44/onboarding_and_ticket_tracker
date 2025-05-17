const SignUp = () => {
  return (
    <div className="flex flex-col text-right">
      <div className="mb-5">
        <label htmlFor="name" className="labelCustom">
          Name
        </label>
        <input
          id="name"
          type="name"
          placeholder="Enter your Name"
          required
          className="inputCustom"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="labelCustom">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your Email"
          required
          className="inputCustom"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="password" className="labelCustom">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter a Password"
          required
          className="inputCustom"
        />
      </div>
      <button type="submit" className="btnCustom">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
