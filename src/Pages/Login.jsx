import styled from "styled-components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/authReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store.authReducer);
  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData)).then(() => {
      navigate(location.state, { replace: true });
    });
    setEmail("");
    setPassword("");
  };

  return (
    <DIV auth={auth}>
      <h2>USER LOGIN</h2>
      <h3>{auth ? "Login Successful" : "Login to Continue"}</h3>
      <FORM className="form-1" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </FORM>
    </DIV>
  );
}

export { Login };

const DIV = styled.div`
  width: 400px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid gray;
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  h3 {
    color: ${({ auth }) => (auth ? "green" : "red")};
  }
  input {
    width: 80%;
    height: 40px;
    font-size: large;
  }
  button {
    width: 20%;
    height: 35px;
  }
`;

const FORM = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;
