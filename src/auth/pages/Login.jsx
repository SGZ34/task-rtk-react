import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { useForm } from "../../hooks";
import { Layout } from "../layout";
import { login } from "../../features";

export const Login = () => {
  const { onChange, name, password } = useForm({ name: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      password,
    };
    dispatch(login(user));
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };
  return (
    <Layout>
      <form className="card col-md-8" onSubmit={handleSubmit}>
        <div className="card-header">
          <h2 className="text-center">Login</h2>
        </div>
        <div className="card-body">
          <input
            name="name"
            type="text"
            className="form-control mb-2"
            placeholder="Type your name"
            value={name}
            onChange={onChange}
          />
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Type your password"
            value={password}
            onChange={onChange}
          />
          <button className="btn btn-primary w-100 mt-4" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </Layout>
  );
};
