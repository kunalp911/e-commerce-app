import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    const adminUser = {
      username: "admin",
      password: "admin123",
    };
    if (username === adminUser.username && password === adminUser.password) {
      localStorage.setItem("isAdmin", true);
      navigate("/");
      window.location.reload();
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div class="d-flex justify-content-center">
      <div class="container m-5 p-5 bg-light shadow rounded w-50">
        <h3>Login</h3>
        <form onSubmit={handleLogin} action="javascript:void(0);">
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
