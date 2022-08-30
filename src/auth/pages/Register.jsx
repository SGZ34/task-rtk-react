import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { useForm } from "../../hooks";
import { Layout } from "../layout";

export const Register = () => {
  const { onChange, name, email, password } = useForm({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Layout>
      <form className="card col-md-8" onSubmit={handleSubmit}>
        <div className="card-header">
          <h2 className="text-center">Register</h2>
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
            name="email"
            type="email"
            className="form-control mb-2"
            placeholder="Type your email"
            value={email}
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
        </div>
        <button className="btn btn-primary w-100 mt-4" type="submit">
          Sign up
        </button>
      </form>
    </Layout>
  );
};
