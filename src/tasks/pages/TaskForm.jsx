import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addTask, editTask } from "../../features";
import { useForm } from "../../hooks";
import { Layout } from "../layout";

export const TaskForm = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { onChange, name, description, setForm } = useForm({
    name: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: id ? id : uuid(),
      name,
      description,
    };
    if (id) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask(task));
    }

    navigate("/");
  };

  

  useEffect(() => {
    if (id) {
      const task = tasks.find((task) => task.id == id);
      setForm(task);
    }
  }, [id]);

  return (
    <Layout>
      <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <form className="card col-md-8" onSubmit={handleSubmit}>
          <div className="card-header">
            <h2 className="text-center">{id ? "Edit task" : "Create task"}</h2>
          </div>
          <div className="card-body">
            <input
              name="name"
              type="text"
              className="form-control mb-2"
              placeholder="Type task"
              value={name}
              onChange={onChange}
            />
            <textarea
              name="description"
              rows="4"
              style={{ resize: "none" }}
              className="form-control"
              placeholder="Type task's description"
              onChange={onChange}
              value={description}
            >
              {description}
            </textarea>
            <button className="btn btn-primary w-100 mt-4" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
