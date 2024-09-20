// NEW: import useContext
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Error from "./Error";
// NEW: import AuthContext
import AuthContext from "../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  // NEW: grab the value attribute from AuthContext.Provider
  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    // This code executes if the request is successful
    if (response.status === 200) {
      const { jwt_token } = await response.json();
      console.log(jwt_token);
      // NEW: login!
      auth.login(jwt_token);
      navigate("/");
    } else if (response.status === 403) {
      setErrors(["Login failed."]);
    } else {
      setErrors(["Unknown error."]);
    }
  };

  return (
    <div>
      <h2 className="text-3xl p-6 font-semibold leading-7 text-gray-900">Login</h2>
      {errors.map((error, i) => (
        <Error key={i} msg={error} />
      ))}
      <form onSubmit={handleSubmit}>
        <div className="border-b border-gray-900/10 px-12">
          <div >
            {/* Includes for/id attributes for basic HTML accessibility ♿. */}
            <label className="pr-10" htmlFor="username">Username:</label>
            <input className="input input-bordered w-1/5"
              type="text"
              onChange={(event) => setUsername(event.target.value)}
              id="username"
            />
          </div>
          <div className="mt-3">
            <label className="pr-10" htmlFor="password">Password:</label>
            <input className="input input-bordered w-1/5 ml-1"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              id="password"
            />
          </div>
          <div className="p-3">
            <button className="btn btn-info btn-sm" type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}
